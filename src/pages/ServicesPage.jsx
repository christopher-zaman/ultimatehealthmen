import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { services } from "../data/servicesData";
import { siteInfo } from "../data/siteInfo";
import SEO from "../components/seo/SEO";

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
  return (

    <>
    <SEO
      title="Men's Health Services | Ultimate Health Men"
      description="Explore men's health services in Winter Haven, including Direct Primary Care, hormone optimization, weight management, sexual wellness, ED treatment, IV hydration, and peptide therapy."
      canonical="https://ultimatehealthmen.com/services"
    />

    <main className="bg-[#f5f5f7] pt-24 text-[#1d1d1f]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            Our Services
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Men’s healthcare designed around you.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
            Ultimate Health Men offers direct, personalized care for men who want
            better access, clearer answers, and a provider who takes the time to
            understand the full picture.
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
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f5f7]">
                  <Icon className="h-6 w-6 text-[#1d1d1f]" />
                </div>

                <h2 className="text-xl font-semibold">{benefit.title}</h2>

                <p className="mt-3 leading-7 text-[var(--text-muted)]">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
            What We Offer
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Care that supports the whole man.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
            From primary care to hormone optimization, sexual wellness, weight
            management, and recovery support, each service is designed to help
            men feel better, perform better, and stay ahead of their health.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/service/${service.slug}`}
              className="group flex min-h-[280px] flex-col justify-between rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-label)]">
                  {service.eyebrow}
                </p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 line-clamp-4 leading-7 text-[var(--text-muted)]">
                  {service.intro}
                </p>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1d1d1f]">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--text-label)]">
                How It Works
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                A simpler path to better care.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
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

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-[#1d1d1f] p-8 text-white sm:p-12 lg:p-16">
          <div className="max-w-3xl">
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