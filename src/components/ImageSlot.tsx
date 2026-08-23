/**
 * Stands in for the design project's `<image-slot>` custom element: a
 * fillable placeholder for artwork that does not exist yet. Fills its
 * nearest positioned ancestor, so give the parent `position:relative`
 * and a height.
 *
 * Swap for `next/image` once there is a real screenshot to show.
 */
export default function ImageSlot({ placeholder }: { placeholder: string }) {
  return (
    <div
      role="img"
      aria-label={placeholder}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: 16,
        textAlign: "center",
        background:
          "linear-gradient(140deg, color-mix(in srgb, var(--color-accent) 7%, var(--color-neutral-900)), var(--color-neutral-900))",
        border: "1px dashed var(--color-neutral-800)",
        color: "var(--color-neutral-600)",
      }}
    >
      <i className="ph ph-image" style={{ fontSize: 26, color: "var(--color-neutral-700)" }} />
      <span style={{ fontSize: 12, lineHeight: 1.4, maxWidth: "28ch" }}>{placeholder}</span>
    </div>
  );
}
