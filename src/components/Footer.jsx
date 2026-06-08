import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/content.js";

export default function Footer() {
  const email = `${profile.emailUser}@${profile.emailDomain}`;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="meta">
          © {year} {profile.name}, {profile.credential} · {profile.location}
          <br />
          Built from blueprint to deploy.
        </div>

        <div className="socials">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <a className="to-top" href="#top">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
