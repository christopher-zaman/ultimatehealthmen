import { CheckCircle } from "lucide-react";

function ServiceListSection({ eyebrow, title, items }) {
  return (
    <section className="service-section">
      <div className="service-section-header">
        <p className="service-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="service-list-grid">
        {items.map((item) => (
          <div className="service-list-card" key={item}>
            <CheckCircle size={20} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceListSection;