function IconCard({
  icon: Icon,
  title,
  text,
  variant = "light",
  className = "",
  children,
}) {
  const isDark = variant === "dark";

  return (
    <article
      className={`shine-card group soft-shadow rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 ${
        isDark
          ? "bg-[#0b1f33] text-white"
          : "bg-[#eef2f6]/55 text-[#111827] ring-1 ring-white/80 backdrop-blur-xl"
      } ${className}`}
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-6">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${
              isDark
                ? "bg-white/10 text-white"
                : "bg-white/80 text-[#12355b] ring-1 ring-black/5"
            }`}
          >
            <Icon size={26} strokeWidth={1.8} />
          </div>

          {children}
        </div>

        <h3
          className={`mt-10 text-[1.25rem] font-semibold tracking-tight ${
            isDark ? "text-white" : "text-[#1d1d1f]"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-4 text-[1.25rem] leading-8 ${
            isDark ? "text-white/65" : "text-[color:var(--brand-navy)]"
          }`}
        >
          {text}
        </p>
      </div>
    </article>
  );
}

export default IconCard;