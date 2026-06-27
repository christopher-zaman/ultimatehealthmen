import TeamHero from "../components/team/TeamHero";
import TeamCard from "../components/team/TeamCard";
import TeamCTA from "../components/team/TeamCTA";
import team from "../data/team";

function Team() {
  return (
    <>
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