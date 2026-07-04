import AboutHero from "../components/about/AboutHero";
import FounderStory from "../components/about/FounderStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import FounderNote from "../components/about/FounderNote";
import WhyWeDoThis from "../components/about/WhyWeDoThis";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About ${SITE_NAME}`,
    url: `${SITE_URL}/about`,
    description:
      "Learn Amanda Gaskin's story and the mission behind Ultimate Health Men, a Winter Haven clinic focused on proactive, personalized men's healthcare.",
  };

  return (
    <>
      <SEO
        title="About Ultimate Health Men | Men's Health Clinic in Winter Haven"
        description="Learn Amanda Gaskin's story and the mission behind Ultimate Health Men, a Winter Haven clinic focused on proactive, personalized men's healthcare."
        canonical={`${SITE_URL}/about`}
        structuredData={structuredData}
      />

      <main>
        <AboutHero />
        <FounderStory />
        <WhyWeDoThis />
        <MissionVision />
        <CoreValues />
        <FounderNote />
      </main>
    </>
  );
}

export default About;