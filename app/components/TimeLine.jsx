export default function ExperienceTimeline() {
  return (
    <section className="w-full flex justify-center">
      {/* Card */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 shadow-lg">
        <div className="relative p-8">
          {/* Vertical timeline line (CENTERED + FULL HEIGHT) */}
          <div className="absolute left-[55px] top-0 bottom-0 w-px bg-white/15" />

          <div className="space-y-14">
            {/* ===== DBS BANK ===== */}
            <div className="flex gap-6">
              {/* Logo node */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0f172a]">
                <img
                  src="/dbs-logo.svg"
                  alt="DBS Bank"
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">DBS Bank</h3>

                <div className="mt-4 space-y-6">
                  {/* Role 1 */}
                  <div>
                    <div className="flex justify-between gap-4">
                      <p className="text-sm font-medium text-white">
                        Associate
                      </p>
                      <p className="text-sm text-white/50">
                        Jul 2025 – Present
                      </p>
                    </div>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                      <li>
                        Building Java, Spring Boot, and Activiti services;
                        raised JUnit coverage above 80% and led a team knowledge
                        base project.
                      </li>
                    </ul>
                  </div>

                  {/* Role 2 */}
                  <div>
                    <div className="flex justify-between gap-4">
                      <p className="text-sm font-medium text-white">
                        Graduate Associate (SEED Programme)
                      </p>
                      <p className="text-sm text-white/50">
                        Jul 2023 – Jun 2025
                      </p>
                    </div>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                      <li>
                        Built a Python and SQL automation tool to migrate and
                        configure 1,000+ workflow variants into an in-house
                        Spring Boot and Activiti application.
                      </li>
                      <li>
                        Reduced per-configuration setup time from 1–2 hours to
                        under 5 minutes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== SIT ===== */}
            <div className="flex gap-6">
              {/* Logo node */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0f172a]">
                <img
                  src="/sit-logo.svg"
                  alt="Singapore Institute of Technology"
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  Singapore Institute of Technology
                </h3>

                <div className="mt-4">
                  <div className="flex justify-between gap-4">
                    <p className="text-sm font-medium text-white">
                      Software Developer (Contract)
                    </p>
                    <p className="text-sm text-white/50">Apr 2023 – Jun 2023</p>
                  </div>

                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-white/70">
                    <li>
                      Built internal tools and student-facing features while
                      collaborating across product teams.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
