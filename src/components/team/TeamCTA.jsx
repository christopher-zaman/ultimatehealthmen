import ExpandingCTA from "../ui/ExpandingCTA";

function TeamCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-6 py-20 sm:py-24 lg:py-28">
      <div className="radial-glow glow-green -right-24 top-10 h-80 w-80" />
      <div className="radial-glow glow-navy -left-24 bottom-0 h-96 w-96" />

      <div className="relative mx-auto w-full max-w-7xl rounded-[2.5rem] bg-[#0b1f33] px-8 py-14 text-center text-white shadow-2xl sm:px-12 lg:px-20 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
          Take the Next Step
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          Ready to experience healthcare that puts you first?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Become a member today and build a lasting relationship with a team
          dedicated to your long-term health.
        </p>

        <div className="mt-10 flex justify-center">
          <ExpandingCTA href="https://app.elationemr.com/book/UltimateHealthDPC">
            Become a Member
          </ExpandingCTA>
        </div>
      </div>
    </section>
  );
}

export default TeamCTA;