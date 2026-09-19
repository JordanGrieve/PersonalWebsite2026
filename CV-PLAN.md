# CV plan

What the research actually says about CVs that get interviews, narrowed to *your*
situation: UK-based frontend developer, one year at DFYNE, a Napier degree behind
it, freelance builds alongside, and a portfolio site that is stronger than most
people's entire application.

Written now so that when the remaining projects land, the CV is an assembly job
rather than a blank page.

---

## 1. The three claims to throw out first

Most CV advice online is content marketing for CV-builder products. These three
are repeated everywhere and are wrong:

**"75% of CVs are rejected by the ATS before a human sees them."** No study
supports this. The number traces to a 2012 sales pitch by Preptel, a resume
optimisation company that was out of business by 2013; no methodology was ever
published. In a 2026 survey, 92% of recruiters said their ATS does not auto-reject
on formatting, design or content — it sorts and ranks, people decide. A hiring
manager writing for Stack Overflow put it flatly: your CV will be read by a human.

What people mistake for robot rejection is volume. In-demand roles now pull
400–2,000+ applicants within days. You are not being filtered by a machine, you
are being skimmed by a tired person with 300 tabs open. That changes the design
brief completely: optimise for the skim, not for the parser.

**"Beat the ATS with keyword stuffing."** 2026 ATS ranking weights semantic
relevance, not keyword presence. Stuffed skill walls rank worse *and* read worse.
The right move is narrower: mirror the job ad's vocabulary in the places where
it's true ("Liquid" if the ad says Liquid, not "Shopify templating").

**"One page, always."** That's a US convention. UK employers expect up to two
pages, and one page is normal only for graduates and early-career candidates.
You are borderline — see §4.

## 2. What the skim is actually looking for

The screening pass is roughly ten seconds and answers three questions in order:

1. **Is this person plausibly the thing we advertised?** (job title, current
   employer, tech named)
2. **Have they done the specific work before?** (evidence, not adjectives)
3. **Is there any reason to stop reading?** (gaps, inconsistency, mess)

Everything else — hobbies, a personal statement about being passionate, a skills
bar chart showing React at 87% — is answering questions nobody asked. From the
survey data: 72% of recruiters say inconsistent formatting weakens an
application, and 42% say missing required skills or poor role alignment is enough
to stop a CV progressing.

The corollary nobody likes: **tailoring beats polish.** Tailored CVs reportedly
pull around 68% more callbacks than generic ones, and the tailoring doesn't have
to be dramatic. If the ad leads with React and Node, those two words move up.
That's it.

## 3. The bullet point is the whole game

This is where developer CVs are won and lost, and where you have an unfair
advantage, because you already write this way in your case studies.

The failure mode is describing the job description instead of the work:

> ❌ Worked on the storefront, fixing bugs and building new sections.

That sentence is true of every frontend developer who has ever existed. The fix
is the standard formula — **action verb + what you did + how + what changed** —
with a number wherever a number honestly exists:

> ✅ Cut mobile LCP from 4.8s to 1.3s on the DFYNE storefront by deferring
> third-party scripts and moving hero images to AVIF.

> ✅ Migrated the storefront to Cloudflare, removing [X] of origin load and
> taking TTFB from [X] to [X].

Rules that follow from this:

- **A metric per bullet where one exists — and no invented ones.** Where you
  genuinely have no number, non-metric outcomes still count and are credible:
  fewer incidents, fewer manual steps, faster releases, lower support load,
  smoother onboarding. Estimates are acceptable if they're reasonable and you can
  defend them in the interview. Never put a number on the page you can't explain
  when asked.
- **Name the technology inside the sentence, not in a list.** "Built the fit
  finder as a Shopify app section in Liquid and vanilla JS" tells a reader
  something; "Skills: Liquid, JavaScript" doesn't. Keep a short skills block for
  scanning, but the proof lives in the bullets.
- **Three to five bullets for the current role, up to six if it's the most
  relevant; two or three for older ones.** Each bullet should cover a *different*
  kind of impact — performance, shipping, ownership, collaboration — not four
  flavours of the same one.
- **Your bullets, not the team's.** "We migrated" reads as "I was nearby."

## 4. Structure and length, for you specifically

**Two pages.** You've earned the second page: a year of real commercial work, a
four-year degree, freelance clients, and a body of projects. One page would force
you to cut the DFYNE detail that is the strongest thing on the document. Two
pages is the British default anyway.

Order, top to bottom:

| Section | Why it's there | Space |
| --- | --- | --- |
| Name + role + contact + links | The role line does the "is this the right person" work | 3 lines |
| Short summary (2–3 lines) | 90% of recruiters say a clear summary speeds evaluation | ~40 words |
| Experience — DFYNE first | The main event | ~half of page 1 |
| Freelance / selected projects | Proof of range and ownership | rest of page 1 |
| Skills | Grouped, scannable, honest | short block |
| Education — Napier, BSc, 2:1 | Named degree, one line of detail at most | 2 lines |

Notes on that shape:

- **Reverse chronological, single column.** Two-column layouts scan badly and
  parse badly; the hiring-manager guidance is explicit that a single column
  supports top-to-bottom reading. Keep dates, titles and employers visually
  distinct.
- **Standard headings.** "Experience", "Education", "Skills". Not "My Journey".
  Creative headings buy nothing and cost parsing.
- **The summary is not a personal statement.** Three lines of what you do, what
  you're good at, and what you're looking for. Rewrite the last clause per
  application.
- **Education drops as you go.** Right now the degree earns two lines. In three
  years it earns one.

**UK conventions — non-negotiable:** no photo, no date of birth, no marital
status, no nationality, no full postal address. The Equality Act 2010 makes
several of those protected characteristics, and UK recruiters are trained to
avoid CVs carrying them — including one costs you nothing but goodwill. "Jordan
Grieve — Scotland, UK" is the entire location line. "References available on
request" is dead filler; drop it.

**Employment gaps:** you don't have one, but for the record — the field-experiment
evidence is that an *explained* gap out-performs an unexplained one (25.6% vs
23.3% callback). Dates that leave a reader guessing are the problem, not the gap
itself.

## 5. The skills block

Grouped, not a wall. Honest, not aspirational — everything on it is fair game in
the interview.

```
Languages    TypeScript, JavaScript, HTML, CSS, Liquid, SQL
Frameworks   React, Next.js (App Router)
Commerce     Shopify themes, Shopify apps, Shopify Plus integrations
Platform     Cloudflare, Vercel, GitHub Actions
Practice     Core Web Vitals, caching, image pipelines, release testing
```

Two things this does that a flat list doesn't: it lets the skim find the one word
it came for, and the group labels themselves signal seniority ("Platform",
"Practice" read differently from a comma salad).

On AI: 2026 employer surveys put AI literacy near the top of what they scan for,
and 93% of recruiters expect to increase their own AI use. Worth a line — but a
specific one about how you actually use it in the build, not the word "AI"
floating in a skills list.

## 6. Projects: what to include once the site is finished

This is the part to hold until the remaining case studies land. The selection
rule, from the hiring-manager guidance: **real-world and paid work outranks
personal projects, and personal projects still outrank an empty page.**

For the CV itself, three or four projects maximum, one line each, each linking to
the case study on the site. Current candidates:

- **Open Door Bakery** — full-stack, real client, real constraints. Strongest
  ownership story you have: capacity enforced server-side, money counted in pence,
  136 tests, runs on a laptop with nothing installed.
- **Essential Upsell / Postbox** — shipped apps. Shows you finish things.
- **AMORIA** — Shopify build, client-facing.
- **DFYNE Cloudflare migration / mobile performance** — these belong in the
  *Experience* section under DFYNE, not in projects. Don't double-count.

Every project line needs the same thing the job bullets need: what changed, and a
number if there is one.

## 7. Where it lives on the site

The `/about` page already has a "Download CV" button wired to `href="#"`
([about/page.tsx:81](src/app/about/page.tsx:81)). The plan:

1. **A `/cv` route** — the CV as a real page, single column, semantic HTML
   (`<section>`, `<article>`, definition lists for dated entries). Same design
   system as the rest of the site. This is the version that gets linked in an
   application and read on a phone.
2. **A print stylesheet** — `@media print` rules that drop the header, footer and
   background treatments, force A4 margins, and control page breaks so a section
   doesn't split across pages. Browser "Print to PDF" then produces the
   attachment version, and the two can never drift apart, because there is one
   source.
3. **A committed PDF at a stable URL** — `/jordan-grieve-cv.pdf`, generated from
   step 2, because recruiters and agencies will ask for an attachment. Point the
   About button at it.
4. **Schema.org** — the site already has a `JsonLd` component and
   [lib/schema.ts](src/lib/schema.ts). A `Person` with `knowsAbout`, `alumniOf`
   and `worksFor` on the CV page is cheap and makes the page machine-readable
   without keyword-stuffing anything visible.
5. **Keep the master long** — one file with every bullet you've ever earned, cut
   down per application. The tailoring advice only works if there's something to
   tailor from.

One caution on the fancy version: the CV page can be a nice piece of work, but
the PDF a recruiter opens must be boring, single-column and greyscale-safe. Two
audiences, one source, different stylesheets.

## 8. Checklist before sending any application

- [ ] Job title at the top matches, or nearly matches, the advertised title
- [ ] The ad's three most-repeated technologies appear in the first half of page 1
- [ ] Every experience bullet has an outcome; most have a number
- [ ] No number on the page you can't explain out loud
- [ ] Two pages, single column, standard headings
- [ ] No photo, no DOB, no full address, no "references on request"
- [ ] Dates are consistent and leave no unexplained gap
- [ ] Links work: site, GitHub, LinkedIn — and the GitHub profile isn't a ghost
      town, since the same guidance says READMEs on pinned repos do real work
- [ ] LinkedIn updated in the same sitting as the CV
- [ ] Filename is `Jordan-Grieve-CV.pdf`, not `cv-final-v3.pdf`
- [ ] Referral checked first — an employee referral is still the single strongest
      route in, ahead of any CV optimisation on this list

---

## Sources

- [The ATS Resume Rejection Myth — The Interview Guys](https://blog.theinterviewguys.com/ats-resume-rejection-myth/)
- [ATS Rejection Myth Debunked: 92% of Recruiters Confirm — HR.com](https://www.hr.com/en/app/blog/2026/04/ats-rejection-myth-debunked-92-of-recruiters-confi_mntajhyq.html)
- [How to write an effective developer resume: advice from a hiring manager — Stack Overflow](https://stackoverflow.blog/2020/11/25/how-to-write-an-effective-developer-resume-advice-from-a-hiring-manager/)
- [What Recruiters Actually Look For in 2026: 15 Data-Backed Insights — TailorForge](https://tailorforge.com/blog/what-recruiters-look-for-2026)
- [Resume Trends 2026 — Monster](https://www.monster.com/career-advice/resume/resume-trends)
- [50+ Essential Resume Statistics — Resume Genius](https://resumegenius.com/blog/resume-help/resume-statistics)
- [Example CVs and UK CV formats — Prospects](https://www.prospects.ac.uk/careers-advice/cvs-and-cover-letters/example-cvs)
- [UK CV format: length, personal statement and rules — AlterCV](https://altercv.com/cv-format/united-kingdom/)
- [Sick and tell: a field experiment on employment gaps and callback rates — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S016726812030367X)
- [Perceived warmth and competence predict callback rates — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11236140/)
- [How I created my CV with modern HTML and CSS — Mark Vincze](https://blog.markvincze.com/how-i-created-my-cv-with-modern-html-and-css/)
