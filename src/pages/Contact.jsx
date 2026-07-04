import ContactSection from "../components/sections/ContactInfo";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

const bookingUrl = "https://app.elationemr.com/book/UltimateHealthDPC";

function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    url: `${SITE_URL}/contact`,
    description:
      "Contact Ultimate Health Men in Winter Haven, FL. Call, book online, or visit our office for private, personalized men's healthcare.",
  };

  return (
    <>
      <SEO
        title={`Contact ${SITE_NAME} | Winter Haven Men's Health Clinic`}
        description="Contact Ultimate Health Men in Winter Haven, FL. Call, book online, or visit our office for private, personalized men's healthcare."
        canonical={`${SITE_URL}/contact`}
        structuredData={structuredData}
      />

      <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
              Contact
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Start the conversation about better men’s health.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
              Have a question, want to learn more, or ready to schedule? Reach
              out to {SITE_NAME} and take the next step toward direct,
              personalized care.
            </p>

            <div className="mt-8">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}

export default Contact;