import Image from "next/image";

const BRAND = "VantaBio Labs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0f1a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Image src="/assets/logo.svg" alt={BRAND} width={180} height={48} className="h-9 w-auto" />
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#signal" className="hover:text-cyan-300">Signal</a>
            <a href="#specs" className="hover:text-cyan-300">Specs</a>
            <a href="#protocol" className="hover:text-cyan-300">Protocol</a>
            <a href="#order" className="hover:text-cyan-300">Order</a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-cyan-500/40"
          >
            Request access
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-20 pb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.15),_transparent_55%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Retatutride • Research Supply
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Futuristic research‑grade supply for Retatutride
              </h1>
              <p className="mt-5 text-lg text-slate-300">
                One compound, one standard. Controlled distribution with batch‑level documentation,
                HPLC + MS verification, and cold‑chain dispatch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#order"
                  className="rounded-full bg-cyan-500 px-6 py-3 text-center text-sm font-semibold text-black shadow-lg shadow-cyan-500/40"
                >
                  Request pricing
                </a>
                <a
                  href="#specs"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white/80"
                >
                  View specifications
                </a>
              </div>
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

        <section id="signal" className="px-6 py-14">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { title: "Signal purity", text: "Verified target purity with analytical documentation." },
                { title: "Chain of custody", text: "Controlled sourcing and traceable batch history." },
                { title: "Protocol ready", text: "Documentation designed for lab compliance." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-lg font-semibold text-cyan-200">{item.title}</p>
                  <p className="mt-3 text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specs" className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-semibold">Specification core</h2>
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
                  Retatutride is supplied for laboratory research only.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="protocol" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Acquisition protocol</h2>
              <p className="mt-4 text-slate-300">
                A simple, compliant flow from request to dispatch.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { title: "1. Request access", text: "Provide lab details and quantity requirements." },
                  { title: "2. Review batch data", text: "We share COA + analytical results." },
                  { title: "3. Secure dispatch", text: "Cold‑chain delivery with tracking." },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Retatutride (research grade)</p>
                  <p className="text-2xl font-semibold">£—</p>
                </div>
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-200">New</span>
              </div>
              <div className="mt-6 grid gap-3">
                <button className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-black">
                  Request pricing
                </button>
                <button className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80">
                  Download COA template
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                For laboratory research only. Minimum order quantities may apply.
              </p>
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
