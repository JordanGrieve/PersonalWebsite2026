import type { ComponentType } from "react";
import Lcp from "./lcp-4-8s-to-1-3s";
import { para } from "./prose";

/* TODO: only the LCP post has a body written — it is the one the design
   wrote out in full. Add a component per slug here as the others get
   written; anything missing falls back to the stub below. */
const bodies: Record<string, ComponentType> = {
  "lcp-4-8s-to-1-3s": Lcp,
};

function Stub() {
  return (
    <p style={para}>
      This one is still in drafts. The notes exist; the paragraphs do not yet.
    </p>
  );
}

export function getPostBody(slug: string): ComponentType {
  return bodies[slug] ?? Stub;
}
