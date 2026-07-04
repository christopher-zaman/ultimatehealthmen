function ServiceSplitSection({ eyebrow, title, body, dark = false }) {
  return (
    <section className={`service-split ${dark ? "service-split-dark" : ""}`}>
      <div>
        <p className="service-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <p>{body}</p>
    </section>
  );
}

export default ServiceSplitSection;