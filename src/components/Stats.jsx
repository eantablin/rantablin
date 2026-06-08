import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { stats } from "../data/content.js";

function CountUp({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const duration = 1300;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="num">
      {display.toFixed(decimals)}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}

export default function Stats() {
  return (
    <Reveal as="div" className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
          <div className="label">{s.label}</div>
          <div className="sub">{s.sub}</div>
        </div>
      ))}
    </Reveal>
  );
}
