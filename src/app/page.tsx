import Image from "next/image";

const BRAND = "VantaBio Labs";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.svg" alt={BRAND} width={180} height={48} className="h-10 w-auto" />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#specs" className="hover:text-blue-400">Specs</a>
            <a href="#trust" className="hover:text-blue-400">Trust</a>
            <a href="#order" className="hover:text-blue-400">Order</a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
          >
            Request access
          </a>
        </div>
      </header>

      <main>
        <section className="px-6 pt-20 pb-16" id="top">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Retatutride • Research Supply
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Single‑compound focus for high‑integrity research workflows
              </h1>
              <p className="mt-5 text-lg text-slate-300">
                Retatutride supplied for laboratory and analytical use only. Controlled distribution,
                batch documentation, and clear procurement from request to dispatch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#order"
                  className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
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
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">COA‑backed batches</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">HPLC + MS testing</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Cold‑chain delivery</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">Batch traceability</div>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                For laboratory research only. Not for human or veterinary use.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-blue-600/10 blur-3xl" />
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

        <section id="about" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-semibold">Built for research teams</h2>
              <p className="mt-4 text-slate-300">
                We supply Retatutride with strict documentation standards, transparent provenance, and
                controlled chain‑of‑custody. One compound, one standard.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Transparent sourcing & provenance</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Batch‑level documentation</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Independent analytical verification</div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/assets/lab-bottles.jpg"
                alt="Lab bottles"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="specs" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-blue-600/20 to-slate-900 px-8 py-12 border border-white/10">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold">Specification highlights</h2>
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
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <p className="text-3xl font-semibold text-blue-300">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">Documentation included</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  <li>• Certificate of Analysis (COA)</li>
                  <li>• Batch ID and release date</li>
                  <li>• Stability notes</li>
                  <li>• Storage and handling guidance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="trust" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {["Secure procurement", "Cold‑chain dispatch", "Dedicated research support"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg font-semibold">{item}</p>
                <p className="mt-3 text-sm text-slate-300">
                  Built to keep research workflows smooth, documented, and compliant.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="order" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Request access & pricing</h2>
              <p className="mt-4 text-slate-300">
                Submit your lab details to receive pricing, available batch sizes, and delivery options.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { title: "1. Request access", text: "Tell us your lab details and quantities." },
                  { title: "2. Review documentation", text: "We provide COA and analytical results." },
                  { title: "3. Secure dispatch", text: "Cold‑chain delivery with tracking." },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Retatutride (research grade)</p>
                  <p className="text-2xl font-semibold">£—</p>
                </div>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200">New</span>
              </div>
              <div className="mt-6 grid gap-3">
                <button className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white">
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

        <section id="faq" className="px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold">FAQ</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "Is this product for human use?",
                  a: "No. It is supplied strictly for laboratory research and analytical use.",
                },
                {
                  q: "Do you provide COAs?",
                  a: "Yes, COAs are available for each batch with analytical verification.",
                },
                {
                  q: "How is it shipped?",
                  a: "Cold‑chain packaging with tracking is standard for all shipments.",
                },
                {
                  q: "Can I request custom quantities?",
                  a: "Contact us for custom requirements and institutional pricing.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-3 text-sm text-slate-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
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
