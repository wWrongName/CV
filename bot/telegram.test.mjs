import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadGreeting } from './render-greeting.mjs';
import { replyToStart } from './telegram.mjs';

const start = {
  chat: { type: 'private', id: 42 },
  from: { is_bot: false },
  text: '/start demo',
  entities: [{ offset: 0, length: 6, type: 'bot_command' }],
};

test('sends the actual greeting widget to the private chat that starts the bot', async () => {
  const requests = [];
  const html = loadGreeting();
  assert.match(html, /Привет!/);
  assert.match(html, /Смотреть проекты/);
  assert.match(html, /https:\/\/wwncv\.tech\/ru/);
  await replyToStart(async (...args) => requests.push(args), { message: start }, html, 'TestBot');
  assert.deepEqual(requests, [['sendWidget', { chat_id: 42, html }]]);
});

test('ignores ordinary messages, groups, business chats and commands to other bots', async () => {
  const request = async () => assert.fail('unexpected widget');
  const addressed = { ...start, text: '/start@OtherBot', entities: [{ ...start.entities[0], length: 15 }] };
  for (const update of [
    { message: { ...start, text: 'Привет', entities: [] } },
    { message: { ...start, chat: { ...start.chat, type: 'group' } } },
    { business_message: start },
    { message: addressed },
  ]) {
    await replyToStart(request, update, '', 'TestBot');
  }
});
