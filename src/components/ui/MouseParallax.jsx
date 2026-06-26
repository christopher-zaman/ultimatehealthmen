import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function MouseParallax({ children, strength = 10, className = "" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  const x = useTransform(springX, [-0.5, 0.5], [-strength, strength]);
  const y = useTransform(springY, [-0.5, 0.5], [-strength, strength]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MouseParallax;