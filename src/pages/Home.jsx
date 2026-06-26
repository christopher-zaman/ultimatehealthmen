import Hero from "../components/sections/Hero";
import WhyMenChoose from "../components/sections/WhyMenChoose";
import Treatments from "../components/sections/Treatments";
import WhyDPC from "../components/sections/WhyDPC";
import Membership from "../components/sections/Membership";
import Process from "../components/sections/Process";
import AboutAmanda from "../components/sections/AboutAmanda";
import TrustSection from "../components/sections/TrustSection";
import FAQ from "../components/sections/FAQ";
import ContactInfo from "../components/sections/ContactInfo";
import FinalCTA from "../components/sections/FinalCTA";
import AnimatedSection from "../components/ui/AnimatedSection";
function Home() {
  return (
    <>
      <>
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection delay={0.05}><WhyMenChoose /></AnimatedSection>
      <AnimatedSection delay={0.05}><Treatments /></AnimatedSection>
      <AnimatedSection delay={0.05}><WhyDPC /></AnimatedSection>
      <AnimatedSection delay={0.05}><Membership /></AnimatedSection>
      <AnimatedSection delay={0.05}><Process /></AnimatedSection>
      <AnimatedSection delay={0.05}><AboutAmanda /></AnimatedSection>
      <AnimatedSection delay={0.05}><TrustSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><FAQ /></AnimatedSection>
      <AnimatedSection delay={0.05}><ContactInfo /></AnimatedSection>
      <AnimatedSection delay={0.05}><FinalCTA /></AnimatedSection>
    </>
    </>
  );
}

export default Home;