import { motion } from "framer-motion";

/**
 * Scroll-triggered reveal. Fades + rises into view once.
 * `as` lets you change the rendered element; `delay` staggers groups.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className = "",
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
