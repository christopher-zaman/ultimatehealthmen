import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function ExpandingCTA({
  href,
  children,
  variant = "primary",
  delay = 0,
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-[#12355b] text-white",
    light: "bg-white text-[#111827] ring-1 ring-[#d9e0e8]",
    dark: "bg-[#0b1f33] text-white",
  };

  return (
    <motion.a
      href={href}
      initial={{
        width: 52,
        opacity: 0,
        scale: 0.96,
      }}
      whileInView={{
        width: "auto",
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        width: {
          duration: 0.75,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
        opacity: {
          duration: 0.35,
          delay,
        },
        scale: {
          duration: 0.25,
        },
      }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
      className={`inline-flex h-[52px] items-center overflow-hidden rounded-full shadow-sm transition-shadow hover:shadow-lg ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full">
        <ArrowRight size={20} strokeWidth={2.4} />
      </span>

      <span className="min-w-max pr-6 text-sm font-semibold">{children}</span>
    </motion.a>
  );
}

export default ExpandingCTA;