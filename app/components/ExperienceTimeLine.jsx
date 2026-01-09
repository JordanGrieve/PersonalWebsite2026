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
                        Helped lead the migration of the DFYNE storefront from
                        Impulse to Horizon theme, refactoring layouts, sections,
                        and templates to align with Horizon’s architecture
                      </li>{" "}
                      <li>
                        Built and customised Shopify Liquid sections, snippets,
                        and blocks to support reusable, scalable components
                      </li>{" "}
                      <li>
                        Implemented advanced product variant pickers, swatches,
                        badges, and carousel-based UX patterns using Liquid,
                        CSS, and JavaScript
                      </li>{" "}
                      <li>
                        Improved storefront performance, maintainability, and UX
                        by removing legacy Impulse logic and standardising
                        Horizon-based components
                      </li>{" "}
                      <li>
                        Collaborated closely with designers and developers to
                        translate Figma designs into production-ready Shopify
                        features
                      </li>{" "}
                      <li>
                        Worked within a live e-commerce environment, deploying
                        changes safely and iterating based on real customer
                        behaviour
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
