function Badge({ children, variant = "light", className = "" }) {
  const variants = {
    light: "bg-white text-[#6e6e73] ring-1 ring-black/5",
    dark: "bg-white/10 text-white/80",
    blue: "bg-[#0071e3]/10 text-[#0071e3]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;