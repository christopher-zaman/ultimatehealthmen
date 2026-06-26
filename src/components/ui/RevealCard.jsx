import { motion } from "motion/react";
import { smoothTransition } from "../../lib/motion";

function RevealCard({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        ...smoothTransition,
        delay,
      }}
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default RevealCard;