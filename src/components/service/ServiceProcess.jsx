import { Check } from "lucide-react";

function ServiceProcess({ expectations = [] }) {
  if (!expectations.length) return null;

  return (
    <section className="service-section">
      <div className="service-process-layout">
        <div className="service-process-heading">
          <p className="service-eyebrow">What to expect</p>

          <h2>A clear path from conversation to care plan.</h2>

          <p className="service-process-intro">
            Each step is designed to keep the process clear, personal, and easy
            to understand.
          </p>
        </div>

        <div className="service-process-timeline">
          <div
            className="service-process-line"
            aria-hidden="true"
          />

          {expectations.map((item, index) => {
            const isLast = index === expectations.length - 1;

            return (
              <article
                className="service-process-step"
                key={item}
              >
                <div
                  className={`service-process-marker ${
                    isLast ? "service-process-marker-complete" : ""
                  }`}
                >
                  {isLast ? (
                    <Check size={20} strokeWidth={3} />
                  ) : (
                    index + 1
                  )}
                </div>

                <div className="service-process-card">
                  <p className="service-process-label">
                    Step {index + 1}
                  </p>

                  <h3>{item}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;