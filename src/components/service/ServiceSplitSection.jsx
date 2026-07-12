import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

function ServiceSplitSection({ eyebrow, title, body, dark = false }) {
  return (
    <section
      className={`service-split ${dark ? "service-split-dark" : ""}`}
    >
      <div className="service-split-icons" aria-hidden="true">
        <Stethoscope className="service-split-icon service-split-icon-left" />
        <Activity className="service-split-icon service-split-icon-top" />
        <HeartPulse className="service-split-icon service-split-icon-bottom" />
        <ShieldCheck className="service-split-icon service-split-icon-right" />
      </div>

      <div className="service-split-content">
        <div>
          <p className="service-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>

        <p>{body}</p>
      </div>
    </section>
  );
}

export default ServiceSplitSection;