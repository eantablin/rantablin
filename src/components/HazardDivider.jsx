export default function HazardDivider({ animated = true }) {
  return (
    <div
      className={`hazard ${animated ? "animated" : ""}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
