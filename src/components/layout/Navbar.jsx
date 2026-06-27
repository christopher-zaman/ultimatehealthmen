import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/ultimate-health-men-logo.svg";

const serviceLinks = [
  { label: "Direct Primary Care", href: "/service/direct-primary-care" },
  { label: "Elective IV Hydration", href: "/service/elective-iv-hydration" },
  { label: "Erectile Dysfunction Treatment", href: "/service/erectile-dysfunction-treatment" },
  { label: "Sexual Wellness", href: "/service/sexual-wellness" },
  { label: "Hormone Optimization", href: "/service/hormone-optimization" },
  { label: "Weight Management", href: "/service/weight-management" },
  { label: "Peptide Therapy", href: "/service/peptide-therapy" },
];

const navLinks = [
  { type: "dropdown", title: "Services", items: serviceLinks },
  { type: "link", label: "About", href: "/#about" },
  { type: "link", label: "FAQ", href: "/#faq" },
  { type: "link", label: "Contact", href: "/#contact" },
  { type: "link", label: "Our Team", href: "/team" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-[9999] w-full border-b border-black/10 bg-[#f5f5f7] shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            to="/"
            onClick={() => {
              setMobileOpen(false);
              setServicesOpen(false);
            }}
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
                  <button className="text-sm font-medium text-[var(--text-label)] transition hover:text-[#1d1d1f]">
                    {link.title}
                  </button>

                  <div className="invisible absolute left-1/2 top-full z-[10000] mt-4 w-72 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
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
              href="https://app.elationemr.com/book/UltimateHealthDPC"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#1d1d1f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
            >
              Book Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-[#d2d2d7] px-5 py-2 text-sm font-medium transition hover:bg-white lg:hidden"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[900px]" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
          {navLinks.map((link) =>
            link.type === "dropdown" ? (
              <div key={link.title}>
                <p className="px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {link.title}
                </p>

                {link.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#f5f5f7]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#f5f5f7]"
              >
                {link.label}
              </a>
            )
          )}

          <a
            href="https://app.elationemr.com/book/UltimateHealthDPC"
            target="_blank"
            rel="noreferrer"
            className="mt-4 rounded-full bg-[#1d1d1f] px-6 py-3 text-center font-semibold text-white"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;