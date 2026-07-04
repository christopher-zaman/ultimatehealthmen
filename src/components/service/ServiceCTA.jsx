import { Link } from "react-router-dom";

function ServiceCTA() {
  return (
    <section className="service-cta">
      <h2>Ready to take the next step?</h2>
      <p>
        Start with a private conversation and a care plan built around your
        goals.
      </p>

      <Link to="/contact" className="service-secondary-btn">
        Contact Us
      </Link>
    </section>
  );
}

export default ServiceCTA;