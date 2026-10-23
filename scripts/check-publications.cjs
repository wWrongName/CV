const fs = require("node:fs");
const assert = require("node:assert/strict");
const ts = require("typescript");
const data = {};
new Function("exports", ts.transpileModule(fs.readFileSync("src/lib/workshop/publications.ts", "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(data);
const { technicalArticles, scientificPublications } = data;
assert.equal(technicalArticles.length, 6, "cross-posts count as one material");
assert.equal(scientificPublications.length, 6);
assert.equal(scientificPublications.filter(item => item.kind === "journal" && item.language === "ru").length, 4, "four Russian journal articles, not conference abstracts or software certificates");
assert.equal(scientificPublications.filter(item => item.kind === "conference").length, 2);
const ids = [...technicalArticles, ...scientificPublications].map(item => item.id);
assert.equal(new Set(ids).size, ids.length, "publication IDs are unique");
const urls = [];
for (const article of technicalArticles) {
  assert.ok(article.versions.length > 0);
  assert.equal(new Set(article.versions.map(version => version.language)).size, article.versions.length, "a material has at most one edition per language");
  for (const version of article.versions) {
    const url = new URL(version.href);
    assert.equal(url.protocol, "https:");
    assert.equal(url.hostname, version.platform === "DEV" ? "dev.to" : "habr.com");
    assert.ok(version.title.length > 0);
    urls.push(version.href);
  }
}
assert.equal(urls.length, 8);
assert.equal(new Set(urls).size, urls.length, "an edition is not duplicated across cards");
for (const [id, habrId, devSlug] of [
  ["wildcard-certificates", "1071764", "automating-wildcard-certificates-avoid-complex-ns-servers-27n2"],
  ["database-migration", "1061438", "zero-downtime-mariadb-postgresql-migration-why-the-usual-tools-fell-short-and-how-debezium-cdc-424f"],
]) {
  const article = technicalArticles.find(item => item.id === id);
  assert.ok(article.versions.some(version => version.language === "ru" && version.href.endsWith(`/${habrId}/`)));
  assert.ok(article.versions.some(version => version.language === "en" && version.href.endsWith(`/${devSlug}`)));
}
const dois = scientificPublications.filter(item => item.doi).map(item => item.doi.toLowerCase());
assert.equal(new Set(dois).size, dois.length);
assert.equal(new Set(scientificPublications.map(item => item.href)).size, scientificPublications.length);
for (const publication of scientificPublications) {
  if (publication.doi) assert.match(publication.doi, /^10\.\d{4,9}\/\S+$/);
  assert.equal(new URL(publication.href).protocol, "https:");
  assert.ok(publication.authors.includes(publication.language === "ru" ? "Величко И. С." : "Ivan Velichko"));
  if (publication.kind === "journal") {
    assert.ok(publication.issue);
    assert.ok(["jisp.spbstu.ru", "i-us.ru", "journal-ekss.ru"].includes(new URL(publication.href).hostname));
  } else assert.ok(publication.venue.includes(String(publication.year)));
}
const lora = scientificPublications.find(item => item.id === "lora-certification-2026");
assert.equal(lora.doi, undefined, "do not invent a DOI for the journal PDF");
assert.equal(lora.format, "pdf");
assert.equal(scientificPublications.filter(item => item.kind === "journal").at(-1).id, "lora-certification-2026", "LoRA certification closes the Russian journal list");
console.log("Publications: 6 unique technical materials / 8 language editions; 4 Russian journal articles and 2 international papers; links, DOI identifiers and cross-post pairs checked.");
