import { Check } from "lucide-react";
import { motion } from "motion/react";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import ExpandingCTA from "../ui/ExpandingCTA";
import RevealCard from "../ui/RevealCard";

const plans = [
  {
    name: "Basic Care",
    price: "$125",
    subtitle: "Strong foundation. Essential care.",
    features: [
      "Direct Primary Care access",
      "Routine labs & exams",
      "Same-day or next-day visits",
      "Extended visits. Real conversations.",
    ],
    footer: "Trusted care. Better health.",
  },
  {
    name: "Men’s Performance Plan",
    price: "$249",
    subtitle: "Elevate your health. Enhance your performance.",
    features: [
      "Everything in Basic Care",
      "Erectile dysfunction treatment",
      "Hormone evaluation & monitoring",
      "Priority scheduling",
    ],
    footer: "Optimize. Perform. Live better.",
  },
  {
    name: "Total Man Plan",
    price: "$299",
    subtitle: "Complete care. Total optimization.",
    features: [
      "Everything in Men’s Performance Plan",
      "Testosterone replacement therapy",
      "Monthly IV hydration therapy",
      "Ongoing optimization & support",
    ],
    footer: "Be your best. Every day.",
    featured: true,
  },
];

function Membership() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      <div className="radial-glow glow-green right-0 top-20 h-96 w-96" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Membership"
            title="Choose the level of care that fits your goals."
            text="Direct Primary Care memberships built for men who want to look, feel, and perform their best now and for years to come."
            className="max-w-3xl"
          />

          <p className="max-w-2xl text-lg leading-8 text-[var(--text-body)] lg:ml-auto">
            From essential primary care to complete optimization, Ultimate
            Health Men gives you more time, better access, and care designed
            around the whole man.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <RevealCard key={plan.name} delay={index * 0.1}>
              <Card
                variant={plan.featured ? "dark" : "white"}
                className={`relative flex h-full flex-col overflow-hidden p-8 md:p-9 transition-all duration-500 ${
                  plan.featured
                    ? "scale-[1.03] ring-2 ring-[rgba(151,201,61,.35)] shadow-[0_35px_80px_rgba(151,201,61,.18)]"
                    : ""
                }`}
              >
                {plan.featured && (
                  <>
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[rgba(151,201,61,.14)] blur-3xl" />
                    <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-[rgba(18,53,91,.18)] blur-3xl" />
                  </>
                )}

                <div className="relative z-10 flex h-full flex-col">
                  {plan.featured && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--uhm-green)]">
                      Most Popular
                    </p>
                  )}

                  <p
                    className={`text-sm font-bold uppercase tracking-[0.22em] ${
                      plan.featured
                        ? "text-[var(--uhm-green)]"
                        : "text-[#12355b]"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <p
                    className={`mt-5 min-h-[56px] text-lg font-medium leading-7 ${
                      plan.featured
                        ? "text-white/75"
                        : "text-[var(--text-body)]"
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  <div className="mt-8 flex items-end gap-2">
                    <span className="text-7xl font-bold tracking-[-0.07em]">
                      {plan.price}
                    </span>
                    <span
                      className={`pb-3 text-sm font-semibold uppercase tracking-[0.16em] ${
                        plan.featured
                          ? "text-white/55"
                          : "text-[var(--text-label)]"
                      }`}
                    >
                      /month
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: featureIndex * 0.06,
                        }}
                        viewport={{ once: true }}
                        className={`flex items-start gap-3 ${
                          plan.featured
                            ? "text-white/75"
                            : "text-[var(--text-body)]"
                        }`}
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(151,201,61,.16)] text-[var(--uhm-green)]">
                          <Check size={16} strokeWidth={2.4} />
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <p
                      className={`mb-6 text-sm font-bold uppercase tracking-[0.18em] ${
                        plan.featured ? "text-white/65" : "text-[#12355b]"
                      }`}
                    >
                      {plan.footer}
                    </p>

                    <ExpandingCTA
                      href="https://app.elationemr.com/book/UltimateHealthDPC"
                      target="_blank"
                      rel="noreferrer"
                      variant={plan.featured ? "light" : "primary"}
                      className="w-full justify-center"
                    >
                      Book This Plan
                    </ExpandingCTA>
                  </div>
                </div>
              </Card>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;