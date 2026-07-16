import SEO from "../components/seo/SEO";
import { SITE_NAME, SITE_URL } from "../config/site";
import { siteInfo } from "../data/siteInfo";

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title={`Privacy Policy | ${SITE_NAME}`}
        description={`Read the ${SITE_NAME} website privacy policy, including how website inquiry and communication information is collected and used.`}
        canonical={`${SITE_URL}/privacy-policy`}
      />

      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <section className="px-6 pb-14 pt-20 sm:pb-16 sm:pt-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
              Legal
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
              Effective Date: July 15, 2026
            </p>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20">
          <article className="mx-auto max-w-4xl space-y-10 text-base leading-8 text-[var(--text-body)] sm:text-lg">
            <section>
              <p>
                Ultimate Health Men (“we,” “us,” or “our”) respects
                your privacy and is committed to protecting the
                personal information you provide through our website.
                This Privacy Policy explains the information we
                collect through the Ultimate Health Men website, how
                we use it, and the choices available to you.
              </p>
            </section>

            <PolicySection title="Information We Collect">
              <p>
                When you submit a website inquiry or contact form, we
                may collect:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Your first and last name</li>
                <li>Your email address</li>
                <li>Your telephone number</li>
                <li>The service in which you are interested</li>
                <li>Your preferred method of contact</li>
                <li>
                  The message or other information you choose to
                  provide
                </li>
                <li>Your consent to be contacted</li>
                <li>
                  The page from which the form was submitted and basic
                  browser information
                </li>
              </ul>

              <p className="mt-5 font-medium text-[#0b1f33]">
                Please do not submit medical records, diagnoses,
                medication information, Social Security numbers,
                payment information, or other sensitive medical or
                financial information through the website contact
                form.
              </p>
            </PolicySection>

            <PolicySection title="How We Use Your Information">
              <p>We may use the information you provide to:</p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Respond to your inquiry</li>
                <li>
                  Contact you about services in which you expressed
                  interest
                </li>
                <li>Help schedule consultations or appointments</li>
                <li>
                  Provide customer service and administrative support
                </li>
                <li>
                  Send communications you have requested or consented
                  to receive
                </li>
                <li>Maintain records of website inquiries</li>
                <li>
                  Protect the website from spam, misuse, or security
                  threats
                </li>
                <li>
                  Improve our website and communication process
                </li>
              </ul>

              <p className="mt-5">
                Submitting the website contact form does not establish
                a provider-patient relationship.
              </p>
            </PolicySection>

            <PolicySection title="SMS Communications">
              <p>
                When you separately consent to receive SMS messages,
                Ultimate Health Men may send appointment reminders,
                scheduling updates, service-related messages,
                promotions, or other communications consistent with
                your consent.
              </p>

              <p className="mt-4">
                Message frequency may vary. Message and data rates may
                apply. You may opt out at any time by replying{" "}
                <strong>STOP</strong>. Reply <strong>HELP</strong> for
                assistance.
              </p>

              <p className="mt-4">
                SMS consent is not a condition of receiving medical
                services. We do not sell or share telephone numbers or
                SMS opt-in information with third parties for their
                own marketing purposes.
              </p>
            </PolicySection>

            <PolicySection title="How Information Is Shared">
              <p>We do not sell your personal information.</p>

              <p className="mt-4">
                We may disclose information to service providers that
                help us operate the website and process
                communications, such as website hosting, database
                storage, email-delivery, security, and technology
                providers.
              </p>

              <p className="mt-4">
                We may also disclose information when reasonably
                necessary to comply with law, respond to legal
                process, protect safety or security, investigate
                misuse, or complete a business transaction subject to
                applicable law.
              </p>
            </PolicySection>

            <PolicySection title="Website Service Providers">
              <p>
                Information submitted through the website may be
                processed or stored using third-party technology
                providers, including:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Vercel for website hosting and operation</li>
                <li>
                  MongoDB Atlas for storing website inquiry
                  submissions
                </li>
                <li>
                  Resend for delivering inquiry notification emails
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="Data Retention">
              <p>
                We retain website inquiry information for as long as
                reasonably necessary to respond to inquiries,
                maintain appropriate business records, comply with
                legal obligations, resolve disputes, and protect our
                systems.
              </p>
            </PolicySection>

            <PolicySection title="Data Security">
              <p>
                We use reasonable administrative, technical, and
                organizational safeguards designed to protect
                personal information from unauthorized access,
                disclosure, alteration, loss, or misuse.
              </p>

              <p className="mt-4">
                No website, database, email system, or internet
                transmission can be guaranteed to be completely
                secure. Please do not submit sensitive health,
                financial, or identification information through the
                contact form.
              </p>
            </PolicySection>

            <PolicySection title="Your Choices">
              <p>
                You may choose not to submit the website contact form
                and may instead contact us by telephone or email.
              </p>

              <p className="mt-4">
                You may request correction or deletion of information
                submitted through the website, subject to applicable
                legal, regulatory, record-retention, and business
                requirements.
              </p>

              <p className="mt-4">
                To stop receiving SMS messages, reply{" "}
                <strong>STOP</strong>.
              </p>
            </PolicySection>

            <PolicySection title="Cookies and Analytics">
              <p>
                Our website may use cookies or similar technologies
                that support website operation, security,
                performance, and analytics. Browser settings may
                permit you to block or delete cookies, although doing
                so may affect website functionality.
              </p>
            </PolicySection>

            <PolicySection title="Children’s Privacy">
              <p>
                This website is not intended to collect personal
                information directly from children under 13. Please
                contact us if you believe a child has submitted
                personal information through the website.
              </p>
            </PolicySection>

            <PolicySection title="Medical Emergencies">
              <p>
                The contact form is not monitored for emergencies. Do
                not use this website to request emergency medical
                assistance or submit urgent medical concerns. Call
                911 or go to the nearest emergency department if you
                are experiencing a medical emergency.
              </p>
            </PolicySection>

            <PolicySection title="Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy periodically. When
                changes are made, we will revise the effective date
                displayed at the top of this page.
              </p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <address className="not-italic">
                <strong>{SITE_NAME}</strong>
                <br />
                {siteInfo.address.street}
                <br />
                {siteInfo.address.city}, {siteInfo.address.state}{" "}
                {siteInfo.address.zip}
                <br />
                Phone:{" "}
                <a
                  href={`tel:${siteInfo.phoneRaw}`}
                  className="font-medium text-[#12355b] underline"
                >
                  {siteInfo.phone}
                </a>
                <br />
                Email:{" "}
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="font-medium text-[#12355b] underline"
                >
                  {siteInfo.email}
                </a>
              </address>
            </PolicySection>
          </article>
        </section>
      </main>
    </>
  );
}

function PolicySection({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#0b1f33] sm:text-3xl">
        {title}
      </h2>

      <div className="mt-4">{children}</div>
    </section>
  );
}

export default PrivacyPolicy;