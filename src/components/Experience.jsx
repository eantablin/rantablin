import Reveal from "./Reveal.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-concrete">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker on-light">02 / Experience</span>
          <h2 className="section-title">
            On the <span className="accent">jobsite</span> &amp; at the desk.
          </h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal
              key={job.company}
              delay={i * 0.08}
              className={`tl-item ${job.current ? "current" : ""}`}
            >
              <span className="tl-node" />
              <div className="tl-head">
                <span className="tl-role">{job.role}</span>
                <span className="tl-company">{job.company}</span>
                <span className="tl-period">
                  {job.current && <span className="tl-badge-now mono">NOW</span>}
                  {job.start} — {job.end}
                </span>
              </div>
              <p className="tl-summary">{job.summary}</p>
              <ul className="tl-points">
                {job.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
              <div className="tl-tags">
                {job.tags.map((t) => (
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
