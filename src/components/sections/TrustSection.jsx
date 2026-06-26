import chamberLogo from '../../assets/logos/chamber_logo.webp';
function TrustSection() {
  return (
    <section className="bg-white px-6 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#f5f5f7] p-10 md:p-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#667085]">
              Community Trusted
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Proud to serve men throughout Winter Haven and Central Florida.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#667085]">
              Ultimate Health Men is built on personal relationships, local
              trust, and care that helps men feel supported at every stage of
              health.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold text-[#667085]">
              <img
                    src={chamberLogo}
                    alt="Winter Haven Chamber of Commerce Member"
                    className="max-h-40 w-auto object-contain"
                />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;