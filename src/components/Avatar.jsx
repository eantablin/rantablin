import { useState } from "react";
import { profile } from "../data/content.js";

/**
 * Headshot with a blueprint-styled monogram fallback.
 * Drop a photo at /public/richard.jpg and it appears automatically; if the
 * file is missing the fetch fails gracefully and the monogram shows.
 */
export default function Avatar() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="avatar">
      {!failed && (
        <img
          src={profile.headshot}
          alt={`${profile.name}, ${profile.credential}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}
        />
      )}

      {(failed || !loaded) && (
        <div className="avatar-fallback" aria-hidden={loaded}>
          <span className="mono-letters">{profile.initials}</span>
        </div>
      )}

      <div className="avatar-grid-overlay" />
      <span className="avatar-corner tl" />
      <span className="avatar-corner br" />
      <span className="avatar-tag mono">FIG. 01 — R. ANTABLIN</span>
    </div>
  );
}
