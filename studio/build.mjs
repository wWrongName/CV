// Build locale-specific studio HTML and bundles from the same templates.
import {readFile, writeFile} from 'node:fs/promises';
import {basename, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = resolve(root, 'studio/reference-head');
const output = resolve(root, 'public/studio');
const read = path => readFile(resolve(root, path), 'utf8');
const readJson = async path => JSON.parse(await read(path));

const english = await readJson('studio/reference-head/english.json');
const research = await readJson('src/lib/research.en.json');
const resume = await readJson('src/lib/resume.en.json');

function translate(text, path) {
  return text.replace(/[^<>"'`\n{}$]+/g, fragment => {
    const key = fragment.trim();
    if (!/[\u0400-\u04ff]/u.test(key) || key === 'Русский') return fragment;
    if (!Object.hasOwn(english, key)) throw new Error(`Missing English text in ${path}: ${key}`);
    return fragment.replace(key, english[key]);
  });
}

const englishTemplates = new Set([
  'contact-qr.js', 'cover-variants.js', 'delivery-platform-case.js', 'editorial-scene.js',
  'llmops-case.js', 'operations-case.js', 'paas-chapter-preview.js', 'paas-launch.js',
  'project-previews.js', 'studio-about.js', 'studio-editorial.js', 'studio-offerings.js', 'studio-source.js',
]);
const localized = {
  name: 'studio-english',
  setup(build) {
    build.onLoad({filter: /reference-head\/(?:editorial-content\.json|.*\.js)$/}, async ({path}) => {
      const name = basename(path);
      if (name === 'editorial-content.json') {
        const data = JSON.parse(await readFile(path, 'utf8'));
        return {contents: JSON.stringify({...data, research}), loader: 'json'};
      }
      if (name === 'studio-content.js') {
        const {fullName, headline, summary} = resume;
        return {contents: `export default ${JSON.stringify({resume: {fullName, headline, summary}})};`, loader: 'js'};
      }
      if (englishTemplates.has(name)) {
        return {contents: translate(await readFile(path, 'utf8'), name), loader: 'js'};
      }
    });
  },
};

for (const [filename, plugins] of [['studio.js', []], ['studio-en.js', [localized]]]) {
  const result = await Bun.build({entrypoints: [resolve(source, 'studio-source.js')], minify: true, target: 'browser', plugins});
  if (!result.success) throw new AggregateError(result.logs, 'Studio bundle failed');
  await writeFile(resolve(output, filename), (await result.outputs[0].text()).replace(/[ \t]+$/gm, ''));
}

const russianHtml = await readFile(resolve(output, 'index.html'), 'utf8');
const englishHtml = translate(russianHtml, 'index.html')
  .replace('<html lang="ru">', '<html lang="en">')
  .replace('hreflang="en" href="/en"', 'hreflang="ru" href="/ru"')
  .replaceAll('href="/ru', 'href="/en')
  .replace('rel="canonical" href="https://wwnsolution.com/ru"', 'rel="canonical" href="https://wwnsolution.com/en"')
  .replace('hreflang="ru" href="/en"', 'hreflang="ru" href="/ru"')
  .replace('/studio/studio.js?', '/studio/studio-en.js?');
await writeFile(resolve(output, 'en.html'), englishHtml);
