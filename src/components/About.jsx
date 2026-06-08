import Reveal from "./Reveal.jsx";
import Avatar from "./Avatar.jsx";
import Stats from "./Stats.jsx";

export default function About() {
  return (
    <section id="about" className="section-pad bg-concrete">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker on-light">01 / About</span>
          <h2 className="section-title">
            Engineer by training, <span className="accent">builder</span> by trade.
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <Avatar />
          </Reveal>

          <Reveal delay={0.12} className="about-copy">
            <p className="lead">
              I sit at the seam between design and construction — fluent in the{" "}
              <strong>calculations that keep a building standing</strong> and the{" "}
              <strong>schedules and budgets that get it built</strong>.
            </p>
            <p>
              I earned my B.S. in Architectural Engineering with a minor in
              Construction Management from Cal Poly San Luis Obispo, then passed the
              FE exam to become an Engineer in Training. After cutting my teeth on
              structural calculations for medical buildings at Spire Structural
              Engineering, I joined Swinerton as a Project Engineer — where I now turn
              drawings into delivered work.
            </p>
            <p>
              That dual fluency is the point. I read a set of structural drawings the
              way the engineer of record intended, then plan the sequence, takeoffs,
              and coordination that bring them to life on the jobsite — with the rigor
              of someone who has run the numbers themselves.
            </p>
          </Reveal>
        </div>

        <Stats />
      </div>
    </section>
  );
}
