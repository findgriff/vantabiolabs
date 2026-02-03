const BRAND = "VantaBio Labs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
              V
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">{BRAND}</p>
              <p className="text-xs text-slate-500">Research Compounds</p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-sm text-slate-600 md:flex">
            <a href="#proof" className="hover:text-emerald-700">Proof</a>
            <a href="#protocol" className="hover:text-emerald-700">Protocol</a>
            <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          </div>
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
                A focused, premium source for Retatutride — verified, documented, and ready for research
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Built for labs that value clarity: batch-level documentation, transparent sourcing, and
                consistent standards. One compound. Zero clutter.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#order"
                  className="rounded-full bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/30"
                >
                  Request pricing
                </a>
                <a
                  href="#proof"
                  className="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-700"
                >
                  See quality standards
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-xs text-slate-500 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-3">COA-backed batches</div>
                <div className="rounded-2xl border border-slate-200 p-3">HPLC + MS verification</div>
                <div className="rounded-2xl border border-slate-200 p-3">Cold-chain dispatch</div>
                <div className="rounded-2xl border border-slate-200 p-3">EU & UK delivery</div>
              </div>
              <p className="mt-6 text-xs text-slate-500">
                For laboratory research only. Not for human or veterinary use.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-md">
                <div className="absolute inset-0 grid place-items-center text-sm text-slate-400">
                  Product image placeholder
                </div>
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
                  <span>Documentation</span>
                  <span>Batch COA + analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl bg-slate-900 px-8 py-12 text-white">
            <h2 className="text-3xl font-semibold">Quality you can verify</h2>
            <p className="mt-4 text-slate-300">
              Every batch is supported by analytical documentation and verified purity targets, with
              transparent sourcing and traceable chain-of-custody.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { value: "≥99%", label: "Target purity threshold" },
                { value: "2x", label: "Independent verification" },
                { value: "24/7", label: "Cold-chain tracking" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-3xl font-semibold text-emerald-300">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="protocol" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">A simple procurement flow</h2>
              <p className="mt-4 text-slate-600">
                We keep ordering streamlined and compliance-first: request access, receive batch data,
                and confirm your research requirements.
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  {
                    title: "1. Request access",
                    text: "Tell us your lab details and required quantity.",
                  },
                  {
                    title: "2. Review batch documentation",
                    text: "We provide COA + analytical results for approval.",
                  },
                  {
                    title: "3. Secure dispatch",
                    text: "Cold-chain packaging with tracking and delivery updates.",
                  },
                ].map((step) => (
                  <div key={step.title} className="rounded-2xl border border-slate-200 p-5">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" id="order">
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
