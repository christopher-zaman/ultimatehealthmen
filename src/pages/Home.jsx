import Hero from "../components/sections/Hero";
import WhyMenChoose from "../components/sections/WhyMenChoose";
import Treatments from "../components/sections/Treatments";
import WhyDPC from "../components/sections/WhyDPC";
import Membership from "../components/sections/Membership";
import Process from "../components/sections/Process";
import AboutAmanda from "../components/sections/AboutAmanda";
import TrustSection from "../components/sections/TrustSection";
import FAQ from "../components/sections/FAQ";
import ServiceArea from "../components/sections/ServiceArea";
import FinalCTA from "../components/sections/FinalCTA";
import AnimatedSection from "../components/ui/AnimatedSection";
import SEO from "../components/seo/SEO";
import { siteInfo } from "../data/siteInfo";
import {
  SITE_URL,
  SITE_NAME,
  SERVICE_AREAS,
} from "../config/site";

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#medicalbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: siteInfo.phoneRaw,
    email: siteInfo.email,
    image: `${SITE_URL}/amanda-banner.webp`,
    priceRange: "$$",

    address: {
      "@type": "PostalAddress",
      streetAddress: siteInfo.address.street,
      addressLocality: siteInfo.address.city,
      addressRegion: siteInfo.address.state,
      postalCode: siteInfo.address.zip,
      addressCountry: siteInfo.address.country,
    },

    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Florida",
      },
    })),

    openingHoursSpecification:
      siteInfo.openingHoursSpecification,

    medicalSpecialty: [
      "Primary Care",
      "Men's Health",
    ],

    sameAs: [],
  };

  return (
    <>
      <SEO
        title="Men’s Health Clinic in Winter Haven, FL | Ultimate Health Men"
        description="Private men’s healthcare in Winter Haven, FL, serving Auburndale, Lakeland, Bartow, and nearby Central Florida communities. Explore direct primary care, hormone optimization, weight management, sexual wellness, and preventive care."
        canonical={SITE_URL}
        structuredData={structuredData}
      />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <WhyMenChoose />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <Treatments />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <WhyDPC />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <Membership />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <Process />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <AboutAmanda />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <TrustSection />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <ServiceArea />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <FinalCTA />
      </AnimatedSection>
    </>
  );
}

export default Home;