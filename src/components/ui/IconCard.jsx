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
      className={`group rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark ? "bg-[#0b0f19] text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-6">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            isDark
              ? "bg-white/10 text-white"
              : "bg-white text-[#0071e3] ring-1 ring-black/5"
          }`}
        >
          <Icon size={26} strokeWidth={1.8} />
        </div>

        {children}
      </div>

      <h3 className="mt-10 text-2xl font-semibold tracking-tight">{title}</h3>

      <p
        className={`mt-4 leading-7 ${
          isDark ? "text-white/65" : "text-[#6e6e73]"
        }`}
      >
        {text}
      </p>
    </article>
  );
}

export default IconCard;