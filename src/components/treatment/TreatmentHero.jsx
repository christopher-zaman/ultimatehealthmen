import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ExpandingCTA from "../ui/ExpandingCTA";

function TreatmentHero({ treatment }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f9] to-[#f5f5f7] px-6 py-16 sm:py-20 lg:py-28">
      <div className="radial-glow glow-green -right-24 top-20 h-80 w-80" />
      <div className="radial-glow glow-navy right-40 bottom-10 h-96 w-96" />

      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <Link
          to="/treatments"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-navy-light)] transition hover:text-[color:var(--brand-navy)]"
        >
          <ArrowLeft size={16} />
          Back to Treatments
        </Link>

        <div className="mt-12 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-navy)]/80">
            {treatment.eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.07em] text-[#1d1d1f] sm:text-6xl lg:text-7xl">
            {treatment.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[color:var(--brand-navy)] sm:text-xl sm:leading-9">
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
      </div>
    </section>
  );
}

export default TreatmentHero;