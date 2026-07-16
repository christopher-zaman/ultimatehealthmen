import ContactSection from "../components/sections/ContactInfo";
import ExpandingCTA from "../components/ui/ExpandingCTA";
import ExpandingCallCTA from "../components/ui/ExpandingCallCTA";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";
import { siteInfo } from "../data/siteInfo";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  name: `Contact ${SITE_NAME}`,
  url: `${SITE_URL}/contact`,
  description:
    "Contact Ultimate Health Men in Winter Haven, FL. We welcome patients from Auburndale, Lakeland, Bartow, and surrounding Central Florida communities.",

  about: {
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#medicalbusiness`,
    name: SITE_NAME,
    telephone: siteInfo.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteInfo.address.street,
      addressLocality: siteInfo.address.city,
      addressRegion: siteInfo.address.state,
      postalCode: siteInfo.address.zip,
      addressCountry: siteInfo.address.country,
    },
  },
};

  const expectations = [
    "Private, judgment-free conversations",
    "Personalized guidance from our care team",
    "Convenient scheduling and direct access",
    "Care available by appointment",
  ];

  return (
    <>
      <SEO
          title={`Contact ${SITE_NAME} | Winter Haven, FL`}
          description="Contact Ultimate Health Men in Winter Haven, FL. We welcome patients from Auburndale, Lakeland, Bartow, and surrounding Central Florida communities."
          canonical={`${SITE_URL}/contact`}
          structuredData={structuredData}
        />

      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-20">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
                Contact
              </p>

              <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Visit our men’s health clinic in Winter Haven.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
                Reach out to {SITE_NAME} for private, personalized care in Winter
                Haven. We also welcome patients from Auburndale, Lakeland, Bartow,
                and surrounding Central Florida communities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ExpandingCTA
                  href={siteInfo.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  delay={0}
                >
                  Book Consultation
                </ExpandingCTA>

                <ExpandingCallCTA delay={0.1} variant="light" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#12355b]">
                What to expect
              </p>

              <div className="mt-5 space-y-4">
                {expectations.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#12355b]" />

                    <p className="text-lg leading-6 text-[var(--text-body)] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
                </section>

        <ContactSection />

        <section className="bg-white px-6 py-16 sm:py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
                Send an inquiry
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#1d1d1f] sm:text-4xl">
                Tell us how we can help.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                Complete the form and a member of the Ultimate Health Men team
                will follow up with you.
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-[#f5f5f7] p-6 shadow-sm sm:p-10">
              <ContactForm sourcePage="/contact" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;