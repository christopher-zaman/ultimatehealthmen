import {
  Activity,
  Droplets,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Weight,
} from "lucide-react";

import Badge from "../ui/Badge";
import IconCard from "../ui/IconCard";
import SectionHeading from "../ui/SectionHeading";
import RevealCard from "../ui/RevealCard";

const treatments = [
  {
    label: "Primary Care",
    icon: Stethoscope,
    title: "Direct Primary Care",
    description:
      "Ongoing, relationship-based care with more time, direct access, and a provider who knows your health goals.",
    featured: true,
  },
  {
    label: "Hormone Care",
    icon: Activity,
    title: "Hormone Optimization",
    description:
      "Evaluation and treatment for symptoms like low energy, low testosterone, mood changes, and performance concerns.",
  },
  {
    label: "Performance",
    icon: HeartPulse,
    title: "Erectile Dysfunction Treatment",
    description:
      "Confidential, medically guided options to support performance, confidence, and sexual health.",
  },
  {
    label: "Wellness",
    icon: ShieldCheck,
    title: "Sexual Wellness",
    description:
      "Personalized support for libido, intimacy concerns, and overall male sexual wellness in a private setting.",
  },
  {
    label: "Weight Loss",
    icon: Weight,
    title: "Weight Management",
    description:
      "Medical guidance for weight loss, metabolism, nutrition, and long-term lifestyle change.",
  },
  {
    label: "Optimization",
    icon: Sparkles,
    title: "Peptide Therapy",
    description:
      "Targeted therapies that may support vitality, recovery, libido, and overall wellness when clinically appropriate.",
  },
  {
    label: "Recovery",
    icon: Droplets,
    title: "Elective IV Hydration",
    description:
      "Wellness-focused hydration options designed to support energy, recovery, and overall optimization.",
  },
];

const servicePills = [
  "Hormone Health",
  "Sexual Wellness",
  "Weight Management",
  "Direct Primary Care",
  "Peptide Therapy",
  "IV Hydration",
  "Prevention",
];

function Treatments() {
  return (
    <section id="services" className="bg-white px-6 py-15">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="Services"
            title="Men’s health care built around you."
            text="Focused care for hormones, sexual wellness, weight management, preventive health, and the concerns men often delay talking about."
            className="max-w-2xl"
          />

          <div className="relative min-h-[260px] rounded-[3rem] bg-[#f5f7fa] p-8 ring-1 ring-black/5">
            <div className="radial-glow glow-green right-8 top-8 h-40 w-40 opacity-40" />
            <div className="radial-glow glow-navy bottom-4 left-10 h-48 w-48 opacity-25" />

            <div className="relative z-10 flex h-full flex-wrap content-center items-center gap-3">
              {servicePills.map((pill, index) => (
                <RevealCard key={pill} delay={index * 0.05}>
                  <span
                    className={`inline-flex rounded-full px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-black/5 ${
                      index === 3
                        ? "bg-[#12355b] text-white"
                        : "bg-white/85 text-[#475467] backdrop-blur"
                    }`}
                  >
                    {pill}
                  </span>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {treatments.map((treatment, index) => {
            const featured = treatment.featured;

            return (
              <RevealCard
                key={treatment.title}
                delay={featured ? 0 : index * 0.08 + 0.15}
                className={featured ? "md:col-span-2" : ""}
              >
                <IconCard
                  icon={treatment.icon}
                  title={treatment.title}
                  text={treatment.description}
                  variant={featured ? "dark" : "light"}
                  className="h-full"
                >
                  <Badge variant={featured ? "dark" : "light"}>
                    {treatment.label}
                  </Badge>
                </IconCard>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Treatments;