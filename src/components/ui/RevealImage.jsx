import { motion } from "motion/react";
import { imageRevealTransition } from "../../lib/motion";

function RevealImage({
  src,
  alt,
  from = "right",
  delay = 0,
  className = "",
}) {
  const variants = {
    right: {
      initial: {
        opacity: 0,
        rotateY: -55,
        rotateX: 12,
        scale: 0.86,
        x: 140,
      },
      animate: {
        opacity: 1,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        x: 0,
      },
    },
    left: {
      initial: {
        opacity: 0,
        rotateY: 55,
        rotateX: -12,
        scale: 0.86,
        x: -140,
      },
      animate: {
        opacity: 1,
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        x: 0,
      },
    },
    bottom: {
      initial: {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
    },
  };

  const animation = variants[from];

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      transition={{
        ...imageRevealTransition,
        delay,
      }}
      viewport={{ once: true, amount: 0.35 }}
      className={className}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </motion.div>
  );
}

export default RevealImage;