import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { services } from "../data/servicesData";
import { siteInfo } from "../data/siteInfo";
import SEO from "../components/seo/SEO";
import { SITE_URL, SITE_NAME } from "../config/site";

const benefits = [
  {
    icon: Stethoscope,
    title: "Personalized men’s care",
    text: "Care designed around your goals, symptoms, lifestyle, and long-term health.",
  },
  {
    icon: ShieldCheck,
    title: "Private and direct",
    text: "Confidential conversations without judgment, rushed visits, or unnecessary friction.",
  },
  {
    icon: HeartPulse,
    title: "Built for prevention",
    text: "A proactive approach to health, performance, confidence, and longevity.",
  },
];

const steps = [
  "Schedule your consultation",
  "Review your goals and concerns",
  "Build a personalized care plan",
  "Continue with ongoing support",
];

function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Men's Health Services | ${SITE_NAME}`,
    url: `${SITE_URL}/services`,
    description:
      "Explore men's health services in Winter Haven, including Direct Primary Care, hormone optimization, weight management, sexual wellness, ED treatment, IV hydration, and peptide therapy.",
    mainEntity: services.map((service) => ({
      "@type": "MedicalBusiness",
      name: SITE_NAME,
      medicalSpecialty:
        service.slug === "direct-primary-care" ? "PrimaryCare" : "Physician",
      url: `${SITE_URL}/service/${service.slug}`,
      serviceType: service.title,
    })),
  };

  return (
    <>
      <SEO
        title={`Men's Health Services | ${SITE_NAME}`}
        description="Explore men's health services in Winter Haven, including Direct Primary Care, hormone optimization, weight management, sexual wellness, ED treatment, IV hydration, and peptide therapy."
        canonical={`${SITE_URL}/services`}
        structuredData={structuredData}
      />

      <main className="bg-[#f5f5f7] text-[#1d1d1f]">
        <section className="relative isolate overflow-hidden px-6 py-20">
          <div className="pointer-events-none absolute -right-36 top-16 h-96 w-96 rounded-full border border-[rgba(18,53,91,0.08)]" />
          <div className="pointer-events-none absolute left-[48%] bottom-10 h-28 w-28 rotate-12 rounded-[1.75rem] border border-[rgba(18,53,91,0.07)]" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--brand-navy-light)]">
                Our Services
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl lg:text-7xl">
                Men’s healthcare designed around you.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--brand-navy)] sm:text-xl">
                {SITE_NAME} offers direct, personalized care for men who want
                better access, clearer answers, and a provider who takes the
                time to understand the full picture.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteInfo.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Book Consultation
                </a>

                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#fafafa]"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="relative isolate overflow-hidden rounded-[2rem] border border-[rgba(18,53,91,0.10)] bg-white p-8 shadow-sm"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 z-0 h-32 w-32 rounded-full border border-[rgba(18,53,91,0.10)]" />

                  {index === 1 && (
                    <div className="pointer-events-none absolute bottom-6 right-8 z-0 h-16 w-16 rotate-12 rounded-2xl border border-[rgba(18,53,91,0.08)]" />
                  )}

                  {index === 2 && (
                    <div className="pointer-events-none absolute -bottom-8 right-8 z-0 h-24 w-24 rotate-12 bg-[rgba(173,202,83,0.08)] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
                  )}

                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f7]">
                      <Icon className="h-6 w-6 text-[#12355b]" />
                    </div>

                    <h2 className="text-xl font-semibold">{benefit.title}</h2>

                    <p className="mt-3 leading-7 text-[color:var(--brand-navy)]">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="services-list" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--brand-navy-light)]">
              What We Offer
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Care that supports the whole man.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[color:var(--brand-navy)]">
              From primary care to hormone optimization, sexual wellness, weight
              management, and recovery support, each service is designed to help
              men feel better, perform better, and stay ahead of their health.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/service/${service.slug}`}
                className="group relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] border border-[rgba(18,53,91,0.10)] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 z-0 h-36 w-36 rounded-full border border-[rgba(18,53,91,0.10)]" />

                {index % 3 === 1 && (
                  <div className="pointer-events-none absolute bottom-8 right-8 z-0 h-16 w-16 rotate-12 rounded-2xl border border-[rgba(18,53,91,0.08)]" />
                )}

                {index % 3 === 2 && (
                  <div className="pointer-events-none absolute -bottom-8 right-8 z-0 h-24 w-24 rotate-12 bg-[rgba(173,202,83,0.08)] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
                )}

                <div className="relative z-10">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--brand-navy-light)]">
                    {service.eyebrow}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 line-clamp-4 leading-7 text-[color:var(--brand-navy)]">
                    {service.intro}
                  </p>
                </div>

                <div className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#12355b]">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--brand-navy-light)]">
                  How It Works
                </p>

                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  A simpler path to better care.
                </h2>

                <p className="mt-5 text-lg leading-8 text-[color:var(--brand-navy)]">
                  The process is designed to be clear, direct, and focused on
                  helping you understand your options.
                </p>
              </div>

              <div className="grid gap-4">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-5 rounded-2xl border border-black/10 bg-[#f5f5f7] p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1d1d1f] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <p className="text-lg font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 right-20 h-80 w-80 rounded-full bg-white/[0.035]" />

            <div className="relative z-10 max-w-3xl">
              <CheckCircle className="mb-6 h-10 w-10" />

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to take control of your health?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/75">
                Schedule a consultation and start building a care plan designed
                around your needs, goals, and future.
              </p>

              <a
                href={siteInfo.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ServicesPage;