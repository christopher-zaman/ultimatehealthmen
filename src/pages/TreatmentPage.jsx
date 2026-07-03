import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { treatments } from "../data/treatmentsData";
import SEO from "../components/seo/SEO";

const bookingUrl = "https://app.elationemr.com/book/UltimateHealthDPC";

function TreatmentPage() {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return (
      <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            Treatment not found
          </p>

          <h1 className="text-5xl font-semibold tracking-tight">
            This treatment page does not exist.
          </h1>

          <Link
            to="/treatments"
            className="mt-8 inline-flex rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-semibold text-white"
          >
            Back to Treatments
          </Link>
        </section>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${treatment.title} | Ultimate Health Men`}
        description={treatment.intro}
        canonical={`https://ultimatehealthmen.com/treatment/${treatment.slug}`}
      />
    <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          to="/treatments"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-label)] transition hover:text-[#1d1d1f]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Treatments
        </Link>

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
          {treatment.category}
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {treatment.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
          {treatment.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Book Consultation
          </a>

          <Link
            to={`/service/${treatment.serviceSlug}`}
            className="inline-flex rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#fafafa]"
          >
            View Related Service
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#1d1d1f] p-8 text-white">
            <h2 className="text-3xl font-semibold tracking-tight">
              Is this treatment right for you?
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              Your provider will review your goals, health history, symptoms,
              and treatment options to determine whether this treatment is
              appropriate for your needs.
            </p>

            {treatment.price && (
              <p className="mt-8 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1d1d1f]">
                {treatment.price}
              </p>
            )}
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-semibold tracking-tight">
              Potential Benefits
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {treatment.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-2xl bg-[#f5f5f7] p-5"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#12355b]" />
                  <p className="font-medium leading-7">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
              What to Expect
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Personalized care, not one-size-fits-all treatment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              At Ultimate Health Men, treatment recommendations are based on a
              conversation, clinical review, and your personal goals. The goal is
              to help you understand your options and move forward with a plan
              that makes sense for your health.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white sm:p-12 lg:p-16">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Ready to learn whether {treatment.title} is right for you?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Schedule a consultation and start with a private conversation about
            your symptoms, goals, and treatment options.
          </p>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
          >
            Book Consultation
          </a>
        </div>
      </section>
    </main>
    </>
  );
}

export default TreatmentPage;