import Reveal from "./Reveal.jsx";
import { credentials, involvement } from "../data/content.js";

export default function Education() {
  return (
    <section id="education" className="section-pad bg-concrete">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker on-light">05 / Credentials</span>
          <h2 className="section-title">
            Certified, <span className="accent">degreed</span>, &amp; involved.
          </h2>
        </Reveal>

        <div className="cred-grid">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="cred">
              <span className="n">0{i + 1}</span>
              <h3>{c.title}</h3>
              <div className="org">{c.org}</div>
              <p className="note">{c.note}</p>
            </Reveal>
          ))}
        </div>

        <div className="involve">
          {involvement.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="involve-card">
              <div className="top">
                <h4>{it.title}</h4>
                <span className="period mono">{it.period}</span>
              </div>
              <p className="note">{it.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
