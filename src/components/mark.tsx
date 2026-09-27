// Reuse the favicon asset so the navbar and browser tab always share one mark.
export function Mark() {
  return <img src="/icon.svg" width={34} height={34} alt="" aria-hidden="true" className="identity-mark" />;
}
