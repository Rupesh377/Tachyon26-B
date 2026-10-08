import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { GatesOfTachyon } from '../components/GatesOfTachyon';
import headingImg from '../assets/heading.png';
import backgroundImg from '../assets/background.jpg';
import newBackImg from '../assets/new_back.jpg';
import backImg from '../assets/back.jpg';
import './Pages.css';
import './HomeCollage.css';

export function HomePage() {
  const highlights = [
    {
      img: headingImg,
      title: 'The Summoning of Skeletons',
      caption: 'Main Quad Stage & Ceremonial Signboard',
      isTall: true,
    },
    {
      img: newBackImg,
      title: 'Haunted Mansion Hackathon',
      caption: '24-hour non-stop development laboratory',
      isTall: false,
    },
    {
      img: backgroundImg,
      title: 'Graveyard of Algorithms',
      caption: 'Competitive coding arena under midnight mist',
      isTall: false,
    },
    {
      img: backImg,
      title: 'The Witching Woods',
      caption: 'Autonomous drone tracks and outdoor arena',
      isTall: false,
    },
    {
      img: headingImg,
      title: 'The Masquerade Revelry',
      caption: 'Pro-Nite music and celebratory afterparty',
      isTall: false,
    },
  ];

  return (
    <div className="page page--dark page--home">
      {/* Hero section — video background untouched */}
      <Hero />
      <Marquee />

      {/* ── Gates of Tachyon 26 Showcase (Tachyon 25 exact style) ── */}
      <GatesOfTachyon />

      {/* ── Photo Collage ── */}
      <section className="home-collage">
        <div className="container">
          <p className="section-label">Previous Edition & Vibe</p>
          <h2 className="home-collage__heading heading-gradient">The Nocturnal Chronicles</h2>
          <p className="home-collage__sublead">
            Snapshots of the atmosphere, arenas, and midnight energy that define Tachyon.
          </p>
          <div className="home-collage__grid">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`home-collage__item ${item.isTall ? 'home-collage__item--tall' : ''}`}
              >
                <img src={item.img} alt={item.title} />
                <div className="home-collage__overlay">
                  <div className="home-collage__caption">
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Strip ── */}
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="home-social__copy">© Tachyon Directorate 2026 • The Halloween Haunt</p>
        </div>
      </section>

    </div>
  );
}
