import { Link, useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import SEO from "../components/seo/SEO";
import {
  SITE_URL,
  SITE_NAME,
  SERVICE_AREAS,
} from "../config/site";
import { siteInfo } from "../data/siteInfo";

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

            <Link to="/services" className="service-primary-btn">
              Back to Services
            </Link>
          </section>
        </main>
      </>
    );
  }

  const canonical = `${SITE_URL}/service/${service.slug}`;

  const seoDescription = `${service.intro} Available in Winter Haven for patients from Auburndale, Lakeland, Bartow, and surrounding Central Florida communities.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.title,
    serviceType: service.title,
    url: canonical,
    description: service.intro,

    provider: {
      "@type": "MedicalBusiness",
      "@id": `${SITE_URL}/#medicalbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: siteInfo.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteInfo.address.street,
        addressLocality: siteInfo.address.city,
        addressRegion: siteInfo.address.state,
        postalCode: siteInfo.address.zip,
        addressCountry: siteInfo.address.country,
      },
    },

    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  return (
    <>
      <SEO
        title={`${service.title} in Winter Haven, FL | ${SITE_NAME}`}
        description={seoDescription}
        canonical={canonical}
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

        <ServiceBenefits
          benefits={service.benefits}
          title={service.benefitsTitle}
          eyebrow={service.benefitsEyebrow}
        />

        <ServiceProcess expectations={service.expectations} />

        <ServiceSplitSection
          eyebrow={`Why ${SITE_NAME}`}
          title="Direct, private care built around men’s health."
          body={service.whyUHM}
          dark
        />

        <section className="service-section">
          <div className="service-section-header">
            <p className="service-eyebrow">
              Serving Central Florida
            </p>

            <h2>
              Care in Winter Haven for men across Polk County.
            </h2>

            <p>
              Ultimate Health Men welcomes patients from Winter Haven,
              Auburndale, Lakeland, Bartow, and nearby Central Florida
              communities.
            </p>
          </div>
        </section>

        <ServiceFAQ service={service} />

        <ServiceCTA service={service} />
      </main>
    </>
  );
}