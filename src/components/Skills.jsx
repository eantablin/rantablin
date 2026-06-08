import { motion } from "framer-motion";
import { HardHat, DraftingCompass, Wrench, Languages as LangIcon } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { skillGroups, tools, languages } from "../data/content.js";

const icons = {
  "hard-hat": HardHat,
  structure: DraftingCompass,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-steel-850">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">04 / Capabilities</span>
          <h2 className="section-title">
            The <span className="accent">toolkit.</span>
          </h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] || Wrench;
            return (
              <Reveal key={group.title} delay={i * 0.1} className="skill-card">
                <div className="skill-card-head">
                  <span className="ico">
                    <Icon size={22} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}

          {/* Languages */}
          <Reveal delay={0.05} className="skill-card">
            <div className="skill-card-head">
              <span className="ico">
                <LangIcon size={22} />
              </span>
              <h3>Languages</h3>
            </div>
            <div className="lang-list">
              {languages.map((l, i) => (
                <div className="lang-row" key={l.name}>
                  <div className="lang-top">
                    <span className="lang-name">{l.name}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <div className="lang-bar">
                    <motion.div
                      className="lang-fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: l.pct / 100 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 1.1,
                        delay: 0.2 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Software / tools */}
          <Reveal delay={0.1} className="skill-card">
            <div className="skill-card-head">
              <span className="ico">
                <Wrench size={22} />
              </span>
              <h3>Software</h3>
            </div>
            <div className="skill-tags tools-strip-tags">
              {tools.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
