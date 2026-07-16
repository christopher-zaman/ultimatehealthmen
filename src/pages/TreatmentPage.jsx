import { Link, useParams } from "react-router-dom";
import { treatments } from "../data/treatmentsData";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

import TreatmentHero from "../components/treatment/TreatmentHero";
import TreatmentOverview from "../components/treatment/TreatmentOverview";
import TreatmentBenefits from "../components/treatment/TreatmentBenefits";
import TreatmentExpectations from "../components/treatment/TreatmentExpectations";
import TreatmentCTA from "../components/treatment/TreatmentCTA";
import TreatmentContactSection from "../components/treatment/TreatmentContactSection";

function TreatmentPage() {
  const { slug } = useParams();
  const treatment = treatments.find((item) => item.slug === slug);

  const structuredData = treatment
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: SITE_NAME,
        medicalSpecialty: "Physician",
        url: `${SITE_URL}/treatment/${treatment.slug}`,
        serviceType: treatment.title,
      }
    : null;

  if (!treatment) {
    return (
      <>
        <SEO
          title={`Treatment Not Found | ${SITE_NAME}`}
          description="The requested treatment could not be found."
          canonical={`${SITE_URL}/treatments`}
        />

        <main className="treatment-page">
          <section className="treatment-hero">
            <p className="treatment-eyebrow">Treatment not found</p>
            <h1>This treatment page does not exist.</h1>

            <Link to="/treatments" className="treatment-primary-btn">
              Back to Treatments
            </Link>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${treatment.title} | ${SITE_NAME}`}
        description={treatment.intro}
        canonical={`${SITE_URL}/treatment/${treatment.slug}`}
        structuredData={structuredData}
      />

      <main className="treatment-page">
        <TreatmentHero treatment={treatment} />
        <TreatmentOverview treatment={treatment} />
        <TreatmentBenefits treatment={treatment} />
        <TreatmentExpectations />
        <TreatmentCTA treatment={treatment} />
        <TreatmentContactSection treatment={treatment} />
      </main>
    </>
  );
}

export default TreatmentPage;