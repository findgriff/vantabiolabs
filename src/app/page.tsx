import Image from "next/image";

const BRAND = "VantaBio Labs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f1a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image src="/assets/logo.svg" alt={BRAND} width={180} height={48} className="h-9 w-auto" />
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#overview" className="hover:text-cyan-300">Overview</a>
            <a href="#evidence" className="hover:text-cyan-300">Evidence</a>
            <a href="#quality" className="hover:text-cyan-300">Quality</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/40"
          >
            Request COA
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-20 pb-16" id="overview">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.15),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Retatrutide • Research Supply Only
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Research‑grade Retatrutide with transparent documentation
              </h1>
              <p className="mt-5 text-lg text-slate-300">
                Retatrutide is an investigational compound studied for multi‑receptor activity (GLP‑1,
                GIP, and glucagon pathways). We provide laboratory‑grade supply with batch documentation
                and controlled distribution.
              </p>
              <div className="mt-8 grid gap-3 text-xs text-slate-400 sm:grid-cols-2">
                {[
                  "COA‑backed batches",
                  "HPLC + MS testing",
                  "Cold‑chain delivery",
                  "Batch traceability",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-500">
                For laboratory research only. Not for human or veterinary use.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-cyan-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <Image
                  src="/assets/hero-lab.jpg"
                  alt="Laboratory environment"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="evidence" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-semibold">Summary of published trial signals</h2>
            <p className="mt-4 text-slate-300">
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
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
                  <p className="text-sm text-slate-400">{item.title}</p>
                  <p className="mt-2 text-3xl font-semibold text-cyan-300">{item.value}</p>
                  <p className="mt-2 text-xs text-slate-400">{item.note}</p>
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
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-semibold">Quality & documentation</h2>
                <p className="mt-4 text-slate-300">
                  Each batch ships with COA documentation and analytical verification using HPLC and
                  mass spectrometry.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {[
                    { value: "≥99%", label: "Target purity" },
                    { value: "HPLC", label: "Chromatography" },
                    { value: "MS", label: "Mass spec" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
                      <p className="text-3xl font-semibold text-cyan-300">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                <h3 className="text-lg font-semibold">Documentation included</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Certificate of Analysis (COA)</li>
                  <li>• Batch ID and release date</li>
                  <li>• Stability notes</li>
                  <li>• Storage and handling guidance</li>
                </ul>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
                  Supplied for laboratory research only. Not for human or veterinary use.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-semibold">Request documentation</h2>
            <p className="mt-4 text-slate-300">
              Contact us to request COA documentation, batch availability, and laboratory supply terms.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@vantabiolabs.com"
                className="rounded-full bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-black"
              >
                Email for COA
              </a>
              <a
                href="#overview"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/80"
              >
                Download data sheet
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0b0f1a]">
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
