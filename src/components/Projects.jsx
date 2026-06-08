import Reveal from "./Reveal.jsx";
import { projects } from "../data/content.js";

// Decorative structural line-art for each project card.
function Glyph({ kind }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (kind) {
    case "moment-frame":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <path d="M15 85V25h70v60" />
          <path d="M15 25h70" />
          <path d="M15 40h12M73 40h12M28 25v15M72 25v15" />
          <path d="M15 85h-6M85 85h6" />
          <path d="M15 40 27 28M85 40 73 28" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <rect x="22" y="20" width="56" height="65" />
          <path d="M22 52h56M50 20v65" />
          <path d="M32 32h8M60 32h8M32 64h8M60 64h8" />
          <path d="M22 20 50 8 78 20" />
        </svg>
      );
    case "drawing":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <rect x="16" y="16" width="68" height="68" rx="2" />
          <path d="M16 30h68M30 16v68" />
          <path d="M44 44h26v26H44z" />
          <path d="M40 70 70 40" strokeDasharray="3 4" />
        </svg>
      );
    case "pier":
      return (
        <svg viewBox="0 0 100 100" {...common}>
          <path d="M8 42h84" />
          <path d="M20 42v34M38 42v34M56 42v34M74 42v34" />
          <path d="M8 50h84M8 60h84" strokeDasharray="2 5" opacity="0.6" />
          <path d="M14 42 22 30h56l8 12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-steel">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">03 / Selected Work</span>
          <h2 className="section-title">
            Designed, detailed, <span className="accent">delivered.</span>
          </h2>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1} className="proj">
              <div className="proj-glyph">
                <Glyph kind={p.glyph} />
              </div>
              <span className="proj-kind">{p.kind}</span>
              <div className="proj-period mono">{p.period}</div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-blurb">{p.blurb}</p>
              <p className="proj-detail">{p.detail}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
