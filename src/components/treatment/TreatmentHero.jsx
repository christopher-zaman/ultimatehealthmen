import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { siteInfo } from "../../data/siteInfo";

function TreatmentHero({ treatment }) {
  return (
    <section className="treatment-hero">
      <Link to="/treatments" className="treatment-back-link">
        <ArrowLeft size={16} />
        Back to Treatments
      </Link>

      <p className="treatment-eyebrow">{treatment.category}</p>

      <h1>{treatment.title}</h1>

      <p className="treatment-intro">{treatment.intro}</p>

      <div className="treatment-hero-actions">
        <a
          href={siteInfo.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="treatment-primary-btn"
        >
          Book Consultation
        </a>

        <Link
          to={`/service/${treatment.serviceSlug}`}
          className="treatment-secondary-btn"
        >
          View Related Service
        </Link>
      </div>
    </section>
  );
}

export default TreatmentHero;