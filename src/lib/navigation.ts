export type JourneyPosition = { project: number; step: number };

export function advanceJourney(
  position: JourneyPosition,
  direction: 1 | -1,
  chapterCounts: readonly number[],
): JourneyPosition {
  const { project, step } = position;
  if (direction === 1) {
    if (step < chapterCounts[project] - 1) return { project, step: step + 1 };
    if (project === chapterCounts.length - 1) return position;
    return { project: project + 1, step: 0 };
  }
  if (step > 0) return { project, step: step - 1 };
  if (project === 0) return position;
  const previous = project - 1;
  return { project: previous, step: chapterCounts[previous] - 1 };
}
