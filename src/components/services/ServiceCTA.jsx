import {
  Activity,
  ClipboardCheck,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import { siteInfo } from "../../data/siteInfo";

function ServiceCTA({ service }) {
  return (
    <section className="service-cta">
      <div className="service-cta-icons" aria-hidden="true">
        <Stethoscope className="service-cta-icon service-cta-icon-left" />
        <Activity className="service-cta-icon service-cta-icon-top" />
        <ClipboardCheck className="service-cta-icon service-cta-icon-right" />
        <HeartPulse className="service-cta-icon service-cta-icon-bottom" />
      </div>

      <div className="service-cta-content">
        <p className="service-cta-eyebrow">
          Personalized men&apos;s healthcare
        </p>

        <h2>Ready to take the next step?</h2>

        <p>
          Schedule a consultation to discuss{" "}
          <strong>{service.title}</strong> and learn how Ultimate Health Men can
          support your goals with personalized, relationship-based care.
        </p>

        <a
          href={siteInfo.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="service-cta-btn"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}

export default ServiceCTA;