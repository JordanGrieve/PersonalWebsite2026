export default function EducationTimeline() {
  return (
    <section className="w-full flex justify-center inter-font">
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 shadow-lg">
        <div className="relative p-8">
          {/* Vertical line */}
          <div className="absolute left-[55px] top-0 bottom-0 w-px bg-white/15" />

          <div className="space-y-14">
            {/* ================= NAPIER ================= */}
            <div className="flex gap-6">
              {/* Logo node */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0f172a]">
                <img
                  src="/napier-logo.png"
                  alt="Edinburgh Napier University"
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Edinburgh Napier University
                </h3>

                <div className="mt-4 space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <p className="text-sm font-medium text-white">
                        BSc (Hons) Web Development & Design (2:1)
                      </p>
                      <p className="text-sm text-white/50">2023 – 2025</p>
                    </div>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                      <li>
                        Developed strong front-end and full-stack skills using
                        JavaScript (Vanilla & React), Python (Flask), PHP, HTML,
                        CSS, and SQL
                      </li>
                      <li>
                        Built secure, data-driven applications featuring user
                        authentication, RESTful APIs, and full CRUD
                        functionality
                      </li>
                      <li>
                        Designed responsive, accessible interfaces with a focus
                        on usability, performance, and real-world UX
                      </li>
                      <li>
                        Used Figma for wireframing, prototyping, and translating
                        designs into production-ready interfaces
                      </li>
                      <li>
                        Delivered end-to-end projects from planning to
                        deployment, balancing technical implementation with
                        maintainability
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= COLLEGE ================= */}
            <div className="flex gap-6">
              {/* Logo node */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0f172a]">
                <img
                  src="/edinburgh-college-logo.jpg"
                  alt="Edinburgh College"
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Edinburgh College
                </h3>

                <div className="mt-4 space-y-6">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <p className="text-sm font-medium text-white">
                        HND Web Development (Grade A)
                      </p>
                      <p className="text-sm text-white/50">2021 – 2023</p>
                    </div>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                      <li>
                        Built strong foundations in HTML, CSS, JavaScript, PHP,
                        and relational databases
                      </li>
                      <li>
                        Gained hands-on experience with WordPress, including
                        custom themes and Elementor-based builds
                      </li>
                      <li>
                        Applied on-page SEO, performance optimisation, and
                        content structure best practices
                      </li>
                      <li>
                        Delivered practical projects under tight deadlines,
                        adapting quickly to changing requirements
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
