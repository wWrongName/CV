// Step -2 is the introduction (project 0 only); -1 is a project preview.
export type JourneyPosition = { project: number; step: number };

export function advanceJourney(
  position: JourneyPosition,
  direction: 1 | -1,
  chapterCounts: readonly number[],
): JourneyPosition {
  const { project, step } = position;
  if (step === -2) return direction === 1 ? { project: 0, step: -1 } : position;
  if (direction === 1) {
    if (step < chapterCounts[project] - 1) return { project, step: step + 1 };
    if (project === chapterCounts.length - 1) return position;
    return { project: project + 1, step: -1 };
  }
  if (step >= 0) return { project, step: step - 1 };
  if (project === 0) return position;
  const previous = project - 1;
  return { project: previous, step: chapterCounts[previous] - 1 };
}
