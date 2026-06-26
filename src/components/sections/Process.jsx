const steps = [
  {
    number: "01",
    title: "Schedule a visit",
    text: "Start with a private consultation focused on your symptoms, goals, and overall health.",
  },
  {
    number: "02",
    title: "Get personalized care",
    text: "Your provider reviews labs, lifestyle, medical history, and treatment options that fit your needs.",
  },
  {
    number: "03",
    title: "Keep optimizing",
    text: "Follow-up care helps track progress, adjust treatment, and support long-term wellness.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-[#f5f5f7] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#667085]">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Simple, private, and built around you.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-[2rem] bg-white p-8">
              <p className="text-sm font-semibold text-[#12355b]">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-[#667085]">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;