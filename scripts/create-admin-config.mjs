#!/usr/bin/env node
import { randomBytes, scryptSync } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { parseArgs } from 'node:util';

const { values } = parseArgs({ options: { username: { type: 'string' }, origin: { type: 'string' }, output: { type: 'string' } } });
if (!values.username || !/^[a-zA-Z0-9._-]{3,64}$/.test(values.username) || !values.origin || !values.output) {
  throw new Error('Usage: password on stdin | node scripts/create-admin-config.mjs --username USER --origin https://SITE --output /private/runtime.env');
}
const origin = new URL(values.origin);
if (!['http:', 'https:'].includes(origin.protocol) || origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash) throw new Error('Expected an HTTP(S) origin without a path');
let input = '';
for await (const chunk of process.stdin) {
  input += chunk;
  if (input.length > 1024) throw new Error('Password input too long');
}
const password = input.replace(/\r?\n$/, '');
if (password.length < 16 || password.length > 128) throw new Error('Use a password between 16 and 128 characters');
const salt = randomBytes(16);
const hash = scryptSync(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 });
const key = randomBytes(24).toString('hex');
const content = [
  'ANALYTICS_ENABLED=true', 'DATA_DIR=/app/data', `ADMIN_ORIGIN=${origin.origin}`,
  `ADMIN_ROUTE_KEY=${key}`, `ADMIN_USERNAME=${values.username}`,
  `ADMIN_PASSWORD_HASH=scrypt-v1:${salt.toString('hex')}:${hash.toString('hex')}`,
  `ADMIN_SESSION_SECRET=${randomBytes(32).toString('hex')}`, '',
].join('\n');
writeFileSync(values.output, content, { mode: 0o600, flag: 'wx' });
console.log(`Configuration saved to ${values.output}`);
console.log(`Admin URL: ${origin.origin}/control-room/${key}`);
console.log('The plaintext password was not saved. Production requires HTTPS.');
