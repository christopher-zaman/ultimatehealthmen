import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ExpandingCTA from "../ui/ExpandingCTA";
import RevealImage from "../ui/RevealImage";
import MouseParallax from "../ui/MouseParallax";

function ServiceHero({ service }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f9] to-[#f5f5f7] px-6 py-16 sm:py-20 lg:py-28">
      <div className="radial-glow glow-green -right-24 top-20 h-80 w-80" />
      <div className="radial-glow glow-navy right-40 bottom-10 h-96 w-96" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-navy-light)] transition hover:text-[color:var(--brand-navy)]"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          {service.eyebrow && (
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-navy)]/80">
              {service.eyebrow}
            </p>
          )}

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.07em] text-[#1d1d1f] sm:text-6xl lg:text-7xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--brand-navy)] sm:text-xl sm:leading-9">
            {service.intro}
          </p>

          <div className="mt-10">
            <ExpandingCTA href="/contact">
              {service.cta || "Book Consultation"}
            </ExpandingCTA>
          </div>
        </div>

        {service.image && (
          <div className="relative [perspective:1400px]">
            <MouseParallax strength={8}>
              <RevealImage
                src={service.image}
                alt={
                  service.imageAlt ||
                  `${service.title} at Ultimate Health Men`
                }
                from="right"
                className="relative h-[420px] w-full overflow-hidden rounded-[3rem] shadow-2xl sm:h-[520px] lg:h-[620px]"
                style={{
                  borderRadius: "38% 62% 56% 44% / 42% 36% 64% 58%",
                }}
              />
            </MouseParallax>
          </div>
        )}
      </div>
    </section>
  );
}

export default ServiceHero;