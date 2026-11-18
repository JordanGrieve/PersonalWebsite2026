/**
 * Says, to a screen reader only, that a link leaves the site in a new tab.
 *
 * Sighted readers get that from the browser the moment it happens. A screen
 * reader user gets no such cue: focus lands in a different tab with a
 * different history, and Back does nothing. Telling them first is the fix
 * (WCAG technique G201).
 *
 * Goes inside the link, after its text.
 */
export default function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}
