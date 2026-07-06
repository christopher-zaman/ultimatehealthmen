import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { treatments } from "../data/treatmentsData";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

function TreatmentsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Men's Health Treatments | ${SITE_NAME}`,
    url: `${SITE_URL}/treatments`,
    description:
      "Explore targeted men's health treatments including Semaglutide, Tirzepatide, TRT, PT-141, BPC-157, ALMA Duo, TriMix, IV hydration, and more.",
    mainEntity: treatments.map((treatment) => ({
      "@type": "MedicalBusiness",
      name: SITE_NAME,
      medicalSpecialty: "Physician",
      url: `${SITE_URL}/treatment/${treatment.slug}`,
      serviceType: treatment.title,
    })),
  };

  return (
    <>
      <SEO
        title={`Men's Health Treatments | ${SITE_NAME}`}
        description="Explore targeted men's health treatments including Semaglutide, Tirzepatide, TRT, PT-141, BPC-157, ALMA Duo, TriMix, IV hydration, and more."
        canonical={`${SITE_URL}/treatments`}
        structuredData={structuredData}
      />

      <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
              Treatments
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Targeted treatments designed around your goals.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
              Explore treatment options across weight management, hormone
              optimization, sexual wellness, peptide therapy, IV hydration, and
              direct primary care.
            </p>
          </div>
        </section>

        {/* Treatment Cards */}
        <section className="treatments-index-grid-section">
          <div className="treatments-index-grid">
            {treatments.map((treatment, index) => (
              <Link
                key={treatment.slug}
                to={`/treatment/${treatment.slug}`}
                className={`treatment-index-card treatment-card-variant-${
                  index % 3
                }`}
              >
                <div>
                  <p className="treatment-index-category">
                    {treatment.category}
                  </p>

                  <h2>{treatment.title}</h2>

                  <p className="treatment-index-intro">{treatment.intro}</p>

                  {treatment.price && (
                    <p className="treatment-index-price">{treatment.price}</p>
                  )}
                </div>

                <div className="treatment-index-link">
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