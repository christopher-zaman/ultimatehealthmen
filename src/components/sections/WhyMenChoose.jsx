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
    <section className="relative overflow-hidden bg-[#f5f5f7] px-6 py-10">
      <div className="radial-glow glow-navy -left-40 top-20 h-96 w-96" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Card
          variant="white"
          className="relative isolate overflow-hidden rounded-[3rem] bg-gradient-to-br from-white via-[#f8fbfd] to-[#eef4fa] p-8 md:p-14"
        >
          {/* subtle section pattern */}
          <div className="pointer-events-none absolute -right-28 -top-28 z-0 h-80 w-80 rounded-full border border-[rgba(18,53,91,0.12)]" />
          <div className="pointer-events-none absolute -bottom-32 -left-28 z-0 h-72 w-72 rounded-full bg-[rgba(18,53,91,0.045)]" />
          <div className="pointer-events-none absolute right-[18%] top-[42%] z-0 h-24 w-24 rotate-12 rounded-[1.75rem] border border-[rgba(18,53,91,0.10)]" />
          <div className="pointer-events-none absolute bottom-20 right-24 z-0 h-32 w-32 rotate-12 bg-[rgba(18,53,91,0.055)] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />

          <div className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <SectionHeading
                eyebrow="Why Men Choose Us"
                title="Better health starts with better access."
                className="max-w-2xl"
              />

              <p className="max-w-2xl text-xl leading-8 text-[color:var(--brand-navy)] lg:ml-auto">
                Ultimate Health Men is designed for men who want healthcare that
                is direct, personal, preventive, and easier to talk about.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {reasons.map((reason, index) => (
                <RevealCard key={reason.title} delay={index * 0.08}>
                  <IconCard
                    icon={reason.icon}
                    title={reason.title}
                    text={reason.text}
                    className="h-full"
                  />
                </RevealCard>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default WhyMenChoose;