function SectionHeading({ eyebrow, title, text, centered = false, className = "" }) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#667085]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-[#1d1d1f] sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h2>

      {text && <p className="mt-6 text-lg leading-8 text-[#667085]">{text}</p>}
    </div>
  );
}

export default SectionHeading;