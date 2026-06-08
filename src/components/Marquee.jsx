import { tools } from "../data/content.js";

export default function Marquee() {
  // duplicate the list so the -50% translate loops seamlessly
  const items = [...tools, ...tools];
  return (
    <div className="marquee" aria-label="Tools and software">
      <div className="marquee-track">
        {items.map((tool, i) => (
          <span className="marquee-item" key={i} aria-hidden={i >= tools.length}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
