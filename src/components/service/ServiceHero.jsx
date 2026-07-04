import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ServiceHero({ service }) {
  return (
    <section className="service-hero">
      <Link to="/services" className="service-back-link">
        <ArrowLeft size={16} />
        Back to Services
      </Link>

      <p className="service-eyebrow">{service.eyebrow}</p>
      <h1>{service.title}</h1>
      <p className="service-intro">{service.intro}</p>

      <Link to="/contact" className="service-primary-btn">
        {service.cta}
      </Link>
    </section>
  );
}

export default ServiceHero;