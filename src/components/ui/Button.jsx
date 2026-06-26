function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition";

  const variants = {
    primary: "bg-[#0071e3] text-white hover:bg-[#0066cc]",
    dark: "bg-[#1d1d1f] text-white hover:bg-black",
    light: "bg-white text-[#1d1d1f] ring-1 ring-[#d2d2d7] hover:bg-[#f9f9fb]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export default Button;