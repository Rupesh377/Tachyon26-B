import './Marquee.css';

const REPEAT = 8;

export function Marquee() {
  const items = Array.from({ length: REPEAT }, (_, i) => (
    <span key={i} className="marquee__item">
      Tachyon 2026
      <span className="marquee__dot" aria-hidden />
    </span>
  ));

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {items}
        {items}
      </div>
    </div>
  );
}
