import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/ultimate-health-men-logo.svg";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f5f7]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <img
              src={logo}
              alt="Ultimate Health Men"
              className="h-16 w-auto shrink-0"
            />

            <div className="leading-none">
              <p className="text-base font-semibold tracking-tight text-[#1d1d1f]">
                Ultimate Health Men
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-label)]">
                Direct Primary Care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--text-label)] transition hover:text-[#1d1d1f]"
              >
                {link.label}
              </a>
            ))}
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

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full border border-[#d2d2d7] px-5 py-2 text-sm font-medium transition hover:bg-white lg:hidden"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-white transition-all duration-300 ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-medium transition hover:bg-[#f5f5f7]"
            >
              {link.label}
            </a>
          ))}

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