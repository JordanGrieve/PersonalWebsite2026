export default function ExperienceTimeline() {
  return (
    <section className="w-full flex justify-center inter-font">
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 shadow-lg">
        <div className="relative p-8">
          <div className="absolute left-[55px] top-0 bottom-0 w-px bg-white/15" />

          <div className="space-y-14">
            <div className="flex gap-6">
              {/* Logo node */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0f172a]">
                <img
                  src="/DFYNE-LOGO.png"
                  alt="DFYNE"
                  className="h-7 w-7 object-contain"
                />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">DFYNE</h3>

                <div className="mt-4 space-y-6">
                  {/* Role 1 */}
                  <div>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <p className="text-sm font-medium text-white">
                        Shopify Frontend Developer
                      </p>
                      <p className="text-sm text-white/50">
                        Jul 2025 – Present
                      </p>
                    </div>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                      <li>
                        Built and customised Shopify Liquid sections, snippets,
                        blocks, product cards, swatches, variant pickers,
                        badges, carousels, breadcrumbs, and collection/PDP
                        features using Liquid, CSS, and JavaScript.
                      </li>
                      <li>
                        Developed reusable storefront components and UX patterns
                        including tabbed carousels, dynamic colour selectors,
                        manual product sections, collection card carousels, and
                        responsive mobile improvements.
                      </li>
                      <li>
                        Developed a vector-based PostgreSQL recommendation system
                        that replaced generic cart upsells with real data-driven
                        product recommendations.
                      </li>
                      <li>
                        Integrated recommendation logic across the product page,
                        search bar, and cart to improve product discovery, upsell
                        relevance, and sales opportunities.
                      </li>
                      <li>
                        Improved theme maintainability by refactoring legacy
                        code, standardising reusable components, and separating
                        JavaScript into dedicated files.
                      </li>
                      <li>
                        Worked across multiple international Shopify storefronts
                        including UK/ROW, US, CA, AU, and EU stores, supporting
                        regional consistency and domain-specific behaviour.
                      </li>
                      <li>
                        Implemented and tested Cloudflare Worker redirect logic
                        for country-based routing, including bot bypasses,
                        checkout/cart exclusions, account/login exceptions, and
                        staged rollout handling.
                      </li>
                      <li>
                        Supported storefront performance improvements through
                        font optimisation, hero image testing, LCP analysis,
                        asset handling, and Cloudflare performance features.
                      </li>
                      <li>
                        Investigated analytics and tracking issues across
                        Microsoft Clarity, Google Analytics, Google Ads, GTM,
                        and Zaraz.
                      </li>
                      <li>
                        Collaborated with designers and developers to translate
                        Figma designs into production-ready Shopify features
                        within a live e-commerce environment.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
