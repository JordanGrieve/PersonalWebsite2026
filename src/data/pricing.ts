export const tiers = [
  {
    name: "Speed audit",
    tag: "Fixed",
    tagClass: "tag tag-outline",
    price: "£1,500",
    note: "One week, whole site, fixes included",
    border: "var(--color-divider)",
    cta: "Book an audit",
    /* The app audit leads deliberately: it is the line that pays for the
       engagement. Removing £400/month of apps is £4,800 a year against a
       £1,500 fee, and that arithmetic sells better than a Lighthouse score. */
    items: [
      "App audit — what you are paying for twice",
      "Core Web Vitals measured across every template",
      "Prioritised fix list with effort estimates",
      "The wins implemented, not just written down",
      "Re-measured after two weeks, with a call to talk it through",
    ],
  },
  {
    name: "Storefront build",
    tag: "Most asked for",
    tagClass: "tag tag-accent",
    price: "£4,500+",
    note: "Three to five weeks, fixed scope",
    border: "var(--color-accent)",
    cta: "Start a build",
    /* Six templates, not eight: £4,500 at £300/day is fifteen days, and eight
       templates inside that is under two days each with revisions — which is
       how a fixed-price build turns into free work.

       The speed line is a promise, not a description. Do not soften it to
       something unmeasurable, and do not quote a build you cannot hold it on. */
    items: [
      "Custom Shopify theme or web build, six templates",
      "Built from your design — design available as an add-on",
      "Ships green on Core Web Vitals, measured before handover",
      "Cloudflare caching configured",
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
