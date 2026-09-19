import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";
import { heroImages } from "@/data/heroImages";

/**
 * The picture at the top of a project card, on the home page and in the
 * work grid: the case study's hero if it has one, the dashed placeholder
 * if it does not.
 *
 * `cover` rather than the `contain` the case study itself uses. A card is
 * roughly 3:2 and the heroes are wide banners, so fitting one whole would
 * leave two thick empty bands and a picture too small to read anything in.
 * Cropping is the right trade here — the card is a door, not evidence.
 *
 * Weighted right rather than centred, because a wide illustration usually
 * builds to something on that side: a centred crop of the geo-routing hero
 * cut both storefronts off the end of it and kept the empty approach.
 *
 * Fills its parent, which supplies the height, so a card gains a picture
 * without changing size.
 */
export default function CardThumb({
  slug,
  placeholder,
  sizes = "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw",
}: {
  slug: string;
  placeholder: string;
  sizes?: string;
}) {
  const hero = heroImages[slug];
  if (!hero) return <ImageSlot placeholder={placeholder} />;

  return (
    <Image
      src={hero.src}
      alt=""
      fill
      sizes={sizes}
      /* Decorative here: the card's own title and summary say where the
         link goes, so a screen reader announcing the picture as well would
         be repeating the link it is already inside. */
      aria-hidden
      style={{ objectFit: "cover", objectPosition: "72% center" }}
    />
  );
}
