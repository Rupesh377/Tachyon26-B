import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import './Pages.css';

export function HomePage() {
  return (
    <div className="page">
      <Hero />
      <Marquee />
      <section className="page__home-hint section">
        <div className="container">
          <p className="page__home-hint-text">
            Use the sidebar to open Events, Team, Merchandise, and other sections — each
            has its own page.
          </p>
          <div className="page__home-links">
            <Link to="/events" className="btn-primary">
              Events
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
