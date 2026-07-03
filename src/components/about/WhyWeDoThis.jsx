const pillars = [
  {
    title: "Personalized Care",
    text: "Every treatment plan is built around you. We take time to understand your goals, your lifestyle, and your health so every recommendation is tailored to your needs.",
  },
  {
    title: "Optimization",
    text: "We believe healthcare should do more than treat illness. Our focus is helping men improve energy, performance, longevity, and overall quality of life.",
  },
  {
    title: "Confidence",
    text: "When you feel your best physically and mentally, you show up stronger for your career, your family, and yourself. That's the impact we strive to make every day.",
  },
];

function WhyWeDoThis() {
  return (
    <section className="bg-[#111827] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-white/60">
            Why We Do What We Do
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Men deserve healthcare that helps them thrive.
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/75">
            At Ultimate Health Men, we believe every man deserves to feel
            strong, confident, and in control of his health. Too often, men's
            health concerns go unaddressed because of stigma, busy schedules,
            or simply not knowing where to turn.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/70">
            We're changing that by providing personalized, proactive care that
            focuses on optimization—not just treatment. Whether you're looking
            to improve hormone health, sexual wellness, weight management, or
            preventive care, we're here to help you build lasting health and
            confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 transition duration-300 hover:bg-white/10"
            >
              <div className="mb-6 h-3 w-16 rounded-full bg-[var(--brand-gold)]" />

              <h3 className="text-2xl font-semibold">{pillar.title}</h3>

              <p className="mt-5 leading-8 text-white/70">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl text-center">
          <p className="text-2xl font-medium leading-10 text-white/90">
            When you feel your best, you show up better for your career, your
            family, and your life.
          </p>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Our mission is simple: make exceptional men's healthcare
            approachable, affordable, and personalized—because you deserve
            more than just getting by.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyWeDoThis;