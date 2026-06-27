import { Check } from "lucide-react";
import Card from "../ui/Card";

function ServiceDetailSection({ section }) {
  return (
    <Card>
      <div className="service-detail">
        <h2>{section.title}</h2>
        <p>{section.text}</p>

        <div className="service-bullets">
          {section.bullets.map((bullet) => (
            <div className="service-bullet" key={bullet}>
              <Check size={18} />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ServiceDetailSection;