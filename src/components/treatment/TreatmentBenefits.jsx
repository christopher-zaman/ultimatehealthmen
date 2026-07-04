import { CheckCircle } from "lucide-react";

function TreatmentBenefits({ treatment }) {
  return (
    <section className="treatment-section">
      <div className="treatment-section-header">
        <p className="treatment-eyebrow">Potential benefits</p>
        <h2>Targeted support for your health goals.</h2>
      </div>

      <div className="treatment-card-grid">
        {treatment.benefits.map((benefit) => (
          <article className="treatment-card" key={benefit}>
            <CheckCircle size={22} />
            <h3>{benefit}</h3>
            <p>
              Your provider will review whether this treatment is appropriate
              based on your health history, symptoms, and goals.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TreatmentBenefits;