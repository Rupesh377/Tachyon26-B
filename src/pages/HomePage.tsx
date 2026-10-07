import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import './Pages.css';
import './HomeCollage.css';

export function HomePage() {
  return (
    <div className="page page--dark page--home">
      <Hero />
      <Marquee />

      {/* ── Photo Collage ── */}
      <section className="home-collage">
        <div className="container">
          <p className="section-label">Previous Edition</p>
          <h2 className="home-collage__heading heading-gradient">Tachyon 25 — Highlights</h2>
          <div className="home-collage__grid">
            <div className="home-collage__item home-collage__item--tall">
              <img src="/icons.svg" alt="Tachyon 25 highlight 1" />
              <div className="home-collage__overlay" />
            </div>
            <div className="home-collage__item">
              <img src="/icons.svg" alt="Tachyon 25 highlight 2" />
              <div className="home-collage__overlay" />
            </div>
            <div className="home-collage__item">
              <img src="/icons.svg" alt="Tachyon 25 highlight 3" />
              <div className="home-collage__overlay" />
            </div>
            <div className="home-collage__item">
              <img src="/icons.svg" alt="Tachyon 25 highlight 4" />
              <div className="home-collage__overlay" />
            </div>
            <div className="home-collage__item">
              <img src="/icons.svg" alt="Tachyon 25 highlight 5" />
              <div className="home-collage__overlay" />
            </div>
          </div>
          <p className="home-collage__note">Replace placeholders with your actual event photos.</p>
        </div>
      </section>

      {/* ── Social Footer ── */}
      <section className="home-social">
        <div className="container home-social__inner">
          <div className="home-social__links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social__btn"
              aria-label="Instagram"
            >
              {/* Instagram icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social__btn"
              aria-label="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="home-social__copy">© Tachyon Dev Team 2026</p>
        </div>
      </section>
    </div>
  );
}
