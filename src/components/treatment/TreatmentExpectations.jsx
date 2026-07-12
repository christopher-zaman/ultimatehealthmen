import { Check } from "lucide-react";

function TreatmentExpectations() {
  const steps = [
    "Review your symptoms, goals, and health history",
    "Discuss whether treatment is appropriate",
    "Understand potential benefits and risks",
    "Build a care plan that fits your needs",
  ];

  return (
    <section className="treatment-section">
      <div className="treatment-process-layout">
        <div className="treatment-process-heading">
          <p className="treatment-eyebrow">What to expect</p>

          <h2>A clear process before treatment begins.</h2>

          <p className="treatment-process-intro">
            Each step is designed to help you understand your options before
            moving forward with treatment.
          </p>
        </div>

        <div className="treatment-process-timeline">
          <div
            className="treatment-process-line"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <article
                className="treatment-process-step"
                key={step}
              >
                <div
                  className={`treatment-process-marker ${
                    isLast ? "treatment-process-marker-complete" : ""
                  }`}
                >
                  {isLast ? (
                    <Check size={20} strokeWidth={3} />
                  ) : (
                    index + 1
                  )}
                </div>

                <div className="treatment-process-card">
                  <p className="treatment-process-label">
                    Step {index + 1}
                  </p>

                  <h3>{step}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TreatmentExpectations;