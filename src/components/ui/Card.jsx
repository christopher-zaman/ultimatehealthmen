function Card({ children, variant = "light", className = "" }) {
  const variants = {
    light: "bg-[#eef2f6]/85 text-[#111827] ring-1 ring-white/70",
    white: "glass-surface text-[#111827]",
    dark: "bg-[#0b1f33] text-white",
  };

  return (
    <div
      className={`shine-card soft-shadow rounded-[2rem] p-8 transition duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Card;