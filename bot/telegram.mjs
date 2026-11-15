import { rm, writeFile } from 'node:fs/promises';
import { setTimeout as delay } from 'node:timers/promises';
import { pathToFileURL } from 'node:url';

const readyFile = '/tmp/wwn-telegram-ready';

export async function replyToStart(request, update, username) {
  const message = update.message;
  if (message?.chat?.type !== 'private' || message.from?.is_bot) return;
  const command = message.entities?.find((entity) => entity.offset === 0 && entity.type === 'bot_command');
  if (!command) return;
  const text = message.text?.slice(0, command.length)?.toLowerCase();
  if (text !== '/start' && text !== `/start@${username.toLowerCase()}`) return;
  await request('sendMessage', {
    chat_id: message.chat.id,
    text: 'Привет! Я Иван Величко. Помогаю запускать веб-сервисы, автоматизировать работу и снижать число сбоев.',
    reply_markup: {
      inline_keyboard: [[{ text: 'Открыть визитку', web_app: { url: 'https://wwncv.tech/telegram/index.html' } }]],
    },
  });
}

async function run() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!/^\d+:[\w-]+$/.test(token ?? '')) throw new Error('Set TELEGRAM_BOT_TOKEN in the bot environment');
  const shutdown = new AbortController();
  process.once('SIGTERM', () => shutdown.abort());
  process.once('SIGINT', () => shutdown.abort());

  async function request(method, data = {}) {
    let response;
    let body;
    try {
      response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
        method: 'POST',
        redirect: 'error',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.any([shutdown.signal, AbortSignal.timeout(data.timeout ? 35000 : 12000)]),
      });
      body = await response.json();
    } catch {
      // Network errors may contain the token-bearing URL.
      throw new Error(`Telegram ${method} request failed`);
    }
    if (!response.ok || !body.ok) {
      const code = Number(body.error_code) || response.status;
      throw Object.assign(new Error(`Telegram ${method} returned ${code}`), {
        code,
        retryAfter: Math.min(Number(body.parameters?.retry_after) || 0, 60),
      });
    }
    return body.result;
  }

  await rm(readyFile, { force: true });
  const { username } = await request('getMe');
  const { url } = await request('getWebhookInfo');
  if (url) throw new Error('Telegram bot already has a webhook; use a dedicated token or remove the webhook first');
  let offset;
  let failures = 0;
  let announced = false;
  while (!shutdown.signal.aborted) {
    try {
      // Telegram acknowledges the previous batch only when the next offset is sent.
      const updates = await request('getUpdates', { offset, timeout: 25, allowed_updates: ['message'] });
      await writeFile(readyFile, '');
      if (!announced) {
        console.log(`Telegram bot @${username} is polling`);
        announced = true;
      }
      for (const update of updates) {
        if (shutdown.signal.aborted) break;
        try {
          await replyToStart(request, update, username);
        } catch (error) {
          // A single rejected chat should not block the rest of the queue.
          if (![400, 403].includes(error.code)) throw error;
          console.error(error.message);
        }
        offset = update.update_id + 1;
      }
      failures = 0;
    } catch (error) {
      if (shutdown.signal.aborted) break;
      if ([401, 404, 409].includes(error.code)) throw error;
      console.error(error.message);
      const waitSeconds = Math.max(error.retryAfter ?? 0, Math.min(2 ** ++failures, 30));
      await delay(waitSeconds * 1000, undefined, { signal: shutdown.signal }).catch(() => {});
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  run().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
