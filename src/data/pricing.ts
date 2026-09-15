export const tiers = [
  {
    name: "Speed audit",
    tag: "Fixed",
    tagClass: "tag tag-outline",
    price: "£400",
    note: "One day, whole site, written report",
    border: "var(--color-divider)",
    cta: "Book an audit",
    /* Report only — implementation came out when the price came down, because
       a week of fixing does not fit in £400 at any rate worth working for.
       That makes this the cheap front door: the call at the end is where the
       fixing gets quoted, so keep the call. */
    items: [
      "App audit — what you are paying for twice",
      "Core Web Vitals measured across every template",
      "Prioritised fix list with effort estimates",
      "A call to walk through it and agree what is worth doing",
    ],
  },
  {
    name: "Storefront build",
    tag: "Most asked for",
    tagClass: "tag tag-accent",
    price: "£2,400+",
    note: "Two to three weeks, fixed scope",
    border: "var(--color-accent)",
    cta: "Start a build",
    /* Six templates plus analytics inside £2,400 — eight days at the project
       rate, so this is the tier with the least slack in it. If builds start
       overrunning, this is the line to look at first.

       Cloudflare came out when it became its own £600 service. Analytics went
       in the other direction by choice: it is £300 on its own, and a build that
       launches without working tracking cannot prove it worked.

       The speed line is a promise, not a description. It is the reason someone
       picks this over a cheaper theme customiser — do not quote a build you
       cannot hold it on. */
    items: [
      "Custom Shopify theme or web build, six templates",
      "Extra templates and page types quoted per template",
      "Built from your design — design available as an add-on",
      "Ships green on Core Web Vitals, measured before handover",
      "GA4 and Clarity configured before you launch",
      "30 days of bug fixes after launch; new work is the retainer",
    ],
  },
  {
    name: "Ongoing",
    tag: "Retainer",
    tagClass: "tag tag-neutral",
    price: "£400/mo",
    note: "Rolling, cancel with 30 days notice",
    border: "var(--color-divider)",
    cta: "Enquire",
    /* £200/day, against £300/day on the audit and build tiers. That is a
       deliberate retainer discount — committed monthly work with no selling
       attached to it is worth trading rate for — but it does mean the cheapest
       day rate on the site is the one on the recurring tier. Worth re-reading
       if the retainer ever starts crowding out project work. */
    items: [
      "Two days of work a month, unused time rolls over once",
      "Urgent fixes answered the next working day",
      "Monthly performance report",
      "Roadmap call every month",
    ],
  },
];
