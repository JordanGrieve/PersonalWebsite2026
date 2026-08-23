import { code, li, listWrap, para, sectionHeading } from "./prose";

/** "How I got an LCP of 4.8s down to 1.3s" — the one post written out in full. */
export default function Post() {
  return (
    <>
      <p style={para}>
        The first thing I do on any speed job is stop guessing. Not the Lighthouse score — the
        network waterfall on a throttled 4G connection, on the actual product page people land on
        from ads. Scores move for reasons that have nothing to do with what a shopper feels.
      </p>
      <p style={para}>
        On this store the largest contentful paint element was the product hero image, and it did
        not start downloading until 3.1 seconds in. Everything before that was render-blocking work
        the browser had to finish first.
      </p>

      <h3 style={sectionHeading}>What was in the way</h3>
      <ul style={listWrap}>
        <li style={li}>
          <i className="ph ph-x-circle" style={{ color: "var(--color-accent)", fontSize: 18, flex: "none", marginTop: 3 }} />
          <span>
            <b style={{ fontWeight: 500, color: "var(--color-text)" }}>Three apps loading jQuery.</b>{" "}
            Each one shipped its own copy, none of them checked whether it was already there.
          </span>
        </li>
        <li style={li}>
          <i className="ph ph-x-circle" style={{ color: "var(--color-accent)", fontSize: 18, flex: "none", marginTop: 3 }} />
          <span>
            <b style={{ fontWeight: 500, color: "var(--color-text)" }}>A 1.2MB hero image</b> served
            as a PNG at 2400px wide, then scaled down in CSS.
          </span>
        </li>
        <li style={li}>
          <i className="ph ph-x-circle" style={{ color: "var(--color-accent)", fontSize: 18, flex: "none", marginTop: 3 }} />
          <span>
            <b style={{ fontWeight: 500, color: "var(--color-text)" }}>
              Fonts loading from three origins,
            </b>{" "}
            with no preconnect and no swap, so text was invisible for a full second.
          </span>
        </li>
        <li style={li}>
          <i className="ph ph-x-circle" style={{ color: "var(--color-accent)", fontSize: 18, flex: "none", marginTop: 3 }} />
          <span>
            <b style={{ fontWeight: 500, color: "var(--color-text)" }}>A review widget in the head,</b>{" "}
            synchronous, above everything the customer came to see.
          </span>
        </li>
      </ul>

      <h3 style={sectionHeading}>The fix, in order of payoff</h3>
      <p style={para}>
        Image first. Shopify will serve WebP and the right size if you ask it to, and the hero is
        the one image worth preloading by hand:
      </p>
      <pre
        style={{
          margin: "0 0 22px",
          padding: "16px 18px",
          background: "var(--color-neutral-900)",
          border: "1px solid var(--color-divider)",
          borderRadius: "var(--radius-md)",
          overflowX: "auto",
          font: "400 13px/1.65 ui-monospace,Menlo,monospace",
          color: "var(--color-accent-200)",
        }}
      >{`<link rel="preload" as="image"
  href="{{ product.featured_image | image_url: width: 900 }}"
  fetchpriority="high">`}</pre>
      <p style={para}>
        That alone took LCP from 4.8s to 2.6s. Then the scripts: the review widget moved to{" "}
        <code style={code}>defer</code> and only mounts when the reviews section scrolls into view,
        and two of the three jQuery copies went with the apps I replaced. Fonts got a preconnect,{" "}
        <code style={code}>font-display: swap</code> and a subset. 2.6s became 1.5s.
      </p>
      <p style={para}>
        The last 200ms came from Cloudflare: a cache rule that serves collection pages from the edge
        for visitors without a cart cookie, so most first-time landings never touch the origin.
      </p>

      <figure
        style={{
          margin: "30px 0",
          padding: "22px 24px",
          borderLeft: "2px solid var(--color-accent)",
          background: "var(--color-surface)",
          borderRadius: "0 var(--radius-md) var(--radius-md) 0",
        }}
      >
        <blockquote
          style={{
            margin: 0,
            fontSize: "clamp(17px,2cqw,21px)",
            lineHeight: 1.5,
            letterSpacing: "-.01em",
            color: "var(--color-neutral-200)",
          }}
        >
          Two things I expected to matter did not: critical CSS inlining moved nothing measurable,
          and neither did switching the theme to a newer Dawn base.
        </blockquote>
      </figure>

      <h3 style={sectionHeading}>What it was worth</h3>
      <p style={para}>
        Mobile conversion rate over the following month was up 34%. I would not claim all of that is
        speed — the cart drawer changed in the same release — but the bounce rate on paid landings
        dropped from 61% to 44%, and that one is hard to explain any other way.
      </p>
      <p style={{ ...para, margin: "0 0 8px" }}>
        If your store feels slow, start with the waterfall on a real device. The fix is usually four
        things, and three of them are images.
      </p>
    </>
  );
}
