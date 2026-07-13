import { MapPin } from "lucide-react";
import { SERVICE_AREAS } from "../../config/site";

function ServiceArea() {
  return (
    <section
      aria-labelledby="service-area-heading"
      className="relative overflow-hidden bg-[#eef2f6] px-6 py-16 sm:py-20"
    >
      <div className="radial-glow glow-green -right-32 top-10 h-72 w-72" />

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#4B6382]">
          Serving Central Florida
        </p>

        <h2
          id="service-area-heading"
          className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#12355b] sm:text-4xl lg:text-5xl"
        >
          Personalized men’s healthcare close to home.
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#334e68]">
          Ultimate Health Men is located in Winter Haven and welcomes patients
          from Auburndale, Lakeland, Bartow, and surrounding Central Florida
          communities.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="inline-flex items-center gap-2 rounded-full border border-[#12355b]/10 bg-white px-5 py-3 font-semibold text-[#12355b] shadow-sm"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;