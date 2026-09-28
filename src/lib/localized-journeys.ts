import { journeys, projectMap, type Journey } from "./journeys";
import english from "./journeys.en.json";
import { messages, type Locale } from "./i18n";
export function getJourneys(locale: Locale): Journey[] { return locale === "en" ? english as Journey[] : journeys; }
export function getProjectMap(locale: Locale): Journey {
  const localized = getJourneys(locale);
  return { ...projectMap, name: messages[locale].projects, nodes: projectMap.nodes.map(node => ({ ...node, label: localized.find(j => j.id === node.id)!.name, detail: node.id === "llmops" ? messages[locale].researchPrototype : messages[locale].openProject })) };
}
