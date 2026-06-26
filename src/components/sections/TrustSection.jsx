import { CheckCircle2 } from "lucide-react";
import chamberLogo from "../../assets/logos/chamber_logo.webp";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";

const trustItems = [
  "Winter Haven Chamber Member",
  "Direct Primary Care",
  "Private men's healthcare",
  "Serving Central Florida",
];

function TrustSection() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Card
          variant="light"
          className="rounded-[3rem] p-8 md:p-14"
        >
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Community Trusted"
                title="Proud to serve men throughout Winter Haven and Central Florida."
                text="Ultimate Health Men is built on personal relationships, local trust, and healthcare that helps men feel supported at every stage of life."
              />

              <div className="mt-10 grid gap-4">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-[var(--uhm-green-dark)]"
                    />

                    <span className="text-[var(--uhm-green-dark)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="glass-surface soft-shadow rounded-[2.5rem] p-10">
                <img
                  src={chamberLogo}
                  alt="Winter Haven Chamber of Commerce"
                  className="mx-auto w-80 transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default TrustSection;