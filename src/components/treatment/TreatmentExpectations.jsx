function TreatmentExpectations() {
  const steps = [
    "Review your symptoms, goals, and health history",
    "Discuss whether treatment is appropriate",
    "Understand potential benefits and risks",
    "Build a care plan that fits your needs",
  ];

  return (
    <section className="treatment-section">
      <div className="treatment-section-header">
        <p className="treatment-eyebrow">What to expect</p>
        <h2>A clear process before treatment begins.</h2>
      </div>

      <div className="treatment-process-list">
        {steps.map((step, index) => (
          <div className="treatment-process-item" key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TreatmentExpectations;