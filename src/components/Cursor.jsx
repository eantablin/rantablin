import { useEffect, useRef, useState } from "react";

/**
 * Surveyor's-reticle custom cursor. Desktop / fine-pointer only.
 * The ring lags slightly behind the dot for a weighted, instrument feel,
 * and snaps larger over interactive targets.
 */
export default function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        'a, button, input, textarea, [role="button"], .proj, .stat'
      );
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "52px" : "34px";
        ringRef.current.style.height = interactive ? "52px" : "34px";
        ringRef.current.style.margin = interactive
          ? "-26px 0 0 -26px"
          : "-17px 0 0 -17px";
        ringRef.current.style.borderColor = interactive ? "#ff6b00" : "#fff";
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    loop();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
