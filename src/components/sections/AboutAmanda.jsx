import amanda from "../../assets/images/best-mens-health-provider-amanda-gaskin.webp";
import RevealImage from "../ui/RevealImage";

function AboutAmanda() {
  return (
    <section id="about" className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Portrait */}
        <div className="order-2 lg:order-1">
          <div className="relative [perspective:1400px]">
            <RevealImage
              src={amanda}
              alt="Amanda Gaskin, APRN"
              from="left"
              className="relative h-[650px] overflow-hidden rounded-[2.5rem] shadow-2xl"
            />

            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/15 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur">
              <p className="text-xl font-semibold text-[#111827]">Amanda Gaskin</p>
              <p className="mt-1 text-sm text-[#667085]">APRN • Founder</p>
            </div>
          </div>
        </div>
        {/* Content */}

        <div className="order-1 lg:order-2">

          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#667085]">
            Meet Amanda
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[#1d1d1f] md:text-7xl">
            Care that puts people first.
          </h2>

          <p className="mt-10 text-xl leading-9 text-[#667085]">
            Amanda believes healthcare should be personal, accessible,
            and centered around long-term relationships—not rushed
            appointments.
          </p>

          <p className="mt-8 text-lg leading-8 text-[#667085]">
            As an experienced Advanced Practice Registered Nurse and
            founder of Ultimate Health Men, Amanda partners with men to
            improve energy, optimize health, address sensitive concerns,
            and create personalized care plans that support lasting
            wellness.
          </p>

          {/* Credentials */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl bg-[#f5f5f7] p-6">
              <p className="text-lg font-semibold">
                Advanced Practice RN
              </p>

              <p className="mt-2 text-[#667085]">
                Personalized, relationship-based healthcare.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f5f5f7] p-6">
              <p className="text-lg font-semibold">
                Founder
              </p>

              <p className="mt-2 text-[#667085]">
                Ultimate Health Men & Direct Primary Care.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f5f5f7] p-6">
              <p className="text-lg font-semibold">
                Men's Wellness
              </p>

              <p className="mt-2 text-[#667085]">
                Hormones, prevention, weight management and longevity.
              </p>
            </div>

            <div className="rounded-3xl bg-[#f5f5f7] p-6">
              <p className="text-lg font-semibold">
                Direct Access
              </p>

              <p className="mt-2 text-[#667085]">
                Longer visits and direct communication.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutAmanda;