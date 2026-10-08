import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/Tachyon26logo-white.png';
import './ContentSections.css';

/* ─────────────────────────────────────────────────────────────
   1. ABOUT SECTION
───────────────────────────────────────────────────────────── */
export function About() {
  const stats = [
    { label: 'Mortals Expected', value: '10,000+', icon: '🎃' },
    { label: 'Cursed Bounty Pool', value: '₹5,00,000+', icon: '🏆' },
    { label: 'Nocturnal Rituals', value: '45+ Events', icon: '⚡' },
    { label: 'Tech Guilds & Colleges', value: '60+ Nationwide', icon: '🏛️' },
  ];

  const pillars = [
    {
      title: 'The Midnight Hackathon',
      desc: '24 unbroken hours locked in the crypt. Compete against top engineering minds to build AI, Web3, and security solutions while the campus sleeps.',
      tag: 'Flagship Coding',
      icon: '💻',
    },
    {
      title: 'Arena of the Damned',
      desc: 'High-torque combat bots clashing inside an electrified cage filled with thick fog and spinning hazards. Pure engineering carnage.',
      tag: 'Combat Robotics',
      icon: '🤖',
    },
    {
      title: 'Keynote Sorcery',
      desc: 'Pioneers from Google DeepMind, Microsoft, and global cybersecurity units unveiling forbidden advancements in artificial intelligence and quantum logic.',
      tag: 'Visionary Talks',
      icon: '🔮',
    },
    {
      title: 'The Masquerade Pro-Nite',
      desc: 'High-voltage bass, costumed euphoria, and laser projections piercing through the midnight mist to celebrate the culmination of Tachyon.',
      tag: 'Concert & Afterparty',
      icon: '🎭',
    },
  ];

  const scheduleDays = [
    {
      day: 'Day 01',
      date: 'Oct 31, 2026',
      title: 'The Awakening',
      events: ['The Grand Summoning (Opening Ceremony)', '24-Hr Hackathon Kickoff', 'Drone Racing Prelims', 'Web Dev in the Mist'],
    },
    {
      day: 'Day 02',
      date: 'Nov 01, 2026',
      title: 'The Witching Hour',
      events: ['RoboWars Knockout Rounds', 'Code in the Dark Blitz', 'Capture The Flag CTF', 'Guest Keynote Sessions'],
    },
    {
      day: 'Day 03',
      date: 'Nov 02, 2026',
      title: 'The Reaping',
      events: ['Combat Robotics Grand Finale', 'Hackathon Project Demos', 'Award Ceremony & Bounties', 'The Haunted Masquerade Pro-Nite'],
    },
  ];

  return (
    <section className="section content-block" id="about">
      <div className="container">
        {/* Header */}
        <div className="about__hero">
          <p className="section-label">⚡ The Lore of Tachyon</p>
          <h2 className="section-title heading-gradient">When Code Awakens the Night</h2>
          <p className="about__lead">
            Tachyon is our annual national tech festival — a three-day celebration where
            computational wizardry meets nocturnal folklore. We replace sterile convention halls
            with foggy arenas, neon runes, and relentless challenges designed to push mortal engineers
            beyond their limits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="about__stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="about__stat-card">
              <span className="about__stat-icon">{stat.icon}</span>
              <strong className="about__stat-val">{stat.value}</strong>
              <span className="about__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Pillars Grid */}
        <div className="about__pillars-section">
          <p className="section-label">Core Pillars</p>
          <h3 className="about__subtitle">Four Arenas of Glory</h3>
          <div className="about__pillars-grid">
            {pillars.map((p, idx) => (
              <div key={idx} className="about__pillar-card">
                <div className="about__pillar-top">
                  <span className="about__pillar-icon">{p.icon}</span>
                  <span className="about__pillar-tag">{p.tag}</span>
                </div>
                <h4 className="about__pillar-title">{p.title}</h4>
                <p className="about__pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="about__schedule-section">
          <p className="section-label">Timeline</p>
          <h3 className="about__subtitle">The 3-Day Grimoire</h3>
          <div className="about__schedule-grid">
            {scheduleDays.map((sch, idx) => (
              <div key={idx} className="about__schedule-card">
                <div className="about__schedule-badge">
                  <span>{sch.day}</span>
                  <small>{sch.date}</small>
                </div>
                <h4 className="about__schedule-title">{sch.title}</h4>
                <ul className="about__schedule-list">
                  {sch.events.map((ev, eIdx) => (
                    <li key={eIdx}>{ev}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. TEAM SECTION (The Council of Shadows)
───────────────────────────────────────────────────────────── */
export function Team() {
  const [filter, setFilter] = useState<'All' | 'Core' | 'Tech' | 'Design' | 'Ops'>('All');

  const members = [
    {
      name: 'Aarav Mehta',
      role: 'Fest Convener',
      alias: 'Supreme Necromancer',
      guild: 'Core',
      avatar: '🧙‍♂️',
      quote: 'Orchestrating the chaos so 10,000 mortals have an unforgettable night.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Riya Sengupta',
      role: 'Head of Engineering',
      alias: 'Chief Architect of Nightmares',
      guild: 'Tech',
      avatar: '👩‍💻',
      quote: 'Ships zero-bug full-stack infrastructure before the clock strikes twelve.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Devansh Verma',
      role: 'Creative Director',
      alias: 'Cursed Alchemist',
      guild: 'Design',
      avatar: '🎨',
      quote: 'Summoning visual identities and UI dark magic across every screen.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Tanvi Kulkarni',
      role: 'Operations & Stage Lead',
      alias: 'Mistress of Havoc',
      guild: 'Ops',
      avatar: '⚡',
      quote: 'Keeping lasers, sound stages, and battlebot arenas running seamlessly.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Siddharth Rao',
      role: 'Corporate Relations',
      alias: 'Treasurer of the Crypt',
      guild: 'Core',
      avatar: '💎',
      quote: 'Gathering ₹5L+ in bounties from top global tech sponsors.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Meera Joshi',
      role: 'PR & Media Lead',
      alias: 'Voice of the Shadows',
      guild: 'Ops',
      avatar: '📡',
      quote: 'Broadcasting the haunt across 60+ universities and digital streams.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Kabir Nair',
      role: 'Robotics Coordinator',
      alias: 'Warden of the Arena',
      guild: 'Tech',
      avatar: '🤖',
      quote: 'Building heavy-metal combat cages and safety protocols that survive fire.',
      social: { linkedin: '#', github: '#' },
    },
    {
      name: 'Ananya Patel',
      role: 'Workshops & Speakers',
      alias: 'Curator of Forbidden Spells',
      guild: 'Core',
      avatar: '🔮',
      quote: 'Bringing world-class researchers from DeepMind and cloud covens to campus.',
      social: { linkedin: '#', github: '#' },
    },
  ];

  const filteredMembers = filter === 'All' ? members : members.filter((m) => m.guild === filter);

  return (
    <section className="section content-block content-block--alt" id="team">
      <div className="container">
        <div className="team__header">
          <p className="section-label">⚡ Organizers</p>
          <h2 className="section-title heading-gradient">The Council of Shadows</h2>
          <p className="section-lead">
            Meet the dev architects, designers, and organizers behind Tachyon 26.
          </p>

          <div className="team__filter-bar">
            {(['All', 'Core', 'Tech', 'Design', 'Ops'] as const).map((g) => (
              <button
                key={g}
                type="button"
                className={`team__filter-btn ${filter === g ? 'team__filter-btn--active' : ''}`}
                onClick={() => setFilter(g)}
              >
                {g === 'All' ? '🌟 All Council' : g}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="team__grid">
          {filteredMembers.map((member) => (
            <motion.div
              layout
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="team__card"
            >
              <div className="team__avatar-wrap">
                <span className="team__avatar-glyph">{member.avatar}</span>
                <span className="team__guild-badge">{member.guild}</span>
              </div>
              <div className="team__info">
                <h3 className="team__name">{member.name}</h3>
                <span className="team__alias">{member.alias}</span>
                <p className="team__role">{member.role}</p>
                <p className="team__quote">&ldquo;{member.quote}&rdquo;</p>
              </div>
              <div className="team__socials">
                <a href={member.social.linkedin} className="team__social-link" aria-label="LinkedIn">
                  LinkedIn
                </a>
                <span className="team__social-sep">•</span>
                <a href={member.social.github} className="team__social-link" aria-label="GitHub">
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. SPEAKERS SECTION (Keynote Conjurers)
───────────────────────────────────────────────────────────── */
export function Speakers() {
  const [reserved, setReserved] = useState<Record<number, boolean>>({});

  const speakers = [
    {
      name: 'Dr. Evelyn Vance',
      org: 'Principal Research Scientist @ DeepMind',
      topic: 'Ghosts in the Machine: Autonomous Agents & Emergent AI',
      desc: 'Exploring how multi-agent neural networks develop cooperative and deceptive behaviors in complex synthetic environments.',
      date: 'Oct 31, 2026',
      time: '04:00 PM - 05:30 PM',
      stage: 'The Grand Crypt (Main Auditorium)',
      icon: '🧠',
    },
    {
      name: 'Vikramaditya Roy',
      org: 'Chief Security Officer @ CyberWardens',
      topic: 'Exorcising Zero-Days: The Modern Threat Necromancy',
      desc: 'A live interactive teardown of polymorphic malware and state-sponsored intrusion vectors targeting critical cloud workloads.',
      date: 'Nov 01, 2026',
      time: '11:30 AM - 01:00 PM',
      stage: 'Shadow Hall A',
      icon: '🛡️',
    },
    {
      name: 'Aanya Sharma',
      org: 'Founder & Game Director @ Nether Realities VR',
      topic: 'Building Haunted Worlds: Spatial Computing & Next-Gen VFX',
      desc: 'Behind the scenes of neural radiance fields (NeRFs), photorealistic physics engines, and physiological horror in XR.',
      date: 'Nov 01, 2026',
      time: '03:00 PM - 04:30 PM',
      stage: 'VR Holo-Chamber',
      icon: '🥽',
    },
    {
      name: 'Dr. K. S. Raman',
      org: 'Quantum Computing Fellow @ Institute of Advanced Science',
      topic: 'Spooky Action at a Distance: Entanglement & Cryptography',
      desc: 'Why Einstein dubbed entanglement spooky, and how 1000-qubit processors will unravel classical asymmetric encryption.',
      date: 'Nov 02, 2026',
      time: '02:00 PM - 03:30 PM',
      stage: 'The Grand Crypt (Main Auditorium)',
      icon: '⚛️',
    },
  ];

  const toggleReserve = (idx: number) => {
    setReserved((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="section content-block" id="speakers">
      <div className="container">
        <div className="speakers__header">
          <p className="section-label">⚡ Luminary Minds</p>
          <h2 className="section-title heading-gradient">Keynote Conjurers</h2>
          <p className="section-lead">
            Industry pioneers sharing groundbreaking research and forbidden knowledge.
            Reserve your seat early to secure auditorium admission.
          </p>
        </div>

        <div className="speakers__grid">
          {speakers.map((sp, idx) => (
            <article key={idx} className="speakers__card">
              <div className="speakers__card-top">
                <span className="speakers__icon">{sp.icon}</span>
                <div className="speakers__meta">
                  <span className="speakers__date-tag">🗓️ {sp.date} • {sp.time}</span>
                  <span className="speakers__stage-tag">📍 {sp.stage}</span>
                </div>
              </div>

              <div className="speakers__body">
                <span className="speakers__org">{sp.org}</span>
                <h3 className="speakers__name">{sp.name}</h3>
                <h4 className="speakers__topic">&ldquo;{sp.topic}&rdquo;</h4>
                <p className="speakers__desc">{sp.desc}</p>
              </div>

              <div className="speakers__footer">
                <button
                  type="button"
                  className={`speakers__reserve-btn ${reserved[idx] ? 'speakers__reserve-btn--active' : ''}`}
                  onClick={() => toggleReserve(idx)}
                >
                  {reserved[idx] ? '✓ Seat Reserved' : 'Reserve Front Seat'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. MERCHANDISE SECTION (The Coven Vault)
───────────────────────────────────────────────────────────── */
export function Merchandise() {
  const [viewSide, setViewSide] = useState<'front' | 'back'>('front');
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('Washed Black');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    nameOnTshirt: '',
    yourName: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const product = {
    id: 'tshirt',
    name: 'Tachyon 26 Official Fest T-Shirt',
    tagline: '240 GSM pre-shrunk vintage combed cotton with neon cyber-specter circuitry and custom name print.',
    price: '₹499',
    origPrice: '₹799',
    badge: '⚡ Official Fest Edition',
    hasBackView: true,
    colors: ['Washed Black', 'Phantom Charcoal', 'Ember Orange'],
  };

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.nameOnTshirt.trim()) {
      newErrors.nameOnTshirt = 'Please enter the name to print on the T-shirt';
    }
    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Please enter your name';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setOrderSubmitted(true);
  };

  const handleCloseModal = () => {
    setOrderModalOpen(false);
    setTimeout(() => {
      setOrderSubmitted(false);
    }, 300);
  };

  return (
    <section className="section merch" id="merchandise">
      <div className="container">
        <div className="merch__header">
          <p className="section-label">⚡ Official Merchandise</p>
          <h2 className="section-title heading-gradient">The Coven Vault</h2>
          <p className="section-lead">
            Official Tachyon 26 commemorative apparel. Heavyweight 240 GSM fabric with personalized custom name printing.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="merch__showcase">
          {/* Visual Mockup Display */}
          <div className="merch__visual-pane">
            <div className="merch__visual-frame">
              <div className="merch__view-toggle">
                <button
                  type="button"
                  className={`merch__view-btn ${viewSide === 'front' ? 'merch__view-btn--active' : ''}`}
                  onClick={() => setViewSide('front')}
                >
                  Front View
                </button>
                <button
                  type="button"
                  className={`merch__view-btn ${viewSide === 'back' ? 'merch__view-btn--active' : ''}`}
                  onClick={() => setViewSide('back')}
                >
                  Back View
                </button>
              </div>

              {/* Graphic Mockup Area */}
              <div className="merch__mockup-card">
                <div className="merch__mockup-art">
                  <div className="merch__apparel-preview">
                    <div className="merch__tee-outline">
                      <span className="merch__apparel-badge">{viewSide.toUpperCase()}</span>
                      {viewSide === 'front' ? (
                        <div className="merch__graphic-center">
                          <span className="merch__emblem-bat">💀</span>
                          <span className="merch__emblem-text">CYBER SPECTER</span>
                          <small className="merch__emblem-sub">TACHYON 26 FEST TEE</small>
                        </div>
                      ) : (
                        <div className="merch__graphic-center">
                          <span className="merch__emblem-rune">PORT 666 • SYN ACK</span>
                          <span className="merch__emblem-big" style={{ fontSize: '1.35rem' }}>
                            {formData.nameOnTshirt.trim() ? formData.nameOnTshirt.toUpperCase() : 'YOUR NAME'}
                          </span>
                          <small className="merch__emblem-sub">CUSTOM NAME PRINT</small>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="merch__stock-badge">
                  <span>🔥 Limited Batch: Custom Print Drop Closing Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Customization Pane */}
          <div className="merch__detail-pane">
            <div className="merch__detail-badge">{product.badge}</div>
            <h3 className="merch__detail-title">{product.name}</h3>
            <p className="merch__detail-desc">{product.tagline}</p>

            <div className="merch__price-row">
              <span className="merch__price-current">{product.price}</span>
              <span className="merch__price-orig">{product.origPrice}</span>
              <span className="merch__price-discount">Save 38%</span>
            </div>

            {/* Color selection */}
            <div className="merch__option-group">
              <label className="merch__option-label">Colorway: <strong>{selectedColor}</strong></label>
              <div className="merch__color-pills">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`merch__color-pill ${selectedColor === c ? 'merch__color-pill--active' : ''}`}
                    onClick={() => setSelectedColor(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="merch__option-group">
              <label className="merch__option-label">Select Size: <strong>{selectedSize}</strong></label>
              <div className="merch__size-grid">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`merch__size-btn ${selectedSize === s ? 'merch__size-btn--active' : ''}`}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Perks list */}
            <ul className="merch__perks-list">
              <li>✓ Personalized custom name printed on the back</li>
              <li>✓ Pick up directly at the campus Crypt Hub on Fest Day</li>
              <li>✓ Official Tachyon hologram verification tag included</li>
            </ul>

            <div className="merch__actions">
              <button
                type="button"
                className="btn-primary merch__buy-btn"
                onClick={() => setOrderModalOpen(true)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Now Order Form Modal */}
      <AnimatePresence>
        {orderModalOpen && (
          <div
            className="events__modal-backdrop"
            onClick={handleCloseModal}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="events__modal"
              style={{ maxWidth: '520px' }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
            >
              <button
                type="button"
                className="events__modal-close"
                onClick={handleCloseModal}
              >
                ✕
              </button>

              {!orderSubmitted ? (
                <div>
                  <h3 style={{ color: '#ffd875', marginBottom: '0.4rem', fontSize: '1.45rem' }}>
                    Order Fest T-Shirt
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0 0 1rem' }}>
                    Enter your details to customize and order your official Tachyon 26 T-shirt.
                  </p>

                  <div className="merch-form__summary">
                    <span>{product.name} ({selectedColor}, Size {selectedSize})</span>
                    <strong>{product.price}</strong>
                  </div>

                  <form className="merch-form" onSubmit={handleSubmitOrder}>
                    <div className="merch-form__group">
                      <label className="merch-form__label">
                        Name to print on T-shirt *
                      </label>
                      <input
                        type="text"
                        className="merch-form__input"
                        placeholder="e.g. CYBER_WARRIOR"
                        value={formData.nameOnTshirt}
                        onChange={(e) => handleInputChange('nameOnTshirt', e.target.value)}
                        maxLength={24}
                      />
                      {errors.nameOnTshirt && (
                        <p className="merch-form__error">{errors.nameOnTshirt}</p>
                      )}
                    </div>

                    <div className="merch-form__group">
                      <label className="merch-form__label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="merch-form__input"
                        placeholder="e.g. Alex Morgan"
                        value={formData.yourName}
                        onChange={(e) => handleInputChange('yourName', e.target.value)}
                      />
                      {errors.yourName && (
                        <p className="merch-form__error">{errors.yourName}</p>
                      )}
                    </div>

                    <div className="merch-form__group">
                      <label className="merch-form__label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="merch-form__input"
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      {errors.email && (
                        <p className="merch-form__error">{errors.email}</p>
                      )}
                    </div>

                    <div className="merch-form__group">
                      <label className="merch-form__label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        className="merch-form__input"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        maxLength={15}
                      />
                      {errors.phone && (
                        <p className="merch-form__error">{errors.phone}</p>
                      )}
                    </div>

                    <button type="submit" className="btn-primary merch-form__submit">
                      Confirm & Buy Now • {product.price}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="merch__modal-inner">
                  <span className="merch__modal-icon">🎉</span>
                  <h3>Order Placed Successfully!</h3>
                  <p>
                    Thank you, <strong>{formData.yourName}</strong>! Your customized fest T-shirt order is registered.
                  </p>

                  <div className="merch-success-details">
                    <div>
                      <span>Name on T-Shirt:</span>
                      <strong>{formData.nameOnTshirt.toUpperCase()}</strong>
                    </div>
                    <div>
                      <span>Customer:</span>
                      <strong>{formData.yourName}</strong>
                    </div>
                    <div>
                      <span>Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div>
                      <span>Phone:</span>
                      <span>{formData.phone}</span>
                    </div>
                    <div>
                      <span>Size & Color:</span>
                      <strong>{selectedSize} • {selectedColor}</strong>
                    </div>
                    <div>
                      <span>Amount:</span>
                      <strong>{product.price}</strong>
                    </div>
                  </div>

                  <p className="merch__modal-note">
                    A confirmation has been sent to your email. Collect your personalized T-shirt at the Central Audi Merch Vault during fest check-in.
                  </p>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleCloseModal}
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. SPONSORS SECTION (Patrons & Covens)
───────────────────────────────────────────────────────────── */
export function Sponsors() {
  const tiers = [
    {
      tierName: '👑 Title Conjurers',
      badge: 'Title Partner',
      partners: [
        { name: 'Google Cloud', desc: 'AI & Cloud Infrastructure Partner', glyph: '☁️' },
        { name: 'GitHub', desc: 'Developer Community & Open Source Patron', glyph: '🐙' },
      ],
    },
    {
      tierName: '⚡ Power Alchemists',
      badge: 'Powered By',
      partners: [
        { name: 'NVIDIA', desc: 'Accelerated Compute & GPU Hardware', glyph: '👁️' },
        { name: 'Intel', desc: 'Next-Gen Silicon & Edge Computing', glyph: '⚡' },
      ],
    },
    {
      tierName: '🛡️ Cyber Defense & Cloud Patrons',
      badge: 'Associate Partners',
      partners: [
        { name: 'AWS', desc: 'Cloud Computing & Hackathon Credits', glyph: '🌐' },
        { name: 'Cloudflare', desc: 'Network Security & DDoS Shield', glyph: '🛡️' },
        { name: 'Hack The Box', desc: 'CTF Arena & Cyber Bounties', glyph: '📦' },
      ],
    },
    {
      tierName: '🍕 Midnight Fuel & Swag Allies',
      badge: 'Refreshment & Relics',
      partners: [
        { name: 'Red Bull', desc: 'Official Energy Fuel Partner', glyph: '⚡' },
        { name: 'Monster Energy', desc: 'Overnight Coding Fuel', glyph: '🔋' },
        { name: 'GeeksforGeeks', desc: 'Coding Learning Platform', glyph: '💻' },
      ],
    },
  ];

  return (
    <section className="section content-block content-block--alt" id="sponsors">
      <div className="container">
        <div className="sponsors__header">
          <p className="section-label">⚡ Grand Alliances</p>
          <h2 className="section-title heading-gradient">Patrons & Covens</h2>
          <p className="section-lead">
            Supported by industry leaders empowering our students with cash bounties,
            cloud credits, and cutting-edge hardware.
          </p>
        </div>

        <div className="sponsors__tiers-wrap">
          {tiers.map((t, idx) => (
            <div key={idx} className="sponsors__tier-block">
              <div className="sponsors__tier-heading">
                <h3>{t.tierName}</h3>
                <span className="sponsors__tier-badge">{t.badge}</span>
              </div>
              <div className="sponsors__cards-grid">
                {t.partners.map((partner, pIdx) => (
                  <div key={pIdx} className="sponsors__card">
                    <span className="sponsors__glyph">{partner.glyph}</span>
                    <h4 className="sponsors__partner-name">{partner.name}</h4>
                    <p className="sponsors__partner-desc">{partner.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Call to Action */}
        <div className="sponsors__cta-box">
          <div className="sponsors__cta-copy">
            <h3>Want to Partner with Tachyon 26?</h3>
            <p>
              Showcase your developer tools, hire top engineering talent, and connect with
              over 10,000 students from leading colleges.
            </p>
          </div>
          <a href="mailto:sponsors@tachyon26.fest" className="btn-primary">
            Download Sponsor Deck (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. CONTACT SECTION (Haunted Dispatch & FAQ)
───────────────────────────────────────────────────────────── */
export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'Can students from other colleges & universities participate?',
      a: 'Yes, absolutely! Tachyon 26 is a national-level festival. Students from any recognized college or university with a valid student ID are welcome to register for all technical challenges, hackathons, and keynotes.',
    },
    {
      q: 'Is there any entry fee to attend the fest?',
      a: 'General campus admission, keynote speaker sessions, and exhibitions are 100% free of charge! Some competitive events (like RoboWars and the Flagship Hackathon) have small team entry pools that directly feed into the prize pool.',
    },
    {
      q: 'Will accommodation & meals be provided for overnight events?',
      a: 'Yes. Participants in the 24-hour hackathon and traveling outstation teams will be provided secured dormitory rest facilities, cafeteria vouchers, and continuous midnight refreshments.',
    },
    {
      q: 'How do I reach the campus on Fest Days?',
      a: 'Our main engineering campus is connected via metro and shuttle buses operating every 15 minutes from the central train station. Dedicated parking is available for two-wheelers and four-wheelers.',
    },
  ];

  return (
    <section className="section content-block" id="contact">
      <div className="container">
        <div className="contact__header">
          <p className="section-label">⚡ Reach the Coven</p>
          <h2 className="section-title heading-gradient">Haunted Dispatch</h2>
          <p className="section-lead">
            Have queries regarding event rules, team registrations, or campus logistics?
            Inscribe your message to receive swift transmission from our helpdesk.
          </p>
        </div>

        <div className="contact__split-grid">
          {/* Interactive Form */}
          <div className="contact__form-card">
            <h3 className="contact__form-title">Send a Transmission</h3>
            {formSubmitted ? (
              <div className="contact__success-state">
                <span className="contact__success-icon">✨</span>
                <h4>Transmission Received!</h4>
                <p>
                  Your message has been inscribed into our dispatch scrolls. Our council
                  will send an electronic raven to your email within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send another query
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__field">
                  <label htmlFor="c-name">Mortal Name</label>
                  <input
                    id="c-name"
                    required
                    type="text"
                    placeholder="E.g. Vikramaditya"
                    className="contact__input"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="c-email">Spectral Email</label>
                  <input
                    id="c-email"
                    required
                    type="email"
                    placeholder="you@college.edu"
                    className="contact__input"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="c-topic">Domain / Query</label>
                  <select id="c-topic" className="contact__select">
                    <option value="events">Event Rules & Registration</option>
                    <option value="hackathon">Hack in the Crypt Hackathon</option>
                    <option value="sponsorship">Sponsorship & Stalls</option>
                    <option value="accommodation">Accommodation & Travel</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="c-msg">Inscribe Message</label>
                  <textarea
                    id="c-msg"
                    required
                    rows={4}
                    placeholder="Write your query or request..."
                    className="contact__textarea"
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit-btn">
                  Dispatch Message →
                </button>
              </form>
            )}
          </div>

          {/* Quick Coordinates & Info */}
          <div className="contact__info-pane">
            <div className="contact__info-card">
              <span className="contact__info-glyph">📍</span>
              <h4>Lair Coordinates</h4>
              <p>
                Department of Engineering & Tech Sciences<br />
                Central Campus, Innovation Hub, Building B<br />
                Pin: 400001
              </p>
            </div>

            <div className="contact__info-card">
              <span className="contact__info-glyph">📞</span>
              <h4>Hotline Helplines</h4>
              <p>
                General Helpdesk: +91 98765-43210<br />
                Emergency Night Desk: +91 98765-43211
              </p>
            </div>

            <div className="contact__info-card">
              <span className="contact__info-glyph">✉️</span>
              <h4>Direct Scrolls</h4>
              <p>
                General: <a href="mailto:contact@tachyon26.fest">contact@tachyon26.fest</a><br />
                Convener: <a href="mailto:convener@tachyon26.fest">convener@tachyon26.fest</a>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="contact__faq-section">
          <p className="section-label">Common Queries</p>
          <h3 className="contact__faq-heading">Frequently Questioned Mysteries</h3>
          <div className="contact__faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`contact__faq-item ${activeFaq === idx ? 'contact__faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="contact__faq-q"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <span className="contact__faq-toggle">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="contact__faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. FOOTER SECTION
───────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__mark-wrap">
          <Link to="/" className="footer__brand-link" aria-label="Tachyon 26 Home">
            <img src={logoWhite} alt="Tachyon 26" className="footer__logo-img" />
          </Link>
          <span className="footer__badge">Halloween Edition</span>
        </div>
        <p className="footer__credit">
          Forged by the Tachyon Engineering Directorate. Built with React 19, Framer Motion, and dark magic.
        </p>
        <nav className="footer__nav" aria-label="Footer Navigation">
          <a href="/#top">Home</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/speakers">Speakers</a>
          <a href="/merchandise">Merchandise</a>
          <a href="/sponsors">Sponsors</a>
          <a href="/contact">Contact</a>
        </nav>
        <p className="footer__copy">© 2026 Tachyon Tech Fest. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

