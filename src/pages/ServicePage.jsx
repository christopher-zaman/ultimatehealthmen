import { Link, useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

import ServiceHero from "../components/service/ServiceHero";
import ServiceSplitSection from "../components/service/ServiceSplitSection";
import ServiceListSection from "../components/service/ServiceListSection";
import ServiceBenefits from "../components/service/ServiceBenefits";
import ServiceProcess from "../components/service/ServiceProcess";
import ServiceFAQ from "../components/service/ServiceFAQ";
import ServiceCTA from "../components/service/ServiceCTA";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  const structuredData = service
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: SITE_NAME,
        medicalSpecialty:
          service.slug === "direct-primary-care" ? "PrimaryCare" : "Physician",
        url: `${SITE_URL}/service/${service.slug}`,
        serviceType: service.title,
      }
    : null;

  if (!service) {
    return (
      <>
        <SEO
          title={`Service Not Found | ${SITE_NAME}`}
          description="The requested service could not be found."
          canonical={`${SITE_URL}/services`}
        />

        <main className="service-page">
          <section className="service-hero">
            <p className="service-eyebrow">Service not found</p>
            <h1>This service page does not exist.</h1>
            <Link to="/" className="service-primary-btn">
              Back to Home
            </Link>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${service.title} | ${SITE_NAME}`}
        description={service.intro}
        canonical={`${SITE_URL}/service/${service.slug}`}
        structuredData={structuredData}
      />

      <main className="service-page">
        <ServiceHero service={service} />

        <ServiceSplitSection
          eyebrow="The problem"
          title="Men’s healthcare should feel easier to start."
          body={service.problem}
        />

        <ServiceListSection
          eyebrow="When to consider this"
          title="This service may be right for you if..."
          items={service.symptoms}
        />

        <ServiceBenefits benefits={service.benefits} />

        <ServiceProcess expectations={service.expectations} />

        <ServiceSplitSection
          eyebrow={`Why ${SITE_NAME}`}
          title="Direct, private care built around men’s health."
          body={service.whyUHM}
          dark
        />

        <ServiceFAQ service={service} />

        <ServiceCTA />
      </main>
    </>
  );
}