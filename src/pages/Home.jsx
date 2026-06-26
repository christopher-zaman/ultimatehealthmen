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
      <>
      <div className="reveal"><Hero /></div>
      <div className="reveal"><WhyMenChoose /></div>
      <div className="reveal"><Treatments /></div>
      <div className="reveal"><WhyDPC /></div>
      <div className="reveal"><Membership /></div>
      <div className="reveal"><Process /></div>
      <div className="reveal"><AboutAmanda /></div>
      <div className="reveal"><TrustSection /></div>
      <div className="reveal"><FAQ /></div>
      <div className="reveal"><ContactInfo /></div>
      <div className="reveal"><FinalCTA /></div>
    </>
    </>
  );
}

export default Home;