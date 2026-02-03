import Image from "next/image";

const BRAND = "VantaBio Labs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.svg" alt={BRAND} width={180} height={48} className="h-10 w-auto" />
          </div>
          <nav className="hidden items-center gap-5 text-sm text-slate-600 md:flex">
            <a href="#mission" className="hover:text-emerald-700">Mission</a>
            <a href="#compound" className="hover:text-emerald-700">Compound</a>
            <a href="#quality" className="hover:text-emerald-700">Quality</a>
            <a href="#order" className="hover:text-emerald-700">Order</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30"
          >
            Request access
          </a>
        </div>
      </header>

      <main>
        <section className="px-6 pt-16 pb-12" id="top">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Retatutride Research Supply
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                One-compound focus. Research-grade clarity.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Retatutride supplied for laboratory and analytical use only. We prioritize verified
                documentation, controlled distribution, and a clean procurement flow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#order"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/30"
                >
                  Request pricing
                </a>
                <a
                  href="#quality"
                  className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  View COA standards
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-3">COA-backed batches</div>
                <div className="rounded-2xl border border-slate-200 p-3">HPLC + MS testing</div>
                <div className="rounded-2xl border border-slate-200 p-3">Cold-chain dispatch</div>
                <div className="rounded-2xl border border-slate-200 p-3">Batch traceability</div>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                For laboratory research only. Not for human or veterinary use.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-md">
                <Image
                  src="/assets/hero-lab.jpg"
                  alt="Laboratory environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="mt-6 grid gap-3 text-xs text-slate-500">
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

        <section id="mission" className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold">Our mission</h2>
            <p className="mt-4 text-slate-600">
              We advance scientific exploration by supplying high-purity research compounds with
              transparent sourcing, verified purity, and clear documentation.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Expert collaboration",
                  text: "Built with lab professionals to keep protocols efficient and compliant.",
                },
                {
                  title: "Focused catalog",
                  text: "One compound, one standard. No clutter or distractions.",
                },
                {
                  title: "Individual support",
                  text: "Guidance on documentation, shipping, and batch specifics.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compound" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200">
              <Image
                src="/assets/lab-bottles.jpg"
                alt="Lab bottles"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Retatutride overview</h2>
              <p className="mt-4 text-slate-600">
                Retatutride is an investigational compound being studied for multi-receptor activity in
                metabolic research models. We supply research-grade material with batch documentation
                and controlled chain-of-custody.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  "Transparent sourcing & provenance",
                  "Batch-level documentation",
                  "Independent analytical verification",
                  "Cold-chain handling",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 px-8 py-12 text-white">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold">Quality you can verify</h2>
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
                      <p className="text-3xl font-semibold text-emerald-300">{stat.value}</p>
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

        <section id="order" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Request access & pricing</h2>
              <p className="mt-4 text-slate-600">
                Submit your lab details to receive pricing, available batch sizes, and delivery options.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  { title: "1. Request access", text: "Tell us your lab details and quantities." },
                  { title: "2. Review documentation", text: "We provide COA and analytical results." },
                  { title: "3. Secure dispatch", text: "Cold-chain delivery with tracking." },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Retatutride (research grade)</p>
                  <p className="text-2xl font-semibold">£—</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">New</span>
              </div>
              <div className="mt-6 grid gap-3">
                <button className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">
                  Request pricing
                </button>
                <button className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
                  Download COA template
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                For laboratory research only. Minimum order quantities may apply.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-16">
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
                  a: "Cold-chain packaging with tracking is standard for all shipments.",
                },
                {
                  q: "Can I request custom quantities?",
                  a: "Contact us for custom requirements and institutional pricing.",
                },
              ].map((item) => (
                <div key={item.q} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
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
