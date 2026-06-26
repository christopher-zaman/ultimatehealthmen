const benefits = [
  {
    title: "More time with your provider",
    text: "Appointments are designed for real conversations, not rushed visits.",
  },
  {
    title: "Direct access",
    text: "Get care that feels more personal, responsive, and easier to navigate.",
  },
  {
    title: "Focused on prevention",
    text: "Labs, screenings, and ongoing guidance help address concerns before they become bigger problems.",
  },
];

function WhyDPC() {
  return (
    <section id="dpc" className="bg-[#0b1f33] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/50">
            Direct Primary Care
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Healthcare that feels personal again.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Ultimate Health Men combines the access and relationship of direct
            primary care with targeted services for men&apos;s health,
            performance, prevention, and long-term wellness.
          </p>
        </div>

        <div className="grid gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-white/60">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyDPC;