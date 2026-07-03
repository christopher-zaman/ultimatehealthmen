import Hero from "../components/sections/Hero";
import WhyMenChoose from "../components/sections/WhyMenChoose";
import Treatments from "../components/sections/Treatments";
import WhyDPC from "../components/sections/WhyDPC";
import Membership from "../components/sections/Membership";
import Process from "../components/sections/Process";
import AboutAmanda from "../components/sections/AboutAmanda";
import TrustSection from "../components/sections/TrustSection";
import FAQ from "../components/sections/FAQ";
import FinalCTA from "../components/sections/FinalCTA";
import AnimatedSection from "../components/ui/AnimatedSection";
import SEO from "../components/seo/SEO";
import { siteInfo } from "../data/siteInfo";

function Home() {
  return (
    <>
      <SEO
        title="Ultimate Health Men | Men's Health Clinic in Winter Haven"
        description="Private men's healthcare in Winter Haven specializing in Direct Primary Care, hormone optimization, weight management, erectile dysfunction treatment, peptide therapy, and preventive care."
        canonical="https://ultimatehealthmen.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Ultimate Health Men",
          image: "https://ultimatehealthmen.vercel.app/amanda-banner.webp",
          telephone: "+1-352-901-6582",
          url: "https://ultimatehealthmen.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: siteInfo.address.street,
            addressLocality: siteInfo.address.city,
            addressRegion: siteInfo.address.state,
            postalCode: siteInfo.address.zip,
            addressCountry: siteInfo.address.country,
          },
          areaServed: ["Winter Haven", "Central Florida"],
          openingHours: "By appointment",
          medicalSpecialty: ["Primary Care", "Men's Health"],
        }}
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
        <FAQ />
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <FinalCTA />
      </AnimatedSection>
    </>
  );
}

export default Home;