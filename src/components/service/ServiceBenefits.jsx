import { CheckCircle } from "lucide-react";

function ServiceBenefits({ benefits }) {
  return (
    <section className="service-section">
      <div className="service-section-header">
        <p className="service-eyebrow">Benefits</p>
        <h2>Focused care designed around your goals.</h2>
      </div>

      <div className="service-card-grid">
        {benefits.map((benefit) => (
          <article className="service-card" key={benefit}>
            <CheckCircle size={22} />
            <h3>{benefit}</h3>
            <p>
              Designed to support a clearer, more direct care experience based
              on your goals and health needs.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceBenefits;