import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/content.js";

export default function Contact() {
  // Assembled at runtime so the literal address never sits in the markup.
  const email = `${profile.emailUser}@${profile.emailDomain}`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Hello Richard — let's connect"
  )}`;

  return (
    <section id="contact" className="section-pad contact">
      <div className="contact-grid-bg" />
      <div className="wrap contact-inner">
        <Reveal>
          <span className="kicker">06 / Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2>
            Let&rsquo;s <span className="accent">build</span> something.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p>
            Open to opportunities and collaboration across structural engineering and
            construction management. The fastest way to reach me is below.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="contact-actions">
            <a className="btn btn-primary" href={mailto}>
              <Mail size={16} /> Email me <ArrowUpRight size={15} />
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <a className="contact-email" href={mailto}>
            {email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
