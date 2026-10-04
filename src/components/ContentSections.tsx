import './ContentSections.css';

const team = [
  { name: 'Lead — Name', role: 'Fest Coordinator' },
  { name: 'Dev — Name', role: 'Web & Experience' },
  { name: 'Design — Name', role: 'Visual & Merch' },
  { name: 'Ops — Name', role: 'Events & Logistics' },
];

const speakers = [
  { name: 'Speaker slot', topic: 'Industry talk — details coming soon' },
  { name: 'Speaker slot', topic: 'Technical session — TBA' },
];

const sponsors = ['Partner I', 'Partner II', 'Partner III', 'Partner IV'];

export function About() {
  return (
    <section className="section content-block" id="about">
      <div className="container content-block__grid">
        <div>
          <p className="section-label">The fest</p>
          <h2 className="section-title heading-gradient">About Tachyon</h2>
        </div>
        <div className="content-block__body">
          <p>
            Tachyon is the annual tech fest — a week of competitions, hands-on workshops,
            and guest sessions. Last year&apos;s site leaned into Transformers; this year the
            mood is Halloween without the cartoon neon: muted plum skies, burnt orange
            accents, and type that stays readable on long scrolls.
          </p>
          <p>
            Swap in your college copy, dates, and registration URLs when they&apos;re
            finalized. The layout follows the same sections as{' '}
            <a href="https://www.tachyon25.in/" target="_blank" rel="noreferrer">
              tachyon25.in
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="section content-block content-block--alt" id="team">
      <div className="container">
        <p className="section-label">People</p>
        <h2 className="section-title heading-gradient">Team</h2>
        <p className="section-lead">Update names and roles from your roster.</p>
        <ul className="card-grid">
          {team.map((member) => (
            <li key={member.name} className="card-grid__item">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Speakers() {
  return (
    <section className="section content-block" id="speakers">
      <div className="container">
        <p className="section-label">Guests</p>
        <h2 className="section-title heading-gradient">Speakers</h2>
        <ul className="card-grid card-grid--wide">
          {speakers.map((s) => (
            <li key={s.name + s.topic} className="card-grid__item">
              <h3>{s.name}</h3>
              <p>{s.topic}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Merchandise() {
  return (
    <section className="section merch" id="merchandise">
      <div className="container merch__grid">
        <div>
          <p className="section-label">Collectibles</p>
          <h2 className="section-title heading-gradient">Merchandise</h2>
          <p className="section-lead">
            Hoodie mockups — drop in product photos like last year&apos;s front/back views.
          </p>
          <a href="#contact" className="btn-primary">
            Buy now
          </a>
        </div>
        <div className="merch__previews">
          <figure className="merch__figure">
            <div className="merch__shirt merch__shirt--front">
              <span>T26</span>
            </div>
            <figcaption>Front view</figcaption>
          </figure>
          <figure className="merch__figure">
            <div className="merch__shirt merch__shirt--back">
              <span className="merch__bat" aria-hidden />
            </div>
            <figcaption>Back view</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Sponsors() {
  return (
    <section className="section content-block content-block--alt" id="sponsors">
      <div className="container">
        <p className="section-label">Partners</p>
        <h2 className="section-title heading-gradient">Sponsors</h2>
        <div className="sponsor-row">
          {sponsors.map((name) => (
            <div key={name} className="sponsor-row__logo">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section content-block" id="contact">
      <div className="container content-block__grid">
        <div>
          <p className="section-label">Reach us</p>
          <h2 className="section-title heading-gradient">Contact</h2>
        </div>
        <div className="content-block__body">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:tachyon@example.edu">tachyon@example.edu</a>
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @tachyonfest
            </a>
          </p>
          <p className="content-block__note">
            Replace with official handles before launch.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__mark">Tachyon 26</div>
        <p className="footer__credit">
          Website developed and designed by Tachyon Development Team
        </p>
        <nav className="footer__nav" aria-label="Footer">
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
