const items = [
  {
    eyebrow: "Our Mission",
    title: "We don’t just treat symptoms — we optimize lives.",
    text: "Our mission is to empower men to take control of their health and well-being through personalized, high-quality care. We address the unique health concerns of men, including hormone optimization, sexual wellness, weight management, and preventive care.",
  },
  {
    eyebrow: "Our Vision",
    title: "Modern care for men at every stage of life.",
    text: "We envision a world where every man has access to proactive care that keeps him strong, sharp, and confident. At Ultimate Health Men, we’re building a legacy of health, strength, and success — one man at a time.",
  },
];

function MissionVision() {
  return (
    <section className="bg-[#111827] px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.eyebrow}
            className="rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/10 backdrop-blur"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-white/60">
              {item.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              {item.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MissionVision;