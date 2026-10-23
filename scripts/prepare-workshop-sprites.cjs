/** Re-encode saved native alpha masters; no generation, retouching or upscaling. */
const fs = require("node:fs/promises");
const fsSync = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");
const repository = process.env.WORKSHOP_REPO || process.cwd();
const output = process.env.WORKSHOP_OUTPUT || repository;
const sharp = createRequire(fsSync.realpathSync(path.join(repository, "node_modules/next/package.json")))("sharp");
async function save(asset, quality) {
  if (!asset.master) return;
  const input = path.join(repository, asset.master);
  const metadata = await sharp(input).metadata();
  if (!metadata.hasAlpha) throw new Error(`${asset.master}: alpha is required`);
  for (const file of asset.files) {
    const target = path.join(output, "public", file.src);
    await fs.mkdir(path.dirname(target), { recursive: true });
    const result = await sharp(input).resize({ width: file.width }).webp({ quality, alphaQuality: 100, effort: 5 }).toFile(target);
    file.width = result.width; file.height = result.height; file.bytes = result.size;
  }
}
async function write(relative, value) {
  const target = path.join(output, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, JSON.stringify(value, null, 2) + "\n");
}
(async () => {
  const read = async relative => JSON.parse(await fs.readFile(path.join(repository, relative), "utf8"));
  const assets = await read("src/lib/workshop/assets.json");
  const reactions = await read("src/lib/workshop/reactions.json");
  const furniture = await read("src/lib/workshop/furniture.json");
  for (const asset of Object.values(assets)) await save(asset, 94);
  for (const frame of Object.values(reactions)) await save(frame.asset, 94);
  const done = new Set();
  for (const layer of furniture) if (!done.has(layer.master)) { await save(layer, 96); done.add(layer.master); }
  // Reused hanging plants share the encoded files and byte metadata.
  for (const layer of furniture) layer.files = furniture.find(item => item.master === layer.master).files;
  await write("src/lib/workshop/assets.json", assets);
  await write("src/lib/workshop/reactions.json", reactions);
  await write("src/lib/workshop/furniture.json", furniture);
  console.log("Saved sprite variants from project-native masters; preserved alpha and scene geometry.");
})();
