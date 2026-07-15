import { Clock, LockKeyhole, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

import ExpandingCTA from "../ui/ExpandingCTA";
import ExpandingCallCTA from "../ui/ExpandingCallCTA";
import RevealCard from "../ui/RevealCard";
import { siteInfo } from "../../data/siteInfo";

const contactItems = [
  {
    label: "Phone",
    icon: Phone,
    content: siteInfo.phone,
    href: siteInfo.phoneHref,
  },
  {
    label: "Office",
    icon: MapPin,
    content: (
      <>
        {siteInfo.address.street}
        <br />
        {siteInfo.address.city}, {siteInfo.address.state}{" "}
        {siteInfo.address.zip}
      </>
    ),
    href: siteInfo.googleMapsUrl,
    external: true,
  },
  {
    label: "Email",
    icon: Mail,
    content: siteInfo.email,
    href: siteInfo.emailHref,
  },
  {
    label: "Hours",
    icon: Clock,
    content: "By appointment",
  },
];

function ContactInfo() {
  return (
    <section className="bg-white px-6 pb-10 pt-8">
      <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
        <div className="relative overflow-hidden rounded-[3rem] bg-[#f5f7fa] p-7 ring-1 ring-black/5 sm:p-10 lg:p-12">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full border-[36px] border-white/70"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[#12355b]/[0.04]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 top-10 grid grid-cols-4 gap-2 opacity-30"
          >
            {Array.from({ length: 16 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[#12355b]"
              />
            ))}
          </div>

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand-navy)]">
              Visit or Call
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-[-0.04em] text-[#1d1d1f] sm:text-5xl">
              We’re here when you’re ready.
            </h2>

            <p className="mt-5 max-w-md text-lg leading-8 text-[var(--text-body)]">
              Reach out privately, ask a question, or schedule your first visit
              with our Winter Haven team.
            </p>

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
              {contactItems.map(
                (
                  { label, icon: Icon, content, href, external },
                  index
                ) => (
                  <RevealCard key={label} delay={index * 0.08}>
                    <div
                      className={`group flex gap-4 p-5 sm:p-6 ${
                        index !== contactItems.length - 1
                          ? "border-b border-black/[0.06]"
                          : ""
                      }`}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf3f8] text-[#12355b] transition duration-300 group-hover:bg-[#12355b] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.9} />
                      </div>

                      <div className="min-w-0 pt-0.5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-label)]">
                          {label}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noreferrer" : undefined}
                            className={`mt-1.5 block leading-7 transition hover:text-[#12355b] ${
                              label === "Phone"
                                ? "text-xl font-semibold tracking-tight text-[#111827]"
                                : "break-words text-[var(--text-body)]"
                            }`}
                          >
                            {content}
                          </a>
                        ) : (
                          <p className="mt-1.5 leading-7 text-[var(--text-body)]">
                            {content}
                          </p>
                        )}
                      </div>
                    </div>
                  </RevealCard>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ExpandingCTA
                href={siteInfo.bookingUrl}
                target="_blank"
                rel="noreferrer"
                delay={0.25}
              >
                Book a Visit
              </ExpandingCTA>

              <ExpandingCallCTA delay={0.35} variant="light" />
            </div>

            <div className="mt-6 flex max-w-md items-start gap-3 text-sm leading-6 text-[var(--text-label)]">
              <LockKeyhole
                size={18}
                className="mt-0.5 shrink-0 text-[#12355b]"
              />

              <p>
                Your questions and health concerns are handled with discretion,
                respect, and privacy.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            rotateY: -35,
            rotateX: 6,
            scale: 0.94,
            x: 90,
          }}
          whileInView={{
            opacity: 1,
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-[600px] overflow-hidden rounded-[3rem] bg-[#eef2f6] shadow-sm ring-1 ring-black/5 [perspective:1400px]"
        >
          <iframe
            title="Ultimate Health Men map"
            src={siteInfo.googleMapsEmbedUrl}
            className="h-full min-h-[600px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactInfo;