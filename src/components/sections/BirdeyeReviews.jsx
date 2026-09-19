import { useEffect, useRef, useState } from "react";

function BirdeyeReviews() {
  const iframeRef = useRef(null);
  const [widgetHeight, setWidgetHeight] = useState(400);

  useEffect(() => {
    function handleWidgetMessage(event) {
      if (event.origin !== window.location.origin) {
        return;
      }

      if (event.source !== iframeRef.current?.contentWindow) {
        return;
      }

      if (
        event.data?.type !== "birdeye-widget-height" ||
        !Number.isFinite(event.data.height)
      ) {
        return;
      }

      setWidgetHeight(
        Math.max(300, Math.ceil(event.data.height))
      );
    }

    window.addEventListener(
      "message",
      handleWidgetMessage
    );

    return () => {
      window.removeEventListener(
        "message",
        handleWidgetMessage
      );
    };
  }, []);

  return (
  <section
    aria-labelledby="patient-reviews-heading"
    className="relative overflow-hidden bg-[linear-gradient(135deg,#f4f7fb_0%,#f1f5f7_52%,#f3f8ee_100%)] py-16 sm:py-20 lg:py-24"
  >
    {/* Subtle brand-colored geometric outlines */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full border border-[#a8cf45]/20"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-16 top-28 h-64 w-64 rounded-full border border-[#12355b]/10"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-36 -left-32 h-80 w-80 rounded-full border border-[#12355b]/10"
    />

    <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#12355b]">
          Patient Reviews
        </p>

        <h2
          id="patient-reviews-heading"
          className="text-3xl font-bold tracking-tight text-[#0b1f33] sm:text-4xl lg:text-5xl"
        >
          What Our Patients Are Saying
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          Read what patients have shared about their experience
          with Ultimate Health Men.
        </p>
      </div>

      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/80 bg-white/80 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-4">
        <iframe
          ref={iframeRef}
          src="/birdeye-widget.html"
          title="Ultimate Health Men patient reviews"
          loading="lazy"
          scrolling="no"
          className="block w-full rounded-[1.5rem] border-0"
          style={{ height: `${widgetHeight}px` }}
        />
      </div>
    </div>
  </section>
);
}

export default BirdeyeReviews;