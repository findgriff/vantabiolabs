import Image from "next/image";

const BRAND = "VantaBio Labs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image src="/assets/logo.jpg" alt={BRAND} width={200} height={60} className="h-12 w-auto" />
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#overview" className="hover:text-blue-600">Overview</a>
            <a href="#evidence" className="hover:text-blue-600">Evidence</a>
            <a href="#quality" className="hover:text-blue-600">Quality</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
          >
            Request COA
          </a>
        </div>
      </header>

      <main>
        <section className="px-6 pt-16 pb-12" id="overview">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                Retatrutide • Research Supply Only
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Clinical‑grade presentation with research‑only distribution
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Retatrutide is an investigational compound studied for multi‑receptor activity (GLP‑1,
                GIP, and glucagon pathways). We provide laboratory‑grade supply with batch documentation
                and controlled distribution.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
                >
                  Request documentation
                </a>
                <a
                  href="#quality"
                  className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  View quality standards
                </a>
              </div>
              <div className="mt-6 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
                {[
                  "COA‑backed batches",
                  "HPLC + MS testing",
                  "Cold‑chain delivery",
                  "Batch traceability",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-500">
                For laboratory research only. Not for human or veterinary use.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src="/assets/clinic-hero.jpg"
                  alt="Clinical environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="mt-6 grid gap-3 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Format</span>
                  <span>Lyophilised vial</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Storage</span>
                  <span>2–8°C recommended</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Docs</span>
                  <span>COA + analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="evidence" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <h2 className="text-3xl font-semibold">Summary of published trial signals</h2>
            <p className="mt-4 text-slate-600">
              Early clinical studies suggest retatrutide shows larger average reductions in body‑weight
              versus semaglutide and tirzepatide at higher doses, with strong HbA1c lowering signals.
              Retatrutide remains experimental; long‑term safety and cardiovascular outcomes are not yet
              established.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Semaglutide (Ozempic/Wegovy)",
                  value: "~14.9%",
                  note: "Average weight‑loss in STEP‑1 at 68 weeks",
                },
                {
                  title: "Tirzepatide (Mounjaro)",
                  value: "~20–21%",
                  note: "Highest doses ~72 weeks",
                },
                {
                  title: "Retatrutide (investigational)",
                  value: "~24.2%",
                  note: "Phase‑2 obesity trial at 48 weeks",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <p className="mt-2 text-3xl font-semibold text-blue-600">{item.value}</p>
                  <p className="mt-2 text-xs text-slate-500">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Data summarized from published studies. Results vary by population, dose, and study
              design. Retatrutide is not approved for clinical use.
            </p>
          </div>
        </section>

        <section id="quality" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h2 className="text-3xl font-semibold">Quality & documentation</h2>
              <p className="mt-4 text-slate-600">
                Each batch ships with COA documentation and analytical verification using HPLC and
                mass spectrometry.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  { value: "≥99%", label: "Target purity" },
                  { value: "HPLC", label: "Chromatography" },
                  { value: "MS", label: "Mass spec" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                    <p className="text-3xl font-semibold text-blue-600">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/assets/clinic-lab.jpg"
                alt="Clinical lab"
                width={900}
                height={700}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <Image
                src="/assets/clinic-team.jpg"
                alt="Clinical team"
                width={900}
                height={700}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <h2 className="text-3xl font-semibold">Support for research teams</h2>
              <p className="mt-4 text-slate-600">
                We provide documentation guidance, batch availability updates, and controlled
                distribution to research laboratories.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-slate-600">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">Transparent sourcing & provenance</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">Batch‑level documentation</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">Independent analytical verification</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20">
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-10">
            <h2 className="text-3xl font-semibold">Request documentation</h2>
            <p className="mt-4 text-slate-600">
              Contact us to request COA documentation, batch availability, and laboratory supply terms.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@vantabiolabs.com"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Email for COA
              </a>
              <a
                href="#overview"
                className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700"
              >
                Download data sheet
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          <p>
            {BRAND} supplies research compounds for laboratory and analytical use only. Not for human or
            veterinary use. All information is provided for educational and research purposes.
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <span>Support: hello@vantabiolabs.com</span>
            <span>UK & EU distribution</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
