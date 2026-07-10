import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  X,
} from "lucide-react";
import logo from "../../assets/logos/ultimate-health-men-logo.svg";
import { siteInfo } from "../../data/siteInfo";



const serviceLinks = [
  { label: "Direct Primary Care", href: "/service/direct-primary-care" },
  { label: "Elective IV Hydration", href: "/service/elective-iv-hydration" },
  { label: "Erectile Dysfunction Treatment", href: "/service/erectile-dysfunction-treatment" },
  { label: "Sexual Wellness", href: "/service/sexual-wellness" },
  { label: "Hormone Optimization", href: "/service/hormone-optimization" },
  { label: "Weight Management", href: "/service/weight-management" },
  { label: "Peptide Therapy", href: "/service/peptide-therapy" },
];

const treatmentLinks = [
  { label: "Semaglutide", href: "/treatment/semaglutide" },
  { label: "Tirzepatide", href: "/treatment/tirzepatide" },
  { label: "Lipotropic Fat Burner", href: "/treatment/lipotropic-fat-burner" },
  { label: "Prescription Weight Loss", href: "/treatment/prescription-weight-loss-medications" },
  { label: "Testosterone Replacement Therapy", href: "/treatment/testosterone-replacement-therapy" },
  { label: "PT-141", href: "/treatment/pt-141" },
  { label: "BPC-157", href: "/treatment/bpc-157" },
  { label: "Tesamorelin", href: "/treatment/tesamorelin" },
  { label: "Sermorelin", href: "/treatment/sermorelin" },
  { label: "Ipamorelin", href: "/treatment/ipamorelin" },
  { label: "ALMA Duo Shockwave Therapy", href: "/treatment/alma-duo-shockwave-therapy" },
  { label: "P-Shot", href: "/treatment/p-shot" },
  { label: "TriMix Injections", href: "/treatment/trimix-injections" },
  { label: "ED Prescription Medications", href: "/treatment/ed-prescription-medications" },
  { label: "IV Hydration Treatment", href: "/treatment/iv-hydration-treatment" },
];

const navLinks = [
  { type: "dropdown", title: "Services", href: "/services", items: serviceLinks },
  { type: "dropdown", title: "Treatments", href: "/treatments", items: treatmentLinks },
  { type: "link", label: "About", href: "/about" },
  { type: "link", label: "Blog", href: "/blog" },
  { type: "link", label: "FAQ", href: "/#faq" },
  { type: "link", label: "Contact", href: "/contact" },
  { type: "link", label: "Our Team", href: "/team" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobilePanel(null);
  };

  const activeDropdown = navLinks.find((link) => link.title === mobilePanel);

  return (
    <>
      <header className="sticky left-0 top-0 z-[9999] w-full border-b border-black/10 bg-[#f5f5f7] shadow-sm">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <img src={logo} alt="Ultimate Health Men" className="h-16 w-auto shrink-0" />

            <div className="leading-none">
              <p className="text-base font-semibold tracking-tight text-[#1d1d1f]">
                Ultimate Health Men
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-label)]">
                Direct Primary Care
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.type === "dropdown" ? (
                <div key={link.title} className="group relative">
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-[var(--text-label)] transition hover:text-[#1d1d1f]"
                  >
                    {link.title}
                  </Link>

                  <div className="invisible absolute left-1/2 top-full z-[10000] mt-4 max-h-[420px] w-80 -translate-x-1/2 overflow-y-auto rounded-2xl border border-black/10 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {link.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--text-label)] transition hover:bg-[#f5f5f7] hover:text-[#1d1d1f]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-[var(--text-label)] transition hover:text-[#1d1d1f]"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[var(--text-label)] transition hover:text-[#1d1d1f]"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <a
              href={siteInfo.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Book Consultation
            </a>
          </div>

          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobilePanel(null);
            }}
            className="rounded-full border border-[#d2d2d7] px-5 py-2 text-sm font-medium transition hover:bg-white lg:hidden"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {mobileOpen && (
  <div className="fixed inset-0 z-[9998] bg-white pt-[92px] lg:hidden">
    <div className="relative flex h-full flex-col overflow-hidden">
      <button
        onClick={closeMobile}
        className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2f2f7] text-[#1d1d1f] transition hover:bg-[#e5e5ea]"
        aria-label="Close menu"
      >
        <X size={21} />
      </button>

      <div
        className={`absolute inset-0 overflow-y-auto px-7 pb-28 pt-8 transition-transform duration-300 ${
          mobilePanel ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) =>
            link.type === "dropdown" ? (
              <button
                key={link.title}
                onClick={() => setMobilePanel(link.title)}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl px-4 py-4 text-left text-2xl font-semibold tracking-tight text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
              >
                <span>{link.title}</span>
                <ChevronRight size={22} />

                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#12355b] via-[#2f6f8f] to-[#adca53] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ) : link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={closeMobile}
                className="relative overflow-hidden rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="relative overflow-hidden rounded-2xl px-4 py-4 text-2xl font-semibold tracking-tight text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 overflow-y-auto px-7 pb-32 pt-8 transition-transform duration-300 ${
          mobilePanel ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {activeDropdown && (
          <>
            <div className="mb-8 flex items-center justify-between pr-16">
              <button
                onClick={() => setMobilePanel(null)}
                className="inline-flex items-center gap-2 text-base font-semibold text-[#635bff]"
              >
                <ChevronLeft size={20} />
                Back
              </button>
            </div>

            <Link
              to={activeDropdown.href}
              onClick={closeMobile}
              className="mb-8 block text-2xl font-semibold tracking-tight text-[#1d1d1f]"
            >
              {activeDropdown.title}
            </Link>

            <div className="grid gap-3">
              {activeDropdown.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMobile}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-[#f7f8fb] px-5 py-4 transition hover:bg-white hover:shadow-md"
                >
                  <span className="block text-lg font-semibold tracking-tight text-[#1d1d1f]">
                    {item.label}
                  </span>

                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#12355b] via-[#2f6f8f] to-[#adca53] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-black/10 bg-white/90 px-4 py-3 backdrop-blur-xl">
  <div className="grid grid-cols-2 gap-3 rounded-[2rem] bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.18)] ring-1 ring-black/10">
    <a
      href={siteInfo.phoneHref}
      onClick={closeMobile}
      className="inline-flex items-center justify-center gap-2 rounded-[1.5rem] bg-[#12355b] px-4 py-4 text-sm font-bold text-white"
    >
      <Phone size={18} />
      Call Now
    </a>

    <a
      href={siteInfo.bookingUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-[1.5rem] bg-[#12355b] px-4 py-4 text-sm font-bold text-white"
    >
      <ArrowRight size={18} />
      Book Visit
    </a>
  </div>
</div>
    </div>
  </div>
)}
    </>
  );
}

export default Navbar;