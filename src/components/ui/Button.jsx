function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary:
      "bg-[#12355b] text-white shadow-sm hover:bg-[#0b1f33] hover:shadow-lg",
    dark:
      "bg-[#0b1f33] text-white shadow-sm hover:bg-[#071827] hover:shadow-lg",
    light:
      "bg-white text-[#111827] ring-1 ring-[#d9e0e8] hover:bg-[#f8fafc] hover:shadow-md",
  };

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 scale-x-0 rounded-full bg-white/15 transition-transform duration-300 ease-out group-hover:scale-x-100" />

      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </span>
    </a>
  );
}

export default Button;