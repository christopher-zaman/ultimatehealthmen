import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { siteInfo } from "../../data/siteInfo";

function TreatmentCTA({ treatment }) {
  return (
    <section className="treatment-cta">
      <div
        className="treatment-cta-icons"
        aria-hidden="true"
      >
        <Stethoscope className="treatment-cta-icon treatment-cta-icon-left" />
        <Activity className="treatment-cta-icon treatment-cta-icon-top" />
        <ShieldCheck className="treatment-cta-icon treatment-cta-icon-right" />
        <HeartPulse className="treatment-cta-icon treatment-cta-icon-bottom" />
      </div>

      <div className="treatment-cta-content">
        <p className="treatment-cta-eyebrow">
          Personalized men&apos;s healthcare
        </p>

        <h2>Ready to take the next step?</h2>

        <p>
          Schedule a consultation to discuss {treatment.title} and whether it
          may be appropriate for your symptoms, goals, and treatment options.
        </p>

        <a
          href={siteInfo.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="treatment-cta-btn"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}

export default TreatmentCTA;