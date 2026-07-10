import amanda from "../../assets/images/best-mens-health-provider-amanda-gaskin.webp";
import RevealImage from "../ui/RevealImage";

function FounderStory() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <RevealImage
            src={amanda}
            alt="Amanda Gaskin, APRN, Founder and Medical Director of Ultimate Health Men"
            from="left"
            className="relative h-[950px] overflow-hidden rounded-[2.5rem] shadow-2xl"
          />

          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur">
            <p className="text-xl font-semibold text-[#111827]">
              Amanda Gaskin, APRN
            </p>

            <p className="mt-1 text-sm text-[var(--text-label)]">
              Founder & Medical Director
            </p>
          </div>
        </div>

        <div>

          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[var(--brand-navy)] md:text-6xl">
            Our Origin Story
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[var(--text-body)]">
            <p className="text-xl leading-9 text-[#374151]">
              Ultimate Health Men was not born in a boardroom. It grew from
              Amanda’s experience caring for her father, her husband, and her
              father-in-law as they faced their own health challenges.
            </p>

            <p>
              During those years, she saw something she could not ignore. Men’s
              concerns were too often overlooked, dismissed, or left
              unaddressed until they became more serious. She saw the
              frustration that created, the lack of proactive support, and the
              effect it had not only on the men receiving care, but also on the
              families who loved them.
            </p>

            <blockquote className="border-l-4 border-[var(--brand-navy)] pl-6 text-2xl font-medium leading-10 tracking-[-0.02em] text-[#1d1d1f]">
              “I knew men deserved a place where they could speak openly, be
              taken seriously, and receive care before a concern became a
              crisis.”
            </blockquote>

            <p>
              She brought that mission back to her hometown of Winter Haven and
              created Ultimate Health Men—a comfortable, discreet clinic where
              men can receive preventive, restorative, and personalized care
              without judgment.
            </p>

            <p>
              Today, the practice helps men address hormone health, sexual
              wellness, weight management, primary care, and long-term
              performance with a focus on helping each patient feel stronger,
              more confident, and more in control of his health.
            </p>

            <p className="font-semibold text-[#111827]">
              This is more than a clinic. It is Amanda’s commitment to changing
              how men experience healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderStory;