import { siteInfo } from "../../data/siteInfo";

function TreatmentCTA({ treatment }) {
  return (
    <section className="treatment-cta">
      <h2>Ready to take the next step?</h2>

      <p>
        Schedule a consultation to discuss {treatment.title} and whether it may
        be appropriate for your symptoms, goals, and treatment options.
      </p>

      <a
        href={siteInfo.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="treatment-cta-btn"
      >
        Book Consultation
      </a>
    </section>
  );
}

export default TreatmentCTA;