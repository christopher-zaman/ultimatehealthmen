function Card({ children, variant = "light", className = "" }) {
  const variants = {
    light: "bg-[#f5f5f7] text-[#1d1d1f]",
    white: "bg-white text-[#1d1d1f] ring-1 ring-black/5",
    dark: "bg-[#0b0f19] text-white",
  };

  return (
    <div
      className={`rounded-[2rem] p-8 transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;