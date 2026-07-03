import TeamHero from "../components/team/TeamHero";
import TeamCard from "../components/team/TeamCard";
import TeamCTA from "../components/team/TeamCTA";
import team from "../data/team";
import SEO from "../components/seo/SEO";

function Team() {
  return (
    <>
    
    <SEO
      title="Our Team | Ultimate Health Men"
      description="Meet Amanda Gaskin, APRN, Founder and Medical Director of Ultimate Health Men in Winter Haven, FL."
      canonical="https://ultimatehealthmen.com/team"
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

      <TeamCTA />
    </>
  );
}

export default Team;