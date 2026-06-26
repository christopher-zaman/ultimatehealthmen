function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary:
      "bg-[#12355b] text-white shadow-sm hover:bg-[#0b1f33] hover:shadow-lg",
    dark:
      "bg-[#0b1f33] text-white shadow-sm hover:bg-[#071827] hover:shadow-lg",
    light:
      "bg-white text-[#111827] ring-1 ring-[#d9e0e8] hover:bg-[#f8fafc] hover:shadow-md",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export default Button;