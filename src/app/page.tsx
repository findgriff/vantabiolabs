import Image from "next/image";

const BRAND = "Vanta Bio Labs";
const PRODUCT = "Retatrutide (LY3437943)";

const HIGHLIGHTS = [
  { label: "Investigational", value: "Not licensed in UK/EU" },
  { label: "Administration", value: "Once‑weekly injection" },
  { label: "Mechanism", value: "GLP‑1 / GIP / Glucagon" },
  { label: "Program", value: "Phase 3 TRIUMPH" },
];

const MECHANISM = [
  {
    title: "GLP‑1 receptor",
    detail: "Reduces appetite and improves glucose regulation.",
  },
  {
    title: "GIP receptor",
    detail: "Supports insulin response and metabolic control.",
  },
  {
    title: "Glucagon receptor",
    detail: "Increases energy expenditure and fat breakdown.",
  },
];

const DOSING = [
  "Once‑weekly subcutaneous dosing with gradual titration.",
  "Typical starting doses around 2–4 mg weekly in trials.",
  "Target doses of 8–12 mg depending on study arm.",
  "Final prescribing guidance is not established.",
];

const SAFETY = [
  "Most common events: nausea, diarrhoea, vomiting, constipation.",
  "GI events are dose‑related and improved by slower titration.",
  "Early increases in heart rate tended to decrease later on.",
  "Long‑term safety (CV outcomes, pancreatitis, gallbladder) still under study.",
];

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/vanta-logo.svg"
              alt={BRAND}
              width={96}
              height={96}
              className="h-12 w-12"
            />
            <div>
              <div className="font-display text-lg font-semibold text-[var(--foreground)]">
                {BRAND}
              </div>
              <div className="text-[0.6rem] uppercase tracking-[0.28em] text-muted">
                Clinical Fact Sheet
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <a href="#overview" className="hover:text-[var(--accent)]">
              Overview
            </a>
            <a href="#mechanism" className="hover:text-[var(--accent)]">
              Mechanism
            </a>
            <a href="#dosing" className="hover:text-[var(--accent)]">
              Dosing
            </a>
            <a href="#efficacy" className="hover:text-[var(--accent)]">
              Efficacy
            </a>
            <a href="#safety" className="hover:text-[var(--accent)]">
              Safety
            </a>
            <a href="#status" className="hover:text-[var(--accent)]">
              Status
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground)] transition hover:border-black/40"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section id="overview" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 right-[-8%] h-96 w-96 rounded-full bg-[#d7eef7] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[#e7f3dc] blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,126,166,0.12),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(123,191,90,0.12),transparent_60%)]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-16 md:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-rise">
              <span className="chip border-black/20 text-[var(--accent-strong)]">
                Retatrutide Fact Sheet
              </span>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-tight md:text-5xl">
                A clinical snapshot of {PRODUCT} for obesity and type 2 diabetes
              </h1>
              <p className="mt-5 text-lg text-muted">
                Retatrutide is an investigational synthetic peptide designed for once‑weekly
                subcutaneous injection. As of 2026, it is not licensed for routine clinical use in
                the UK or EU and is generally limited to clinical trials.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#efficacy"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[rgba(15,138,143,0.35)]"
                >
                  View trial signals
                </a>
                <a
                  href="#notes"
                  className="rounded-full border border-black/15 px-6 py-3 text-center text-sm font-semibold text-[var(--foreground)]"
                >
                  Read important notes
                </a>
              </div>
              <p className="mt-6 text-xs text-muted">
                Information below summarizes published trial findings and ongoing development only.
                This page is informational and not a promotional or prescribing resource.
              </p>
            </div>
            <div className="relative animate-rise md:justify-self-end">
              <div className="rounded-[32px] border border-black/10 bg-white p-5 shadow-xl shadow-black/10">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/retatrutide-hero.jpg"
                    alt="Abstract clinical visualization of peptide research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="mt-5 grid gap-3 text-xs text-muted">
                  <div className="flex items-center justify-between">
                    <span>Formulation</span>
                    <span>Synthetic peptide</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span>Subcutaneous injection</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Access</span>
                    <span>Clinical trials</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 right-8 hidden rounded-full border border-black/10 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--accent)] shadow-lg shadow-black/10 md:block">
                2026 snapshot
              </div>
            </div>
          </div>
        </section>

        <section id="mechanism" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-black/10 bg-white p-8">
              <h2 className="font-display text-3xl font-semibold">How does it work?</h2>
              <p className="mt-4 text-muted">
                Retatrutide is a triple hormone receptor agonist targeting GLP‑1, GIP, and glucagon.
                By stimulating these pathways it can reduce appetite, improve glycaemic control, and
                increase energy expenditure in clinical studies.
              </p>
              <div className="mt-6 grid gap-4">
                {MECHANISM.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-[var(--surface-muted)] p-4"
                  >
                    <p className="text-sm font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-sm text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-[var(--surface-muted)] p-6">
              <Image
                src="/assets/retatrutide-pathways.jpg"
                alt="Triple receptor pathways illustration"
                width={900}
                height={720}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="dosing" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-black/10 bg-white p-8">
              <h2 className="font-display text-3xl font-semibold">Dosing in clinical trials</h2>
              <p className="mt-4 text-muted">
                Trial protocols used once‑weekly injections with gradual dose increases to improve
                tolerability. Final approved dosing, if licensed, may differ from trial regimens.
              </p>
              <div className="mt-6 grid gap-4">
                {DOSING.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-black/10 bg-[var(--surface-muted)] p-4"
                  >
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-[var(--surface-muted)] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Typical titration
              </p>
              <div className="mt-6 space-y-5 text-sm text-muted">
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <p className="font-semibold text-[var(--foreground)]">Weeks 0–4</p>
                  <p className="mt-2">Low starting doses around 2–4 mg weekly.</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <p className="font-semibold text-[var(--foreground)]">Weeks 4–16</p>
                  <p className="mt-2">Gradual escalation to improve GI tolerability.</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <p className="font-semibold text-[var(--foreground)]">Target dosing</p>
                  <p className="mt-2">Higher arms targeted 8–12 mg weekly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="efficacy" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-black/10 bg-white p-10">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold">
                  Efficacy seen in key trials
                </h2>
                <p className="mt-4 text-muted">
                  In a phase 2 obesity trial (NEJM, 2023), adults receiving retatrutide once weekly for
                  48 weeks experienced substantial weight loss, with the highest dose group achieving
                  mean reductions of up to ~24% of baseline body weight. Participants had not clearly
                  reached a weight‑loss plateau at 48 weeks, suggesting longer treatment may extend the
                  effect.
                </p>
                <p className="mt-4 text-muted">
                  In type 2 diabetes studies, early results show clinically meaningful reductions in
                  HbA1c and body weight, while larger phase 3 trials remain ongoing.
                </p>
              </div>
              <div className="rounded-[28px] border border-black/10 bg-[var(--surface-muted)] p-6">
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Phase 2 snapshot</p>
                  <p className="mt-3 text-4xl font-semibold text-[var(--accent)]">~24% mean loss</p>
                  <p className="mt-3 text-sm text-muted">
                    Highest dose arm at 48 weeks, adults with obesity.
                  </p>
                </div>
                <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Diabetes signals</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">
                    HbA1c + weight reduction
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Early studies show clinically meaningful improvements.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-muted">
              Data summarized from published studies. Outcomes vary by population, dose, and design.
              Retatrutide remains investigational and is not approved for routine clinical use.
            </p>
          </div>
        </section>

        <section id="safety" className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-black/10 bg-[var(--surface-muted)] p-6">
              <Image
                src="/assets/retatrutide-lab.jpg"
                alt="Clinical laboratory environment"
                width={900}
                height={720}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white p-8">
              <h2 className="font-display text-3xl font-semibold">Side effects & safety profile</h2>
              <p className="mt-4 text-muted">
                The most common adverse events reported in trials have been gastrointestinal and
                generally dose‑related. Serious adverse events have been uncommon so far and comparable
                to placebo in early trials, but long‑term safety continues to be evaluated.
              </p>
              <div className="mt-6 grid gap-4">
                {SAFETY.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-[var(--surface-muted)] p-4 text-sm text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="status" className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-black/10 bg-white p-10">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold">Current development status</h2>
                <p className="mt-4 text-muted">
                  Retatrutide is being developed by Eli Lilly as part of the TRIUMPH phase 3 programme
                  for obesity and related metabolic conditions. Phase 2 results have been published and
                  phase 3 trials are underway.
                </p>
                <p className="mt-4 text-muted">
                  Some projections anticipate potential regulatory submissions later this decade if
                  ongoing results remain favourable. Until approvals are granted, retatrutide remains an
                  investigational medicine and is not available for routine prescribing or
                  over‑the‑counter purchase.
                </p>
              </div>
              <div className="rounded-[28px] border border-black/10 bg-[var(--surface-muted)] p-6">
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Program</p>
                  <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">TRIUMPH Phase 3</p>
                  <p className="mt-3 text-sm text-muted">
                    Multi‑study program evaluating obesity and metabolic disease.
                  </p>
                </div>
                <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Availability</p>
                  <p className="mt-3 text-lg font-semibold text-[var(--foreground)]">
                    Clinical trials only
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Access generally limited to research settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="notes" className="px-6 pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-black/10 bg-[var(--surface-muted)] p-8">
              <h2 className="font-display text-3xl font-semibold">Important notes</h2>
              <p className="mt-4 text-muted">
                All uses of retatrutide outside clinical trials are considered experimental and are not
                supported by current regulatory approvals. Decisions about trial participation or future
                treatment should be made with a qualified healthcare professional based on individual
                risk and benefit.
              </p>
              <p className="mt-4 text-muted">
                This fact sheet is designed for clinicians, researchers, and informed audiences seeking
                a concise summary of published findings.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white p-8" id="contact">
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted">Contact</h3>
              <p className="font-display mt-3 text-2xl font-semibold">
                Scientific inquiries and updates
              </p>
              <p className="mt-4 text-muted">
                Reach Vanta Bio Labs for updates on published evidence, scientific collaboration, or
                general questions about investigational development status.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="mailto:hello@vantabiolabs.com"
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[rgba(15,138,143,0.3)]"
                >
                  hello@vantabiolabs.com
                </a>
                <div className="text-xs text-muted">
                  We do not provide medical advice or prescribing guidance.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[var(--background)]">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
          <p>
            {BRAND} provides educational resources for investigational medicines. This content does not
            replace medical advice and should not be used to make treatment decisions.
          </p>
          <div className="mt-4 flex flex-col gap-1">
            <span>Support: hello@vantabiolabs.com</span>
            <span>Information current as of February 2026.</span>
            <span>Stock imagery: Josiah Rock, Alexander Nedviga, Allison Saeng (Unsplash).</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
