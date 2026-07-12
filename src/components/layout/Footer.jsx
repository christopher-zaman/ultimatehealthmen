import { Link } from "react-router-dom";
import logo from "../../assets/logos/ultimate-health-men-logo.svg";
import { siteInfo } from "../../data/siteInfo";
import SocialLinks from "../ui/SocialLinks";

function Footer() {
  return (
    <footer className="bg-[#0b1f33] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.45fr_0.7fr_0.85fr]">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-4 transition hover:opacity-80"
          >
            <img
              src={logo}
              alt="Ultimate Health Men"
              className="h-16 w-auto shrink-0 rounded-xl bg-white p-2"
            />

            <div className="leading-none">
              <p className="text-xl font-semibold tracking-tight text-white">
                Ultimate Health Men
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Direct Primary Care
              </p>
            </div>
          </Link>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
              Hours
            </p>

            <ul className="mt-3 space-y-2 text-white/65">
              <li>Monday – Wednesday: 8:30 AM – 5:00 PM</li>
              <li>Thursday: 8:30 AM – 6:00 PM</li>
              <li>Friday: 8:30 AM – 12:00 PM</li>
              <li>Saturday: 8:30 AM – 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="font-semibold">Explore</p>

          <div className="mt-4 flex flex-col gap-3 text-white/55">
            <Link to="/services" className="transition hover:text-white">
              Services
            </Link>
            <Link to="/about" className="transition hover:text-white">
              About
            </Link>
            <a href="/#faq" className="transition hover:text-white">
              FAQ
            </a>
            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>

          <div className="mt-4 flex flex-col gap-3 text-white/55">
            <a href={siteInfo.phoneHref} className="transition hover:text-white">
              352-901-6582
            </a>
            <span>Winter Haven, FL</span>
            <span>By appointment</span>
          </div>

          <div className="mt-8">
            <SocialLinks title="Follow Ultimate Health Men" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Ultimate Health Men.</p>
        <p>Powered by Ultimate Health Direct Primary Care.</p>
      </div>
    </footer>
  );
}

export default Footer;