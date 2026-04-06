import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
        <header className="border-b border-slate-200 bg-slate-900 px-8 py-10 text-white">
          <h1 className="text-4xl font-bold tracking-tight">Franz Wischki</h1>
          <p className="mt-3 text-sm leading-6 text-slate-200">
            Tampa, FL (Relocatable) |{" "}
            <a
              href="tel:9418075095"
              className="underline decoration-slate-400 underline-offset-2 hover:text-white"
            >
              (941) 807-5095
            </a>{" "}
            |{" "}
            <a
              href="mailto:fdwischki@gmail.com"
              className="underline decoration-slate-400 underline-offset-2 hover:text-white"
            >
              fdwischki@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/franzwischki"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-400 underline-offset-2 hover:text-white"
            >
              linkedin.com/in/franzwischki
            </a>
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
            Finance and Business Analytics student at the University of South
            Florida with experience in buyside M&amp;A origination, investment
            research, and business development. Interested in private equity,
            M&amp;A, and high-performance finance roles where analytical
            thinking, initiative, and communication matter.
          </p>
        </header>

        <div className="px-8 py-8">
          <section aria-labelledby="education" className="border-b border-slate-200 pb-8">
            <h2
              id="education"
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-600"
            >
              Education
            </h2>

            <article className="space-y-3">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    University of South Florida, Muma College of Business
                  </h3>
                  <p className="text-sm text-slate-600">
                    B.S. in Finance / Business Analytics &amp; Information Technology
                  </p>
                </div>
                <div className="text-sm text-slate-600 md:text-right">
                  <p>Tampa, FL</p>
                  <p>May 2028</p>
                </div>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                <li>GPA: 3.88 / 4.00</li>
                <li>
                  Scholarships: $10,000 William G. Selby Foundation, $5,000
                  Genevieve Husted Scholar
                </li>
                <li>
                  Insights Programs: Wells Fargo Project First-Gen, Deutsche Bank
                  Insights, Morgan Stanley Insights
                </li>
              </ul>
            </article>
          </section>

          <section
            aria-labelledby="experience"
            className="border-b border-slate-200 py-8"
          >
            <h2
              id="experience"
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-600"
            >
              Professional Experience
            </h2>

            <div className="space-y-8">
              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Koch Equity Development
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Incoming Private Equity Intern
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Wichita, KS</p>
                    <p>May 2027 – August 2027</p>
                  </div>
                </div>
              </article>

              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      BowPoint
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Buyside M&amp;A Intern
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Tampa, FL</p>
                    <p>April 2025 – Present</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    Sourced and evaluated 70+ potential platform and add-on
                    acquisition targets across healthcare, industrials, and
                    tech-enabled services in the $10–50M EBITDA range to support
                    M&amp;A origination and execution efforts.
                  </li>
                  <li>
                    Initiated and built comprehensive market maps across domestic
                    and international geographies, streamlining BowPoint&apos;s
                    sourcing process and increasing target coverage by roughly
                    30–40%.
                  </li>
                  <li>
                    Maintained and updated proprietary target databases by
                    tracking company ownership, size, location, and strategic
                    relevance while working closely with senior private equity
                    clients to ensure high-quality acquisition targets.
                  </li>
                </ul>
              </article>

              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      HandeeMa&apos;am LLC
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Business Development Intern
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Sarasota, FL</p>
                    <p>July 2024 – June 2025</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    Led digital marketing and growth initiatives that increased
                    revenue by 30% over 4 months and secured a $10,000
                    investment by presenting a data-driven growth proposal.
                  </li>
                  <li>
                    Drove business development initiatives through targeted
                    outreach and relationship building, including creating and
                    launching the company website and all social media platforms.
                  </li>
                </ul>
              </article>

              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      LoveSac
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Sales Associate
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Sarasota, FL</p>
                    <p>October 2024 – January 2025</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    Boosted store revenue by over $500,000 by implementing
                    targeted selling strategies, driving customer engagement and
                    capitalizing on opportunities to maximize sales performance.
                  </li>
                  <li>
                    Developed and managed a robust sales performance tracking
                    system encompassing individual targets, real-time sales data,
                    quote monitoring, and national store benchmarks to drive
                    accountability and optimize sales outcomes.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section
            aria-labelledby="leadership"
            className="border-b border-slate-200 py-8"
          >
            <h2
              id="leadership"
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-600"
            >
              Leadership &amp; Activities
            </h2>

            <div className="space-y-8">
              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Investment Club at USF
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Head of Global Investment Research
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Tampa, FL</p>
                    <p>May 2025 – Present</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    Restructured the Global Investment Research team by
                    implementing DCF and comparable analysis while managing four
                    teams across Healthcare, Tech, Industrials, and Consumer to
                    produce monthly investment reports.
                  </li>
                  <li>
                    Led initiation of coverage on GIR, developing the investment
                    thesis and delivering two initiations, SPXC and CCL, for the
                    first Investment Committee Meeting.
                  </li>
                  <li>
                    Contributed to the club&apos;s first deal team to present a
                    stock pitch to the Merrill Lynch Wealth Management Fund.
                  </li>
                </ul>
              </article>

              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Investment Club at USF
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Asset Management Investment Analyst / Associate
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Tampa, FL</p>
                    <p>December 2024 – May 2025</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    Led a team of two analysts in due diligence, modeling, and
                    research and successfully pitched Ingredion (INGR) to the
                    Investment Committee, securing inclusion with a thesis
                    supported by a 14.6% IRR and 9.6x EBITDA entry multiple.
                  </li>
                  <li>
                    Sourced and pitched two equity investments, UTHR and DG,
                    using detailed three-statement models and DCF analyses with
                    investment theses supported by 17.5% and 19% IRRs.
                  </li>
                </ul>
              </article>

              <article>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      USF Sustainabulls
                    </h3>
                    <p className="text-sm font-medium text-slate-700">
                      Vice-President of Administration
                    </p>
                  </div>
                  <div className="text-sm text-slate-600 md:text-right">
                    <p>Tampa, FL</p>
                    <p>June 2025 – January 2026</p>
                  </div>
                </div>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>
                    Led administrative efforts by coordinating speaker events,
                    enhancing member engagement, and advising the executive board
                    on organizational strategy and club operations.
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section aria-labelledby="skills" className="border-b border-slate-200 py-8">
            <h2
              id="skills"
              className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-600"
            >
              Skills, Certifications &amp; Interests
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Certifications
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>ESB Entrepreneurship and Small Business Certification</li>
                  <li>Microsoft Office Specialist: Excel</li>
                  <li>Microsoft Office Specialist: PowerPoint</li>
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Programs
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  <li>USF Investment Club</li>
                  <li>Finance Talent Pathways</li>
                  <li>Scholars of Finance</li>
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:col-span-2">
                <h3 className="text-base font-semibold text-slate-900">
                  Interests
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Boxing, Jujitsu, Football (Green Bay Packers), and Movie
                  Critique
                </p>
              </section>
            </div>
          </section>

          <footer className="pt-8 text-center text-sm text-slate-500">
            <p>Built with Next.js App Router and Tailwind CSS.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}