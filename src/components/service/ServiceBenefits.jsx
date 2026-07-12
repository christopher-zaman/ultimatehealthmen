import { CheckCircle } from "lucide-react";

function ServiceBenefits({
  benefits = [],
  eyebrow = "Benefits",
  title = "Focused care designed around your goals.",
}) {
  if (!benefits.length) return null;

  return (
    <section className="service-section">
      <div className="service-section-header">
        <p className="service-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="service-card-grid">
        {benefits.map((benefit) => (
          <article className="service-card" key={benefit.title}>
            <CheckCircle size={22} />

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServiceBenefits;