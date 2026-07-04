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

      <main className="treatments-index-page">
        <section className="treatments-index-hero">
          <p className="treatments-index-eyebrow">Treatments</p>

          <h1>
  Targeted treatments for men who want to feel better, perform better, and stay
  ahead of their health.
</h1>

          <p>
            Explore treatment options across weight management, hormone
            optimization, sexual wellness, peptide therapy, IV hydration, and
            direct primary care.
          </p>
        </section>

        <section className="treatments-index-grid-section">
          <div className="treatments-index-grid">
            {treatments.map((treatment, index) => (
              <Link
                key={treatment.slug}
                to={`/treatment/${treatment.slug}`}
                className={`treatment-index-card treatment-card-variant-${index % 3}`}
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