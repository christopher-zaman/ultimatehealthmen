import { MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";
import heroImage from "../../assets/images/walking.webp";
import RevealImage from "../ui/RevealImage";
import MouseParallax from "../ui/MouseParallax";
import ExpandingCTA from "../ui/ExpandingCTA";
import { siteInfo } from "../../data/siteInfo";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f9] to-[#f5f5f7] px-6 pb-16 pt-10 sm:py-20 lg:py-32">
      <div className="radial-glow glow-green -right-24 top-20 h-80 w-80" />
      <div className="radial-glow glow-navy bottom-10 right-40 h-96 w-96" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 overflow-hidden lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--brand-navy)]/80">
            Better health. Stronger you. Better life.
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-[-0.07em] text-[#1d1d1f] sm:text-6xl lg:text-8xl">
            Feel like{" "}
            <span className="hero-metal">yourself</span>{" "}
            again.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--brand-navy)] sm:text-xl sm:leading-9">
            Personalized men's healthcare focused on hormone optimization, sexual wellness, weight management, longevity, and preventive care.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ExpandingCTA
              href={siteInfo.bookingUrl}
              target="_blank"
              rel="noreferrer"
              delay={0.35}
            >
              Schedule Consultation
            </ExpandingCTA>

            <Button href="services" variant="light">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, text: "Chamber Member" },
              { icon: MapPin, text: "Winter Haven" },
              { icon: MessageCircle, text: "Direct Primary Care" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#12355b] ring-1 ring-black/5">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <p className="text-sm font-medium text-[var(--uhm-green-dark)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative [perspective:1400px]">
          <MouseParallax strength={10}>
            <RevealImage
              src={heroImage}
              alt="Confident man walking outdoors"
              from="right"
              className="relative h-[520px] overflow-hidden rounded-[3rem] shadow-2xl sm:h-[620px] lg:h-[720px]"
            />
          </MouseParallax>
        </div>
      </div>
      
    </section>
  );
}

export default Hero;