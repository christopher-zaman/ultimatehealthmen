import { Check } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const features = [
  "Direct access to care",
  "Longer, more personal visits",
  "Men's wellness-focused support",
  "Preventive care and ongoing guidance",
];

function Membership() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Card variant="light" className="rounded-[3rem] p-8 md:p-14">
          <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:items-center">
            <SectionHeading
              eyebrow="Membership"
              title="Direct care starting at $99/month."
              text="A simple monthly membership designed to give men better access, longer visits, and a more personal healthcare experience."
            />

            <Card variant="white" className="p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6e6e73]">
                DPC Membership
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-7xl font-semibold tracking-[-0.06em]">
                  $99
                </span>
                <span className="pb-3 text-[#6e6e73]">/ month</span>
              </div>

              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[#6e6e73]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3]">
                      <Check size={16} strokeWidth={2.2} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="https://app.elationemr.com/book/UltimateHealthDPC"
                target="_blank"
                rel="noreferrer"
                className="mt-10 w-full"
              >
                Book a Visit
              </Button>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Membership;