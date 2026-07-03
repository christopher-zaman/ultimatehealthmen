import amanda from "../../assets/images/best-mens-health-provider-amanda-gaskin.webp";
import RevealImage from "../ui/RevealImage";

function FounderStory() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <RevealImage
            src={amanda}
            alt="Amanda Gaskin, APRN, Founder and Medical Director of Ultimate Health Men"
            from="left"
            className="relative h-[650px] overflow-hidden rounded-[2.5rem] shadow-2xl"
          />

          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/15 via-transparent to-transparent" />

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
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[var(--brand-navy)]">
            Our Origin Story
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f] md:text-6xl">
            Built from personal experience and professional purpose.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[var(--text-body)]">
            Ultimate Health Men was born from a deep passion for bridging the
            gap in men’s healthcare — a mission shaped by both personal
            experience and professional dedication.
          </p>

          <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
            Amanda Gaskin, APRN, first founded Ultimate Health DPC in Leesburg,
            FL, with the goal of providing affordable, accessible healthcare
            that prioritizes wellness over sick care.
          </p>

          <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
            Through caring for her father, husband, and father-in-law during
            their health challenges, Amanda witnessed firsthand how often men’s
            concerns are overlooked or dismissed until they become serious.
          </p>

          <p className="mt-6 text-lg leading-8 text-[var(--text-body)]">
            That experience inspired Ultimate Health Men — a clinic where men
            can receive cutting-edge, preventive, and restorative care in a
            comfortable, discreet setting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FounderStory;