import { readFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const glyphs = {
  development: '▤',
  infrastructure: '▱',
  delivery: '↗',
  reliability: '✓',
  research: '◇',
};
const order = ['research', 'development', 'infrastructure', 'delivery', 'reliability'];
const stepIntervalMs = 120;
const stepDurationMs = 300;
const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
const escapeHtml = (value) => value.replace(/[&<>"]/g, (character) => entities[character]);

export function renderGreeting(catalog, template) {
  const rows = order.map((id, index) => {
    const service = catalog.find((entry) => entry.id === id);
    if (!service) throw new Error(`Missing service: ${id}`);
    const { title, description } = service.greeting;
    return `    <div class="service" style="--delay:${index * stepIntervalMs}ms">
      <span class="mark" aria-hidden="true">${glyphs[id]}</span>
      <div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(description)}</p></div>
    </div>`;
  });
  const resultDelay = (rows.length - 1) * stepIntervalMs + stepDurationMs;
  const html = template
    .replace('{{SERVICES}}', rows.join('\n'))
    .replace('{{STEP_DURATION}}', String(stepDurationMs))
    .replace('{{RESULT_DELAY}}', String(resultDelay));
  if (Buffer.byteLength(html) > 32768 || deflateSync(html, { level: 9 }).length > 4096) {
    throw new Error('Telegram widget exceeds the HTML size limit');
  }
  return html;
}

export function loadGreeting() {
  const catalog = JSON.parse(readFileSync(new URL('../../src/lib/workshop/services.json', import.meta.url), 'utf8'));
  const template = readFileSync(new URL('./greeting.html', import.meta.url), 'utf8');
  return renderGreeting(catalog, template);
}
