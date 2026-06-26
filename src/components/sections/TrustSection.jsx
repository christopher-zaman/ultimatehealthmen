import { CheckCircle2 } from "lucide-react";
import chamberLogo from "../../assets/logos/chamber_logo.webp";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import RevealImage from "../ui/RevealImage";

const trustItems = [
  "Winter Haven Chamber Member",
  "Direct Primary Care",
  "Private men's healthcare",
  "Serving Central Florida",
];

function TrustSection() {
  return (
    <section className="bg-white px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Card
          variant="light"
          className="rounded-[3rem] p-8 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Left */}

            <div>
              <SectionHeading
                eyebrow="Community Trusted"
                title="Trusted men's healthcare in Winter Haven."
                text="Ultimate Health Men is built on personal relationships, local trust, and healthcare that helps men feel supported at every stage of life."
                className="max-w-2xl"
              />

              <div className="mt-8 space-y-3">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[var(--uhm-green-dark)]"
                    />

                    <span className="text-[15px] font-medium text-[var(--uhm-green-dark)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}

            <div className="flex flex-col items-center justify-center">
              <RevealImage
                src={chamberLogo}
                alt="Winter Haven Chamber of Commerce"
                from="right"
                className="w-[290px] lg:w-[320px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              />

              <p className="mt-5 text-center text-sm font-medium text-[#667085]">
                Proud Member
              </p>

              <p className="mt-1 text-center text-sm text-[#98a2b3]">
                Winter Haven Chamber of Commerce
              </p>

              <p className="mt-1 text-center text-xs uppercase tracking-[0.18em] text-[#98a2b3]">
                2026–2027
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default TrustSection;