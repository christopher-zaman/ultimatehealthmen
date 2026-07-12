import { CheckCircle } from "lucide-react";

function TreatmentBenefits({ treatment }) {
  const {
    benefits = [],
    benefitsEyebrow = "Potential Benefits",
    benefitsTitle = "Targeted support for your health goals.",
  } = treatment;

  if (!benefits.length) return null;

  return (
    <section className="treatment-section">
      <div className="treatment-section-header">
        <p className="treatment-eyebrow">{benefitsEyebrow}</p>
        <h2>{benefitsTitle}</h2>
      </div>

      <div className="treatment-benefits-grid">
        {benefits.map((benefit) => (
          <article
            className="treatment-benefit-card"
            key={benefit.title}
          >
            <CheckCircle size={22} />

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TreatmentBenefits;