import TeamHero from "../components/team/TeamHero";
import TeamCard from "../components/team/TeamCard";

import team from "../data/team";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";
import ServiceCTA from "../components/service/ServiceCTA";

function Team() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `Our Team | ${SITE_NAME}`,
    url: `${SITE_URL}/team`,
    description:
      "Meet Amanda Gaskin, APRN, Founder and Medical Director of Ultimate Health Men in Winter Haven, FL.",
  };

  return (
    <>
      <SEO
        title={`Our Team | ${SITE_NAME}`}
        description="Meet Amanda Gaskin, APRN, Founder and Medical Director of Ultimate Health Men in Winter Haven, FL."
        canonical={`${SITE_URL}/team`}
        structuredData={structuredData}
      />
      <main className="team-page">
        <section className="team-section">
          <div className="team-container">
            <TeamHero />
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>
      </main>
      <ServiceCTA />
    </>
  );
}

export default Team;