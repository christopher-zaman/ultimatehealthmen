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

function Home() {
  return (
    <>
      <Hero />
      <WhyMenChoose />
      <Treatments />
      <WhyDPC />
      <Membership />
      <Process />
      <AboutAmanda />
      <TrustSection />
      <FAQ />
      <ContactInfo />
      <FinalCTA />
    </>
  );
}

export default Home;