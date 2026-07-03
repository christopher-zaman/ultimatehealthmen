import { Link } from "react-router-dom";
import amanda from "../../assets/images/best-mens-health-provider-amanda-gaskin.webp";
import RevealImage from "../ui/RevealImage";

function AboutAmanda() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 overflow-hidden lg:order-1">
          <RevealImage
            src={amanda}
            alt="Amanda Gaskin, APRN, Founder and Medical Director of Ultimate Health Men"
            from="left"
            className="relative h-[560px] overflow-hidden rounded-[2.5rem] shadow-2xl"
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

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[var(--brand-navy)]">
            Meet Amanda
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-[#1d1d1f] md:text-7xl">
            A clinic built for men who want more from healthcare.
          </h2>

          <p className="mt-10 text-xl font-medium leading-9 text-[var(--text-body)]">
            Amanda Gaskin, APRN, founded Ultimate Health Men to create a
            discreet, proactive, and personalized healthcare experience for men
            in Winter Haven and across Central Florida.
          </p>

          <p className="mt-8 text-lg leading-8 text-[var(--text-body)]">
            Her story is rooted in both professional care and personal
            experience — helping men address the concerns that are too often
            delayed, dismissed, or left untreated.
          </p>

          <Link
            to="/about"
            className="mt-10 inline-flex rounded-full bg-[var(--brand-navy)] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Read Amanda’s Story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutAmanda;