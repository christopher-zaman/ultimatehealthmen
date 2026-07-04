import { Link } from "react-router-dom";
import logo from "../../assets/logos/ultimate-health-men-logo.svg";
import { siteInfo } from "../../data/siteInfo";
import SocialLinks from "../ui/SocialLinks";

function Footer() {
  return (
    <footer className="bg-[#0b1f33] px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img
            src={logo}
            alt="Ultimate Health Men"
            className="h-16 w-auto rounded-xl bg-white p-2"
          />

          <p className="mt-6 max-w-sm leading-7 text-white/55">
            Personalized men&apos;s healthcare powered by Ultimate Health Direct
            Primary Care.
          </p>
        </div>

        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-white/55">
            <a href="/services" className="transition hover:text-white">
              Services
            </a>
            <a href="/about" className="transition hover:text-white">
              About
            </a>
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