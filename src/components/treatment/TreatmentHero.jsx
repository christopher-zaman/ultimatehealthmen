import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RevealImage from "../ui/RevealImage";
import ExpandingCTA from "../ui/ExpandingCTA";

function TreatmentHero({ treatment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f9] to-[#f5f5f7] px-6 pt-8 pb-20 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="radial-glow glow-green -right-24 top-20 h-80 w-80" />
      <div className="radial-glow glow-navy right-40 bottom-10 h-96 w-96" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          to="/treatments"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-navy-light)] transition hover:text-[color:var(--brand-navy)]"
        >
          <ArrowLeft size={16} />
          Back to Treatments
        </Link>

        <div className="mt-6 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div className="lg:pt-6">
            {treatment.eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-navy)]/80">
                {treatment.eyebrow}
              </p>
            )}

            <h1 className="mt-6 text-5xl font-bold tracking-[-0.07em] text-[#1d1d1f] sm:text-6xl lg:text-7xl">
              {treatment.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--brand-navy)] sm:text-xl sm:leading-9">
              {treatment.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <ExpandingCTA href="/contact">
                Book Consultation
              </ExpandingCTA>

              {treatment.relatedServiceSlug && (
                <Link
                  to={`/service/${treatment.relatedServiceSlug}`}
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#fafafa]"
                >
                  View Related Service
                </Link>
              )}
            </div>
          </div>

          {treatment.image && (
            <RevealImage
              src={treatment.image}
              alt={treatment.imageAlt || treatment.title}
              className="h-[360px] w-full rounded-[2rem] shadow-2xl sm:h-[420px] lg:h-[500px]"
              style={{
                  borderRadius: "38% 62% 56% 44% / 42% 36% 64% 58%",
                }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default TreatmentHero;