function ServiceProcess({ expectations }) {
  return (
    <section className="service-section">
      <div className="service-section-header">
        <p className="service-eyebrow">What to expect</p>
        <h2>A clear path from conversation to care plan.</h2>
      </div>

      <div className="service-process-list">
        {expectations.map((item, index) => (
          <div className="service-process-item" key={item}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceProcess;