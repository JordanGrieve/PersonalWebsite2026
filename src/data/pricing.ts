export const tiers = [
  {
    name: "Speed audit",
    tag: "Fixed",
    tagClass: "tag tag-outline",
    price: "£300",
    note: "One day, whole site, written report",
    border: "var(--color-divider)",
    cta: "Book an audit",
    /* Report only — implementation came out when the price came down, because
       a week of fixing does not fit in a day at any rate worth working for.
       That makes this the cheap front door: the call at the end is where the
       fixing gets quoted, so keep the call.

       £300 is one day at the project rate. It was £400 against a note that
       said "one day", which quietly claimed a day rate nothing else on the
       site charges — the number moved rather than the note, so the audit and
       build tiers now both read as £300/day.

       Mirrored by Performance in services.ts. Change one, change the other. */
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
    price: "£1,600+",
    note: "Five to eight working days, fixed scope",
    border: "var(--color-accent)",
    cta: "Start a build",
    /* Shopify work here is customising and extending the theme the client
       already has — new sections, new templates, changes to existing ones. Not
       a theme from scratch, which is not what the experience covers. Non-Shopify
       builds genuinely are from nothing; AMORIA, Open Door Bakery and Postbox
       are all evidence of that, so the tier says both.

       The headline is the floor, not the common case: three templates is five
       days at £1,600, six is eight days at £2,400 — and £2,400 is the figure
       this card used to lead with. Leading with the floor is what makes this
       tier agree with "Shopify & ecommerce — From £1,600" on the services
       page. The two pages quoted different numbers for the same work before,
       which meant a client who read both quoted the lower one back.

       The note said "two to three weeks" against an eight-day costing. Three
       weeks against £2,400 is £160/day — under the retainer rate, on the tier
       carrying the most delivery risk. It now states the days the price is
       actually built on. A build that needs longer than eight days needs a
       bigger number, not a longer note.

       Cloudflare came out when it became its own £600 service. Analytics went
       in the other direction by choice: it is £300 on its own, and a build that
       launches without working tracking cannot prove it worked.

       The speed line is a promise, not a description. It is what separates this
       from cheaper theme work — do not quote a build you cannot hold it on. */
    items: [
      "Your Shopify theme extended, or a web build from scratch",
      "Three templates from £1,600, six from £2,400 — further templates quoted per template",
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
    price: "£220/mo",
    note: "Rolling, cancel with 30 days notice",
    border: "var(--color-divider)",
    cta: "Enquire",
    /* Two units, one figure on the card: one day a month at £220, two at £400.
       The card leads with the smaller one because it is the cheaper way in, and
       because a single day a month is a real thing to sell rather than a floor
       invented to look low. £400 stays available and is where most of these
       land.

       £220 for one day and £200/day for two, against £300/day on the audit and
       build tiers. That is a deliberate retainer discount — committed monthly
       work with no selling attached to it is worth trading rate for — but it
       does mean the cheapest day rate on the site is the one on the recurring
       tier. Worth re-reading if the retainer ever starts crowding out project
       work.

       Mirrored by Maintenance & support in services.ts. Change one, change the
       other. The footnote on the pricing page reads this tier's price
       directly, so it follows on its own. */
    items: [
      "One day of work a month at £220, or two days at £400",
      "Unused time rolls over once",
      "Urgent fixes answered the next working day",
      "Monthly performance report",
      "Roadmap call every month",
    ],
  },
];
