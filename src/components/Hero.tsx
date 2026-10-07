import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/Animate_image_with_lightning_bats_20261007204957.mp4';
import './Hero.css';

// Candle SVG
function DecoCandle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 80" fill="none" aria-hidden>
      {/* flame */}
      <path d="M20 8 C18 14 14 18 15 22 C16 27 24 27 25 22 C26 18 22 14 20 8 Z" fill="#e8a838"/>
      <path d="M20 12 C19 16 17 19 17.5 22 C18 25 22 25 22.5 22 C23 19 21 16 20 12 Z" fill="#fff5c0"/>
      {/* wax drip */}
      <rect x="14" y="24" width="12" height="46" rx="3" fill="#e8dcc8"/>
      <path d="M14 40 Q10 44 12 50 L14 50 Z" fill="#d4c8b4"/>
      <path d="M26 35 Q30 39 28 45 L26 45 Z" fill="#d4c8b4"/>
      {/* base */}
      <rect x="11" y="68" width="18" height="5" rx="2" fill="#c8b89a"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero section" id="top">
      <video className="hero__bg" src={heroBg} autoPlay loop muted playsInline aria-hidden />
      <div className="hero__glow" aria-hidden />

      {/* Candles on the sides */}
      <DecoCandle className="hero__deco-candle hero__deco-candle--left" />
      <DecoCandle className="hero__deco-candle hero__deco-candle--right" />

      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Tech Fest 2026</p>
          <h1 className="hero__title heading-gradient">Welcome to the haunt.</h1>
          <p className="hero__lead">
            Tachyon returns under a Halloween sky — workshops, competitions, and nights
            worth staying awake for. Same fest spirit as always, dressed for October.
          </p>
          <div className="hero__actions">
            <Link to="/events" className="btn-primary">
              Explore events
            </Link>
            <Link to="/about" className="btn-ghost">
              About the fest
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Play button — bottom right */}
      <button type="button" className="hero__play-fab" aria-label="Watch previous event">
        <span className="hero__play-icon" />
      </button>
    </section>
  );
}
