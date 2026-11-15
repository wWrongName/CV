import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadGreeting } from './html-bubble/render-greeting.mjs';
import { replyToStart } from './telegram.mjs';

const start = {
  chat: { type: 'private', id: 42 },
  from: { is_bot: false },
  text: '/start demo',
  entities: [{ offset: 0, length: 6, type: 'bot_command' }],
};

test('the archived HTML Bubble still renders within Telegram limits', () => {
  const html = loadGreeting();
  assert.match(html, /Привет!/);
  assert.match(html, /Смотреть проекты/);
  assert.match(html, /https:\/\/wwncv\.tech\/ru/);
});

test('sends a greeting with a link to the website in the private chat', async () => {
  const requests = [];
  await replyToStart(async (...args) => requests.push(args), { message: start }, 'TestBot');
  assert.equal(requests.length, 1);
  const [[method, payload]] = requests;
  assert.equal(method, 'sendMessage');
  assert.equal(payload.chat_id, 42);
  assert.match(payload.text, /^Привет!/);
  assert.deepEqual(payload.reply_markup.inline_keyboard, [
    [{ text: 'Открыть визитку', web_app: { url: 'https://wwncv.tech/telegram/index.html' } }],
  ]);
});

test('ignores ordinary messages, groups, business chats and commands to other bots', async () => {
  const request = async () => assert.fail('unexpected reply');
  const addressed = { ...start, text: '/start@OtherBot', entities: [{ ...start.entities[0], length: 15 }] };
  for (const update of [
    { message: { ...start, text: 'Привет', entities: [] } },
    { message: { ...start, chat: { ...start.chat, type: 'group' } } },
    { business_message: start },
    { message: addressed },
  ]) {
    await replyToStart(request, update, 'TestBot');
  }
});
