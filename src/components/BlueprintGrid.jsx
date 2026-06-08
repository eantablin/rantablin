import { useEffect, useRef } from "react";

/**
 * Animated blueprint backdrop:
 *  - fine + major drafting grid
 *  - a lattice of slowly drifting "structural joints" connected like a truss
 *  - subtle mouse parallax
 * Honors prefers-reduced-motion by rendering a single static frame.
 */
export default function BlueprintGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let raf;
    let mouseX = 0;
    let mouseY = 0;
    let px = 0; // parallax (eased)
    let py = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const count = Math.max(14, Math.min(40, Math.round((w * h) / 32000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1.2,
      }));
    };

    const drawGrid = () => {
      const minor = 28;
      const major = minor * 5;
      ctx.lineWidth = 1;

      // minor grid
      ctx.strokeStyle = "rgba(120, 190, 255, 0.05)";
      ctx.beginPath();
      for (let x = (px % minor); x < w; x += minor) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = (py % minor); y < h; y += minor) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // major grid
      ctx.strokeStyle = "rgba(120, 190, 255, 0.10)";
      ctx.beginPath();
      for (let x = (px % major); x < w; x += major) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = (py % major); y < h; y += major) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // ease parallax toward mouse offset
      const tx = (mouseX - w / 2) * 0.018;
      const ty = (mouseY - h / 2) * 0.018;
      px += (tx - px) * 0.05;
      py += (ty - py) * 0.05;

      drawGrid();

      // update + draw lattice connections
      const linkDist = Math.min(w, h) * 0.26;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
        const nx = n.x + px;
        const ny = n.y + py;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const mx = m.x + px;
          const my = m.y + py;
          const dx = nx - mx;
          const dy = ny - my;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const t = 1 - dist / linkDist;
            // closest links glow safety orange, farther links stay blueprint-blue
            if (t > 0.72) {
              ctx.strokeStyle = `rgba(255, 107, 0, ${t * 0.5})`;
              ctx.lineWidth = 1.1;
            } else {
              ctx.strokeStyle = `rgba(120, 190, 255, ${t * 0.32})`;
              ctx.lineWidth = 0.8;
            }
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      // draw joints (small drafting squares)
      for (const n of nodes) {
        const nx = n.x + px;
        const ny = n.y + py;
        ctx.fillStyle = "rgba(180, 215, 255, 0.55)";
        ctx.fillRect(nx - n.r, ny - n.r, n.r * 2, n.r * 2);
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resize();
    mouseX = w / 2;
    mouseY = h / 2;
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });

    if (reduced) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
