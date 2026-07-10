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
    <section
      id="dpc"
      className="relative isolate overflow-hidden bg-[#0b1f33] px-6 py-24 text-white"
    >
      {/* subtle geometric background */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-40 right-10 h-96 w-96 rounded-full bg-white/[0.035]" />
      <div className="pointer-events-none absolute left-[42%] top-20 h-28 w-28 rotate-12 rounded-[1.75rem] border border-white/10" />
      <div className="pointer-events-none absolute bottom-24 left-[12%] h-32 w-32 rotate-12 bg-[rgba(173,202,83,0.08)] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
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