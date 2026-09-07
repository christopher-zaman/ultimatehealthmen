import { Link } from "react-router-dom";
import {
  Activity,
  CheckCircle2,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import SEO from "../components/seo/SEO";
import { SITE_NAME, SITE_URL } from "../config/site";
import { siteInfo } from "../data/siteInfo";

const PAGE_PATH = "/mens-hormone-testing-winter-haven";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const BOOKING_URL =
  "https://app.elationemr.com/book/UltimateHealthDPC/service-locations/1283934613995767?appointment_types=598882342010985";

const symptoms = [
  "Persistent fatigue or low energy",
  "Decreased sex drive",
  "Changes in erectile function",
  "Loss of muscle mass or strength",
  "Increased body fat",
  "Difficulty losing weight",
  "Changes in mood",
  "Irritability",
  "Reduced motivation",
  "Difficulty concentrating",
  "Changes in sleep",
  "Reduced exercise performance or recovery",
];

const possibleFactors = [
  "Testosterone and other hormones",
  "Diabetes or prediabetes",
  "Insulin resistance and metabolic health",
  "High cholesterol",
  "High blood pressure",
  "Thyroid function",
  "Obesity",
  "Sleep problems, including possible sleep apnea",
  "Medication-related issues",
  "Lifestyle factors",
  "Other underlying medical conditions",
];

const healthNumbers = [
  "Blood pressure",
  "Blood sugar and diabetes risk",
  "Cholesterol",
  "Weight and waist circumference",
  "Hormonal health",
  "Sexual health",
  "Sleep",
  "Cardiovascular risk",
  "Preventive screenings appropriate for your age and individual risk",
];

const faqs = [
  {
    question: "Where can I get my testosterone checked in Winter Haven?",
    answer:
      "Ultimate Health Men offers men’s hormone testing and comprehensive men’s health evaluations at our Winter Haven location. Our evaluation combines laboratory testing with a medical consultation so your results can be interpreted in the context of your symptoms and overall health.",
  },
  {
    question: "How do I know if my testosterone is low?",
    answer:
      "Symptoms alone cannot diagnose testosterone deficiency. Appropriate laboratory testing combined with symptoms and a clinical evaluation is necessary to determine whether low testosterone may be contributing to how you feel.",
  },
  {
    question: "Can low testosterone make me tired?",
    answer:
      "Low testosterone can be associated with fatigue and decreased energy in some men. However, fatigue has many possible causes, which is why our evaluation looks beyond testosterone alone.",
  },
  {
    question: "Can low testosterone cause belly fat or weight gain?",
    answer:
      "Changes in testosterone may be associated with changes in body composition, but weight gain can have multiple causes. Hormonal, metabolic, lifestyle, medication, sleep, and other health factors may all need to be considered.",
  },
  {
    question: "Do I have to start testosterone if my level is low?",
    answer:
      "No. Testing does not obligate you to begin testosterone therapy. Treatment decisions should be individualized and based on your symptoms, medical history, laboratory results, potential risks and benefits, and personal preferences.",
  },
  {
    question: "What age should men have their hormones checked?",
    answer:
      "There is not one universal age at which every man needs testosterone testing. Men experiencing symptoms that could be associated with testosterone deficiency should discuss those symptoms with a qualified healthcare professional to determine whether testing is appropriate.",
  },
  {
    question: "Do you only treat low testosterone?",
    answer:
      "No. Ultimate Health Men provides comprehensive men’s health services. Hormonal health is one part of a much larger picture that may include primary care, metabolic health, weight management, sexual health, preventive care, and other concerns affecting men as they age.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: PAGE_URL,
    telephone: siteInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteInfo.address.street,
      addressLocality: siteInfo.address.city,
      addressRegion: siteInfo.address.state,
      postalCode: siteInfo.address.zip,
      addressCountry: siteInfo.address.country,
    },
    areaServed: [
      "Winter Haven, FL",
      "Auburndale, FL",
      "Lake Wales, FL",
      "Bartow, FL",
      "Lakeland, FL",
      "Polk County, FL",
    ],
    medicalSpecialty: "Men's Health",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

function MensHormoneTestingPage() {
  return (
    <>
      <SEO
        title={`Men’s Hormone Testing & Low Testosterone Evaluation in Winter Haven, FL | ${SITE_NAME}`}
        description="Men’s hormone testing and low testosterone evaluation in Winter Haven, FL. Understand fatigue, low energy, weight gain, libido changes, and more with a comprehensive men’s health evaluation."
        canonical={PAGE_URL}
        structuredData={structuredData}
      />

      <main className="bg-[#f5f5f7]">
        <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#94c742]">
                Men’s Hormone & Health Evaluation
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-[#0f1740] sm:text-5xl lg:text-6xl">
                Men’s Hormone Testing & Low Testosterone Evaluation in Winter
                Haven, FL
              </h1>

              <h2 className="mt-6 text-2xl font-medium text-[#1d1d1f] sm:text-3xl">
                You Don’t Feel Like Yourself. Let’s Find Out Why.
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f6368]">
                Tired all the time? Gaining weight around your stomach? Losing
                muscle? Not sleeping well? Not as interested in sex as you used
                to be? Feeling irritable, unmotivated, or simply older than you
                think you should feel?
              </p>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5f6368]">
                It may be easy to blame getting older, but these symptoms
                deserve a closer look.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center justify-center rounded-full bg-[#0f1740] px-7 py-3.5 font-semibold text-white transition hover:opacity-90"
                >
                  Book Your $175 Evaluation
                </a>

                <a
                  href={siteInfo.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-[#0f1740]/15 bg-white px-7 py-3.5 font-semibold text-[#0f1740] transition hover:bg-[#f5f5f7]"
                >
                  Call {siteInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f1740]">
                A More Complete Men’s Health Evaluation
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f6368]">
                At Ultimate Health Men in Winter Haven, Florida, we help men
                understand what is happening inside their bodies instead of
                simply guessing.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#5f6368]">
                Our Men’s Hormone & Health Evaluation is designed to look beyond
                a single testosterone number. Hormonal changes can contribute to
                symptoms in men, but fatigue, weight gain, sexual changes, and
                low energy can also overlap with other health concerns.
              </p>

              <p className="mt-4 text-lg font-medium leading-8 text-[#0f1740]">
                Our goal is simple: find out what is going on, explain it in
                plain English, and develop a personalized plan based on what we
                find.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#94c742]">
                Men’s Hormone & Health Evaluation
              </p>

              <p className="mt-3 text-5xl font-semibold text-[#0f1740]">$175</p>

              <p className="mt-4 leading-7 text-[#5f6368]">
                Your initial evaluation includes comprehensive laboratory
                testing and a private medical consultation.
              </p>

              <div className="my-6 h-px bg-[#e5e5e7]" />

              <p className="font-semibold text-[#0f1740]">
                Lab Review Visit: $40
              </p>

              <p className="mt-2 leading-7 text-[#5f6368]">
                After your laboratory results are available, you’ll return for a
                dedicated lab review visit.
              </p>

              <p className="mt-3 leading-7 text-[#5f6368]">
                During that appointment, we review your results with you,
                explain what the numbers mean, discuss what may be contributing
                to your symptoms, and develop appropriate next steps.
              </p>

              <p className="mt-4 font-medium leading-7 text-[#0f1740]">
                You are not automatically placed on testosterone simply because
                you schedule a hormone evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#94c742]">
                Symptoms
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#0f1740]">
                Could Low Testosterone Be Affecting How You Feel?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f6368]">
                Testosterone levels can decline with age, but age alone does not
                tell the whole story.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex gap-3 rounded-2xl border border-black/5 bg-[#f8f8fa] p-5"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#94c742]"
                    size={21}
                  />
                  <p className="text-[#3d4045]">{symptom}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-[#5f6368]">
              Having these symptoms does not automatically mean you have low
              testosterone.
            </p>

            <p className="mt-2 text-lg font-medium leading-8 text-[#0f1740]">
              That is exactly why testing matters.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0f1740]">
                It Might Not Be “Just Low T”
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5f6368]">
                One of the most important things to understand is that Ultimate
                Health Men is not simply a testosterone clinic.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#5f6368]">
                Several conditions can contribute to fatigue, weight gain,
                sexual dysfunction, and generally feeling poorly.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {possibleFactors.map((factor) => (
                <div
                  key={factor}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
                >
                  <Microscope
                    className="mt-0.5 shrink-0 text-[#94c742]"
                    size={21}
                  />
                  <p className="text-[#3d4045]">{factor}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-[#5f6368]">
              Depending on the individual patient, our evaluation may identify
              or prompt further evaluation for concerns involving these areas.
            </p>

            <p className="mt-4 text-lg font-medium leading-8 text-[#0f1740]">
              The objective is not simply to raise a laboratory number. The
              objective is to understand your health.
            </p>
          </div>
        </section>

        <section className="bg-[#0f1740] px-6 py-14 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b8dc73]">
                Stop Guessing
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                Start With Your Numbers.
              </h2>

              <p className="mt-3 text-lg leading-8 text-white/75">
                Schedule your Men’s Hormone & Health Evaluation and begin with
                comprehensive testing and a private medical consultation.
              </p>
            </div>

            <a
              href={BOOKING_URL}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#94c742] px-7 py-3.5 font-semibold text-[#0f1740] transition hover:opacity-90"
            >
              Book Your $175 Evaluation
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <HeartPulse className="text-[#94c742]" size={32} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0f1740]">
                What Happens If My Testosterone Is Low?
              </h2>

              <p className="mt-5 leading-8 text-[#5f6368]">
                If your symptoms, laboratory findings, medical history, and
                clinical evaluation indicate that testosterone therapy may be
                appropriate, we will discuss your options, potential benefits,
                risks, monitoring requirements, and alternatives.
              </p>

              <p className="mt-4 leading-8 text-[#5f6368]">
                Treatment is personalized.
              </p>

              <p className="mt-4 leading-8 text-[#5f6368]">
                Depending on the individual patient and clinical findings,
                treatment options may include{" "}
                <Link
                  to="/treatment/testosterone-replacement-therapy"
                  className="font-medium text-[#0f1740] underline underline-offset-4"
                >
                  testosterone replacement therapy
                </Link>
                ,{" "}
                <Link
                  to="/service/weight-management"
                  className="font-medium text-[#0f1740] underline underline-offset-4"
                >
                  weight-management treatment
                </Link>
                ,{" "}
                <Link
                  to="/treatment/direct-primary-care"
                  className="font-medium text-[#0f1740] underline underline-offset-4"
                >
                  primary care
                </Link>
                , lifestyle intervention, additional testing, or referral to
                another healthcare professional when appropriate.
              </p>

              <p className="mt-4 leading-8 text-[#5f6368]">
                We also offer ongoing men’s health and primary care services for
                patients who want a medical home focused specifically on the
                needs of men.
              </p>
            </div>

            <div>
              <Stethoscope className="text-[#94c742]" size={32} />

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0f1740]">
                What If My Testosterone Is Normal?
              </h2>

              <p className="mt-5 leading-8 text-[#5f6368]">
                That information is valuable too.
              </p>

              <p className="mt-4 leading-8 text-[#5f6368]">
                If testosterone does not appear to explain your symptoms, we
                continue looking at the bigger picture.
              </p>

              <p className="mt-4 leading-8 text-[#5f6368]">
                Feeling exhausted, gaining weight, losing strength, experiencing
                sexual changes, or simply not feeling well should not
                automatically be dismissed as “getting older.”
              </p>

              <p className="mt-4 font-medium leading-8 text-[#0f1740]">
                Sometimes the most important result of hormone testing is
                discovering that something else deserves attention.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <Activity className="text-[#94c742]" size={34} />

                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0f1740]">
                  Men Over 40: Know Your Numbers
                </h2>

                <p className="mt-5 leading-8 text-[#5f6368]">
                  You probably know the oil-change schedule for your truck
                  better than you know your own blood pressure, cholesterol,
                  blood sugar, or testosterone level.
                </p>

                <p className="mt-4 leading-8 text-[#5f6368]">
                  We would like to change that.
                </p>

                <p className="mt-4 font-medium leading-8 text-[#0f1740]">
                  You do not have to become obsessed with health. You just need
                  to know where you stand.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {healthNumbers.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <ShieldCheck
                      className="mt-0.5 shrink-0 text-[#94c742]"
                      size={21}
                    />
                    <p className="text-[#3d4045]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#94c742]">
                Frequently Asked Questions
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#0f1740]">
                Men’s Hormone Testing in Winter Haven
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-black/5 bg-[#f8f8fa] p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-[#0f1740]">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-7 text-[#5f6368]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#0f1740] px-7 py-12 text-center text-white sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b8dc73]">
              Ultimate Health Men
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Stop Guessing. Check Your Numbers.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
              If you’re tired of feeling tired, struggling with your weight,
              noticing changes in your strength, energy, sexual health, or
              simply wondering why you don’t feel like yourself anymore, start
              with information.
            </p>

            <div className="mt-7">
              <p className="text-xl font-semibold">
                Men’s Hormone & Health Evaluation: $175
              </p>
              <p className="mt-1 text-white/70">Lab Review Visit: $40</p>
            </div>

            <a
              href={BOOKING_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#94c742] px-8 py-3.5 font-semibold text-[#0f1740] transition hover:opacity-90"
            >
              Book Your Evaluation
            </a>

            <div className="mt-9 border-t border-white/10 pt-7 text-white/75">
              <p className="font-semibold text-white">{siteInfo.name}</p>

              <p className="mt-1">{siteInfo.fullAddress}</p>

              <a
                href={siteInfo.phoneHref}
                className="mt-1 inline-block transition hover:text-white"
              >
                {siteInfo.phone}
              </a>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-6">
                Serving men throughout Winter Haven, Auburndale, Lake Wales,
                Bartow, Lakeland, and surrounding Polk County communities.
              </p>
            </div>

            <p className="mt-7 font-medium text-white">
              Get tested. Understand your numbers. Make a plan.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default MensHormoneTestingPage;