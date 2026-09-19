"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A case study screenshot that opens full size when clicked.
 *
 * The shots on these pages are charts, routing tables and flame graphs sat in
 * a 400px-tall box — legible enough to see what kind of thing they are, not
 * to read. This makes the small one a control: click it and the same image
 * fills the window, click anywhere off it (or press Escape) and it goes away.
 *
 * Built on `<dialog showModal()>` rather than a hand-rolled overlay because
 * the browser then supplies the parts that are easy to leave out: the top
 * layer (so the dialog escapes the `overflow: hidden` on the thumbnail's
 * wrapper), the focus trap, the inert background, Escape to close, and focus
 * returned to the thumbnail afterwards.
 *
 * Rendered in place of `next/image` inside a positioned wrapper that already
 * has a height, exactly like the plain `Slot` it replaces — the button is
 * what fills that wrapper, and the image fills the button.
 */
export default function Zoomable({
  src,
  alt,
  priority,
  sizes = "(max-width: 640px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  /* Closing is a state change, not a call to `dialog.close()`: React owns
     whether the dialog exists, and the effect below closes it on the way
     out. Driving it the other way round — close the element and let its
     `close` event set the state — is the obvious design and does not work,
     see the keydown listener. */
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    /* showModal() rather than the `open` attribute: only the modal form puts
       the dialog in the top layer and makes everything behind it inert.
       Guarded because calling it on a dialog that is already open throws —
       which is exactly what StrictMode's second pass does, and the throw
       took the listener below down with it. */
    if (!dialog.open) dialog.showModal();

    /* The page behind still scrolls under a modal dialog in every browser
       except Safari, and a wheel over the scrim scrolling the article away
       reads as a broken overlay. */
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    /* Escape. The browser closes the dialog by itself, but nothing here is
       told about it, and the state still saying "open" leaves the body
       scroll-locked and the image unable to reopen.

       The obvious hook for that is the `close` event, and it is not reliable
       here: neither React's `onClose` (the event does not bubble, so the
       delegated handler never sees it) nor a listener attached directly to
       the element fired — not even on a bare dialog created and closed in
       the console. So this watches the keystroke instead, which is a thing
       the page can see happen rather than a notification it has to be sent.
       The default is left alone: the browser closing the dialog is the
       behaviour we want, and this only keeps React in step with it. */
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    dialog.addEventListener("keydown", onKeyDown);

    return () => {
      dialog.removeEventListener("keydown", onKeyDown);
      /* Closed on the way out, so the element is never removed from the
         document while still in the top layer. */
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /* A dialog normally hands focus back to whatever opened it, but React has
     removed that dialog from the page by then and focus lands on <body> —
     so a keyboard closing the image would start its next Tab at the top of
     the site. Put focus back on the thumbnail instead.

     Keyed off a closing transition rather than done in the teardown above,
     which also runs on mount under StrictMode; `wasOpen` makes that pass a
     no-op, so nothing grabs focus from the reader on load. */
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      return;
    }
    if (!wasOpen.current) return;
    wasOpen.current = false;
    triggerRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="zoom-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <span className="zoom-hint" aria-hidden="true">
          <i className="ph ph-arrows-out" />
        </span>
      </button>

      {open ? (
        <dialog
          ref={dialogRef}
          className="lightbox"
          aria-label={alt}
          /* Click-off. A click on the backdrop reports the dialog itself as
             its target, because the backdrop is the dialog's own pseudo
             element and has nothing to hit. Anything inside the figure below
             reports that instead, so this closes on the scrim only — and the
             padding around the image is part of the scrim, which is what
             makes "click off it" forgiving rather than pixel-accurate. */
          onClick={(e) => {
            if (e.target === dialogRef.current) close();
          }}
        >
          <div className="lightbox-frame">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <button
            type="button"
            className="btn btn-icon lightbox-close"
            onClick={close}
            aria-label="Close image"
          >
            <i className="ph ph-x" />
          </button>
        </dialog>
      ) : null}
    </>
  );
}
