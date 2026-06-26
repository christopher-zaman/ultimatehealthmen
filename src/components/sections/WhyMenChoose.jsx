import { Brain, HeartHandshake, ShieldCheck } from "lucide-react";
import Card from "../ui/Card";
import IconCard from "../ui/IconCard";
import SectionHeading from "../ui/SectionHeading";
import RevealCard from "../ui/RevealCard";

const reasons = [
  {
    icon: Brain,
    title: "Feel more energized",
    text: "Support for fatigue, motivation, weight changes, hormones, and the symptoms that can make you feel unlike yourself.",
  },
  {
    icon: HeartHandshake,
    title: "Talk openly",
    text: "Private, respectful care for sensitive concerns like sexual wellness, confidence, performance, and long-term health.",
  },
  {
    icon: ShieldCheck,
    title: "Stay ahead of your health",
    text: "Preventive care, labs, and ongoing guidance designed to help men catch concerns earlier and build healthier routines.",
  },
];

function WhyMenChoose() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-6 py-28">
      <div className="radial-glow glow-navy -left-40 top-20 h-96 w-96" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Card variant="white" className="rounded-[3rem] p-8 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Why Men Choose Us"
              title="Better health starts with better access."
              className="max-w-2xl"
            />

            <p className="max-w-2xl text-lg leading-8 text-[#667085] lg:ml-auto">
              Ultimate Health Men is designed for men who want healthcare that
              is direct, personal, preventive, and easier to talk about.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <RevealCard
                key={reason.title}
                delay={index * 0.08}
              >
                <IconCard
                  icon={reason.icon}
                  title={reason.title}
                  text={reason.text}
                  className="h-full"
                />
              </RevealCard>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default WhyMenChoose;