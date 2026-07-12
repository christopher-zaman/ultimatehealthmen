import { Check } from "lucide-react";

function ServicesProcessTimeline({ steps = [] }) {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--brand-navy-light)]">
              How It Works
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A simpler path to better care.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--brand-navy)]">
              The process is designed to be clear, direct, and focused on
              helping you understand your options.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-6 top-7 bottom-7 w-px bg-gradient-to-b from-[#12355b] via-[#4b6382] to-[#adca53] sm:left-7"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;

                return (
                  <article
                    key={step}
                    className="relative grid grid-cols-[48px_1fr] gap-6 sm:grid-cols-[56px_1fr]"
                  >
                    <div
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white text-sm font-bold shadow-lg sm:h-14 sm:w-14 ${
                        isLast
                          ? "bg-[#adca53] text-[#0b1f33]"
                          : "bg-[#12355b] text-white"
                      }`}
                    >
                      {isLast ? <Check size={20} strokeWidth={3} /> : index + 1}
                    </div>

                    <div className="rounded-[1.75rem] border border-[rgba(18,53,91,0.10)] bg-[#f5f5f7] px-6 py-6 shadow-sm sm:px-8">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-navy-light)]">
                        Step {index + 1}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#1d1d1f] sm:text-2xl">
                        {step}
                      </h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesProcessTimeline;