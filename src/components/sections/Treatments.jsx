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

function Treatments() {
  return (
    <section id="services" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Men's health services built around confidence, performance, and prevention."
          />

          <p className="max-w-2xl text-lg leading-8 text-[#667085] lg:ml-auto">
            Focused care for hormones, sexual wellness, weight management,
            preventive health, and the concerns men often delay talking about.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {treatments.map((treatment) => {
            const featured = treatment.featured;

            return (
              <IconCard
                key={treatment.title}
                icon={treatment.icon}
                title={treatment.title}
                text={treatment.description}
                variant={featured ? "dark" : "light"}
                className={featured ? "md:col-span-2" : ""}
              >
                <Badge variant={featured ? "dark" : "light"}>
                  {treatment.label}
                </Badge>
              </IconCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Treatments;