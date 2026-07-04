function ServiceFAQ({ service }) {
  return (
    <section className="service-section">
      <div className="service-section-header">
        <p className="service-eyebrow">FAQ</p>
        <h2>Common questions about {service.title}.</h2>
      </div>

      <div className="service-faq-list">
        {service.faqs.map((faq) => (
          <details className="service-faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default ServiceFAQ;