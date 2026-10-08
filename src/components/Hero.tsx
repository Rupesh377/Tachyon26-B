import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/video.mp4';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero section" id="top">
      <video className="hero__bg" src={heroBg} autoPlay loop muted playsInline aria-hidden />

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
