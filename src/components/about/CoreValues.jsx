const values = [
  {
    title: "Compassion",
    text: "We lead with kindness, empathy, and understanding in every interaction.",
  },
  {
    title: "Integrity",
    text: "Honesty and transparency guide everything we do.",
  },
  {
    title: "Access",
    text: "We believe quality healthcare should be accessible and straightforward.",
  },
  {
    title: "Empowerment",
    text: "We educate and support patients so they can take charge of their health.",
  },
  {
    title: "Excellence",
    text: "We provide high-quality care with precision and ongoing learning.",
  },
  {
    title: "Innovation",
    text: "We embrace forward-thinking solutions that improve outcomes.",
  },
  {
    title: "Community",
    text: "We invest in the local community because healthcare should strengthen the people it serves.",
  },
  {
    title: "Authenticity",
    text: "We create a safe, judgment-free space where patients can show up as themselves.",
  },
];

function CoreValues() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[var(--brand-navy)]">
            Our Core Values
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f] md:text-6xl">
            The principles behind every patient experience.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-3xl bg-[#f5f5f7] p-6">
              <p className="text-xl font-semibold text-[#111827]">
                {value.title}
              </p>

              <p className="mt-3 leading-7 text-[#667085]">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;