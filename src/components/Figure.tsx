import ImageSlot from "@/components/ImageSlot";
import Zoomable from "@/components/Zoomable";
import type { Shot } from "@/data/projects";

/**
 * A framed image with an optional caption: the box that reserves the space,
 * the image inside it, and the dashed placeholder when the image does not
 * exist yet.
 *
 * Shared by the case studies and the blog so that clicking an image to read
 * it works everywhere, rather than on whichever page it was built for. The
 * frame is only drawn around a real image — `ImageSlot` brings its own
 * dashed border, and nesting the two looked like a mistake.
 */
export default function Figure({
  shot,
  placeholder,
  height,
  priority,
  sizes,
}: {
  shot?: Shot;
  /** Describes the image that is still missing. Omit and nothing renders. */
  placeholder?: string;
  /** Any CSS length. The caller decides, because a hero and a supporting
      shot want different heights out of the same component. */
  height: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!shot && !placeholder) return null;

  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: "relative",
          height,
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          ...(shot
            ? {
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
              }
            : null),
        }}
      >
        {shot ? (
          <Zoomable src={shot.src} alt={shot.alt} priority={priority} fit={shot.fit} sizes={sizes} />
        ) : (
          <ImageSlot placeholder={placeholder!} />
        )}
      </div>
      {shot?.caption ? (
        <figcaption
          style={{
            marginTop: 10,
            fontSize: 13.5,
            lineHeight: 1.55,
            color: "var(--color-neutral-400)",
          }}
        >
          {shot.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
