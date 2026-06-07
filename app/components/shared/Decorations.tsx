export function Flower({ className = "" }: { className?: string }) {
  return (
    <span className={`flower ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <b />
    </span>
  );
}

export function LeafCluster({ className = "" }: { className?: string }) {
  return (
    <span className={`leaf-cluster ${className}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function WomanIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`woman-illustration ${className}`} aria-label="Illustrated woman">
      <div className="hair hair-left" />
      <div className="hair hair-right" />
      <div className="head-wrap" />
      <div className="face">
        <span className="eye left" />
        <span className="eye right" />
        <span className="nose" />
        <span className="mouth" />
      </div>
      <div className="neck" />
      <div className="dress" />
      <div className="shoulder shoulder-left" />
      <div className="shoulder shoulder-right" />
    </div>
  );
}

export function PhotoCard({
  className = "",
  caption = "WOMEN'S VOICES",
}: {
  className?: string;
  caption?: string;
}) {
  return (
    <div className={`photo-card ${className}`} aria-label="Editorial community photo placeholder">
      <div className="photo-sky" />
      <div className="photo-people">
        <span />
        <span />
        <span />
      </div>
      <div className="photo-caption">{caption}</div>
    </div>
  );
}
