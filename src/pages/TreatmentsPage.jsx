import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { treatments } from "../data/treatmentsData";
import SEO from "../components/seo/SEO";

function TreatmentsPage() {
  return (
    <>
    <SEO
      title="Men's Health Treatments | Ultimate Health Men"
      description="Explore targeted men's health treatments including Semaglutide, Tirzepatide, TRT, PT-141, BPC-157, ALMA Duo, TriMix, IV hydration, and more."
      canonical="https://ultimatehealthmen.com/treatments"
    />

    <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
          Treatments
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Targeted treatments for men who want to feel better, perform better,
          and stay ahead of their health.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
          Explore treatment options across weight management, hormone
          optimization, sexual wellness, peptide therapy, IV hydration, and
          direct primary care.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              to={`/treatment/${treatment.slug}`}
              className="group flex min-h-[280px] flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-label)]">
                  {treatment.category}
                </p>

                <h2 className="text-2xl font-semibold tracking-tight">
                  {treatment.title}
                </h2>

                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  {treatment.intro}
                </p>

                {treatment.price && (
                  <p className="mt-5 inline-flex rounded-full bg-[#f5f5f7] px-4 py-2 text-sm font-semibold text-[#1d1d1f]">
                    {treatment.price}
                  </p>
                )}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}

export default TreatmentsPage;