import AboutHero from "../components/about/AboutHero";
import FounderStory from "../components/about/FounderStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import FounderNote from "../components/about/FounderNote";
import WhyWeDoThis from "../components/about/WhyWeDoThis";

function About() {
  return (
    <main>
      <AboutHero />
      <FounderStory />
      <WhyWeDoThis />
      <MissionVision />
      <CoreValues />
      <FounderNote />
    </main>
  );
}

export default About;