import AboutHero from "../components/about/AboutHero";
import FounderStory from "../components/about/FounderStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import FounderNote from "../components/about/FounderNote";
import WhyWeDoThis from "../components/about/WhyWeDoThis";
import SEO from "../components/seo/SEO";

function About() {
  return (
    <>
      <SEO
        title="About Ultimate Health Men | Men's Health Clinic in Winter Haven"
        description="Learn Amanda Gaskin's story and the mission behind Ultimate Health Men, a Winter Haven clinic focused on proactive, personalized men's healthcare."
        canonical="https://ultimatehealthmen.com/about"
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