import { UserRound } from "lucide-react";
import Card from "../ui/Card";
import RevealCard from "../ui/RevealCard";

function TeamCard({ member, index }) {
  const reverse = index % 2 !== 0;

  return (
    <RevealCard delay={index * 0.12}>
      <Card>
        <div className={`team-card ${reverse ? "reverse" : ""}`}>
          <div className="team-image">
            {member.image ? (
              <img src={member.image} alt={member.name} />
            ) : (
              <div className="team-placeholder">
                <UserRound size={86} strokeWidth={1.4} />
              </div>
            )}
          </div>

          <div className="team-content">
            <h2>{member.name}</h2>

            <p className="team-title">{member.title}</p>

            <p className="team-bio">{member.bio}</p>
          </div>
        </div>
      </Card>
    </RevealCard>
  );
}

export default TeamCard;