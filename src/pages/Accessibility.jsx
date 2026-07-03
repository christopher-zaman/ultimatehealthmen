import { Mail, MapPin, Phone, Accessibility as AccessibilityIcon } from "lucide-react";
import { siteInfo } from "../data/siteInfo";
import SEO from "../components/seo/SEO";

function Accessibility() {
  return (

    <>
    <SEO
      title="Accessibility Statement | Ultimate Health Men"
      description="Ultimate Health Men is committed to providing an accessible website experience for all visitors, including individuals with disabilities."
      canonical="https://ultimatehealthmen.com/accessibility"
    />

    <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            Accessibility
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Accessibility Statement
          </h1>

          <p className="mt-8 text-lg leading-8 text-[var(--text-muted)]">
            Ultimate Health Men is committed to providing an accessible website
            experience for all visitors, including individuals with disabilities.
            We continually work to improve the usability and accessibility of our
            website and strive to follow the Web Content Accessibility Guidelines
            (WCAG) where practical.
          </p>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
            Our goal is to ensure that everyone can access the information,
            services, and resources available through this website regardless of
            ability or the technology they use.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-sm ring-1 ring-black/5">

          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f7]">
              <AccessibilityIcon className="h-7 w-7 text-[#12355b]" />
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Need Assistance?
              </h2>

              <p className="mt-2 text-[var(--text-muted)]">
                If you experience difficulty accessing any part of this website,
                need assistance, or require information in an alternative
                format, we're happy to help.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <Phone className="mb-4 h-6 w-6 text-[#12355b]" />
              <p className="font-semibold">Phone</p>
              <a href={siteInfo.phoneHref}>
                {siteInfo.phone}
              </a>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <Mail className="mb-4 h-6 w-6 text-[#12355b]" />
              <p className="font-semibold">Email</p>
              <a href={siteInfo.emailHref}>
                {siteInfo.email}
              </a>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-6">
              <MapPin className="mb-4 h-6 w-6 text-[#12355b]" />
              <p>
                {siteInfo.address.street}
                <br />
                {siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl bg-[#12355b] p-8 text-white">
            <h3 className="text-2xl font-semibold">
              Continuous Improvement
            </h3>

            <p className="mt-4 leading-8 text-white/80">
              We are continually working to improve the accessibility of our
              website and welcome feedback that helps us create a better
              experience for every visitor.
            </p>
          </div>

        </div>
      </section>
    </main>
    </>
  );
}

export default Accessibility;