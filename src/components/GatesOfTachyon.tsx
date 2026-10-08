import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GatesOfTachyon.css';

export type GateEvent = {
  title: string;
  club: string;
  imgSrc: string;
  logoSrc: string;
};

export type GateDepartment = {
  name: 'CSE' | 'CIVIL' | 'CHEMICAL' | 'MECHANICAL' | 'ELECTRONICS';
  content: GateEvent[];
};

const GATE_DEPARTMENTS: GateDepartment[] = [
  {
    name: 'CSE',
    content: [
      {
        title: 'CSI DEVELOPMENT',
        club: 'CSI-Development',
        imgSrc: '/events-showcase/devlopment.jpg',
        logoSrc: '/events-showcase/dev.png',
      },
      {
        title: 'CSI BITWISE',
        club: 'CSI-Bitwise',
        imgSrc: '/events-showcase/bitwise.jpg',
        logoSrc: '/events-showcase/bitwise.png',
      },
      {
        title: 'CSI BOTNET',
        club: 'CSI-Botnet',
        imgSrc: '/events-showcase/botnet.jpg',
        logoSrc: '/events-showcase/botnet.png',
      },
      {
        title: 'VR AR MR',
        club: 'VR+AR+MR',
        imgSrc: '/events-showcase/vrarmr_02.jpg',
        logoSrc: '/events-showcase/arvrmr.png',
      },
      {
        title: 'MOZILLA',
        club: 'Mozilla',
        imgSrc: '/events-showcase/mozilla_02.jpg',
        logoSrc: '/events-showcase/MOZILLA.png',
      },
      {
        title: 'ROSPINOT',
        club: 'Rospinot',
        imgSrc: '/events-showcase/rospinot.jpg',
        logoSrc: '/events-showcase/rospinot.png',
      },
      {
        title: 'CSI MULTIMEDIA',
        club: 'CSI-MM&UI/UX',
        imgSrc: '/events-showcase/multimedia.png',
        logoSrc: '/events-showcase/MMUIUX-BLACK.png',
      },
      {
        title: 'GFG',
        club: 'GFG',
        imgSrc: '/events-showcase/gfg.jpg',
        logoSrc: '/events-showcase/gg.png',
      },
    ],
  },
  {
    name: 'CIVIL',
    content: [
      {
        title: 'CE',
        club: 'Civil',
        imgSrc: '/events-showcase/civil_02.jpg',
        logoSrc: '/events-showcase/Civil.png',
      },
    ],
  },
  {
    name: 'CHEMICAL',
    content: [
      {
        title: 'CHE',
        club: 'Chemical',
        imgSrc: '/events-showcase/che.jpg',
        logoSrc: '/events-showcase/CHEMICAL LOGO.png',
      },
    ],
  },
  {
    name: 'MECHANICAL',
    content: [
      {
        title: 'MES',
        club: 'Mechanical',
        imgSrc: '/events-showcase/mechanical.jpg',
        logoSrc: '/events-showcase/mes.png',
      },
    ],
  },
  {
    name: 'ELECTRONICS',
    content: [
      {
        title: 'ISF',
        club: 'Electronics',
        imgSrc: '/events-showcase/eceisf_02.jpg',
        logoSrc: '/events-showcase/Isf.png',
      },
    ],
  },
];

export function GatesOfTachyon() {
  const [activeDept, setActiveDept] = useState<'CSE' | 'CIVIL' | 'CHEMICAL' | 'MECHANICAL' | 'ELECTRONICS'>('CSE');

  const currentDept = GATE_DEPARTMENTS.find((d) => d.name === activeDept) || GATE_DEPARTMENTS[0];

  // Prepare seamless looping items: repeat if small, then duplicate once for 50% translation loop
  const rawItems = currentDept.content;
  const baseItems =
    rawItems.length >= 6
      ? rawItems
      : Array.from(
          { length: Math.ceil(6 / rawItems.length) * rawItems.length },
          (_, i) => rawItems[i % rawItems.length]
        );
  const isMultiClub = currentDept.content.length > 1;
  const marqueeItems = isMultiClub ? [...baseItems, ...baseItems] : [];

  return (
    <section className="gates-section" id="events-showcase">
      <div className="container">
        {/* Section Heading matching Tachyon 25 */}
        <div className="gates-header">
          <p className="gates-label">⚡ Gates of Tachyon 26</p>
          <h2 className="gates-title">Our Events</h2>
          <p className="gates-subtitle">
            {isMultiClub
              ? 'Gliding into the cyber void • Hover over any event to inspect'
              : 'Featured department club • Click to explore events'}
          </p>
        </div>

        {/* Branch / Department Navigation Tabs */}
        <div className="gates-tabs-nav" role="tablist" aria-label="Event Department Tabs">
          {GATE_DEPARTMENTS.map((dept) => (
            <button
              key={dept.name}
              type="button"
              className={`gates-tab-btn ${activeDept === dept.name ? 'gates-tab-btn--active' : ''}`}
              onClick={() => setActiveDept(dept.name)}
              role="tab"
              aria-selected={activeDept === dept.name}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Card Showcase Track: Marquee for CSE, Centered single card for other branches */}
        <div className="gates-showcase-wrap">
          {isMultiClub ? (
            <>
              {/* Subtle edge vignette fades */}
              <div className="gates-fade gates-fade--left" aria-hidden />
              <div className="gates-fade gates-fade--right" aria-hidden />

              <div className="gates-marquee-viewport">
                <div className="gates-cards-marquee" key={activeDept}>
                  {marqueeItems.map((item, idx) => (
                    <Link
                      to={`/events?branch=${currentDept.name}&club=${encodeURIComponent(item.club)}`}
                      key={`${item.title}-${idx}`}
                      className="gates-card"
                    >
                      <div className="gates-card__img-wrap">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="gates-card__img"
                          loading="lazy"
                        />
                      </div>
                      <div className="gates-card__overlay" />

                      {/* Bottom-left title with glowing cyan bar */}
                      <div className="gates-card__title-wrap">
                        <span className="gates-card__bar" />
                        <h3 className="gates-card__title">{item.title}</h3>
                      </div>

                      {/* Bottom-right circular club badge */}
                      <div className="gates-card__logo-badge">
                        <img
                          src={item.logoSrc}
                          alt={`${item.club} logo`}
                          className="gates-card__logo-img"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="gates-single-wrap" key={activeDept}>
              {currentDept.content.map((item) => (
                <Link
                  to={`/events?branch=${currentDept.name}&club=${encodeURIComponent(item.club)}`}
                  key={item.title}
                  className="gates-card gates-card--single"
                >
                  <div className="gates-card__img-wrap">
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="gates-card__img"
                      loading="lazy"
                    />
                  </div>
                  <div className="gates-card__overlay" />

                  {/* Bottom-left title with glowing cyan bar */}
                  <div className="gates-card__title-wrap">
                    <span className="gates-card__bar" />
                    <h3 className="gates-card__title">{item.title}</h3>
                  </div>

                  {/* Bottom-right circular club badge */}
                  <div className="gates-card__logo-badge">
                    <img
                      src={item.logoSrc}
                      alt={`${item.club} logo`}
                      className="gates-card__logo-img"
                      loading="lazy"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
