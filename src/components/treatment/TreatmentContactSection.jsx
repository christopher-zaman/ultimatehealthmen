import ContactForm from "../contact/ContactForm";

function TreatmentContactSection({ treatment }) {
  if (!treatment) {
    return null;
  }

  return (
    <section className="bg-white px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            Get in touch
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
            Have questions about {treatment.title}?
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-muted)]">
            Fill out the form and our team will reach out to
            discuss whether {treatment.title} may be right for
            your goals.
          </p>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Please do not include sensitive medical information
            in this form.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-8">
          <ContactForm
            defaultService={treatment.title}
            sourcePage={`/treatment/${treatment.slug}`}
          />
        </div>
      </div>
    </section>
  );
}

export default TreatmentContactSection;