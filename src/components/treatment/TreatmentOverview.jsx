function TreatmentOverview({ treatment }) {
  return (
    <section className="treatment-split">
      <div>
        <p className="treatment-eyebrow">Is this right for you?</p>
        <h2>Personalized care, not one-size-fits-all treatment.</h2>
      </div>

      <div>
        <p>
          Your provider will review your goals, health history, symptoms, and
          treatment options to determine whether this treatment is appropriate
          for your needs.
        </p>

        {treatment.price && (
          <span className="treatment-price">{treatment.price}</span>
        )}
      </div>
    </section>
  );
}

export default TreatmentOverview;