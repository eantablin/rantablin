import { motion } from "framer-motion";
import { ArrowDown, MapPin, Linkedin, HardHat } from "lucide-react";
import BlueprintGrid from "./BlueprintGrid.jsx";
import { profile } from "../data/content.js";

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <header className="hero" id="top">
      <BlueprintGrid />
      <div className="hero-vignette" />

      <div className="wrap hero-inner">
        <motion.div
          className="hero-meta"
          variants={rise}
          custom={0}
          initial="hidden"
          animate="show"
        >
          <span className="tag">
            <span className="dot" /> Available for projects
          </span>
          <span className="tag">
            <MapPin size={13} /> {profile.location}
          </span>
          <span className="tag">
            <HardHat size={13} /> @ Swinerton
          </span>
        </motion.div>

        <h1 className="hero-name">
          <motion.span
            style={{ display: "block" }}
            variants={rise}
            custom={1}
            initial="hidden"
            animate="show"
          >
            Richard
          </motion.span>
          <motion.span
            className="line2"
            style={{ display: "block" }}
            variants={rise}
            custom={2}
            initial="hidden"
            animate="show"
          >
            Antablin
          </motion.span>
        </h1>

        <motion.p
          className="hero-tagline"
          variants={rise}
          custom={3}
          initial="hidden"
          animate="show"
        >
          {profile.roleLine.split(" · ")[0]}{" "}
          <span className="accent">/</span> Architectural Engineer
        </motion.p>

        <motion.p
          className="hero-intro"
          variants={rise}
          custom={4}
          initial="hidden"
          animate="show"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          className="hero-actions"
          variants={rise}
          custom={5}
          initial="hidden"
          animate="show"
        >
          <a className="btn btn-primary" href="#projects">
            View the work <ArrowDown />
          </a>
          <a
            className="btn btn-ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <span>Scroll</span>
        <span className="rail" />
      </motion.div>
    </header>
  );
}
