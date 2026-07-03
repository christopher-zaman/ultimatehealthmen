import ExpandingCTA from "../ui/ExpandingCTA";
import { siteInfo } from "../../data/siteInfo";

function FinalCTA() {
  return (
    <section id="contact" className="bg-[#0b1f33] px-6 py-28 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
          Get Started
        </p>

        <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Ready to feel like yourself again?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/65">
          Schedule a private visit with Ultimate Health Men and take the first
          step toward better energy, confidence, performance, and long-term
          wellness.
        </p>

        <div className="mt-10">
          <ExpandingCTA
            href={siteInfo.bookingUrl}
            target="_blank"
            rel="noreferrer"
            variant="light"
          >
            Book a Visit
          </ExpandingCTA>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;