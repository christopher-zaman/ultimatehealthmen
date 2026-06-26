import { MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";
import heroImage from "../../assets/images/walking.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f7f9] to-[#f5f5f7] px-6 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6e6e73]">
            Ultimate Health Men
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[#1d1d1f] sm:text-6xl lg:text-8xl">
            Feel like yourself again.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#6e6e73] sm:text-xl sm:leading-9">
            Personalized healthcare for men focused on energy, hormones, weight
            management, sexual wellness, and long-term health.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="https://app.elationemr.com/book/UltimateHealthDPC"
              target="_blank"
              rel="noreferrer"
            >
              Schedule Consultation
            </Button>

            <Button href="#services" variant="light">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0071e3] ring-1 ring-black/5">
                <ShieldCheck size={20} strokeWidth={1.8} />
              </span>
              <p className="text-sm font-medium text-[#6e6e73]">
                Chamber Member
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0071e3] ring-1 ring-black/5">
                <MapPin size={20} strokeWidth={1.8} />
              </span>
              <p className="text-sm font-medium text-[#6e6e73]">
                Winter Haven
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0071e3] ring-1 ring-black/5">
                <MessageCircle size={20} strokeWidth={1.8} />
              </span>
              <p className="text-sm font-medium text-[#6e6e73]">
                Direct Primary Care
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[520px] overflow-hidden rounded-[3rem] shadow-2xl sm:h-[620px] lg:h-[720px]">
            <img
              src={heroImage}
              alt="Confident man walking outdoors"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-7 left-5 right-5 rounded-3xl bg-white/90 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur sm:left-8 sm:right-auto sm:max-w-sm">
            <p className="text-sm font-semibold text-[#1d1d1f]">
              Private. Personal. Preventive.
            </p>
            <p className="mt-1 text-sm text-[#6e6e73]">
              Built for men who want better access to care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;