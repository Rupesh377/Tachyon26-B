import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { departments, type EventItem, type EventCategory } from '../data/events';
import './Events.css';

type EventsProps = {
  standalone?: boolean;
};

const CATEGORIES: ('All' | EventCategory)[] = [
  'All',
  'Hackathon',
  'Coding',
  'Robotics',
  'Gaming & VR',
  'Design',
  'Workshop',
];

export function Events({ standalone }: EventsProps) {
  const [activeDeptId, setActiveDeptId] = useState<string>('flagship');
  const [selectedCategory, setSelectedCategory] = useState<'All' | EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({});

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    if (selectedEvent) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedEvent]);

  // Compute all events or filtered by department
  const filteredEvents = useMemo(() => {
    let list: (EventItem & { deptLabel: string })[] = [];

    if (activeDeptId === 'all') {
      departments.forEach((dept) => {
        dept.events.forEach((ev) => {
          list.push({ ...ev, deptLabel: dept.label });
        });
      });
    } else {
      const dept = departments.find((d) => d.id === activeDeptId) || departments[0];
      dept.events.forEach((ev) => {
        list.push({ ...ev, deptLabel: dept.label });
      });
    }

    if (selectedCategory !== 'All') {
      list = list.filter((ev) => ev.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (ev) =>
          ev.name.toLowerCase().includes(q) ||
          ev.tagline.toLowerCase().includes(q) ||
          (ev.description && ev.description.toLowerCase().includes(q)) ||
          (ev.badge && ev.badge.toLowerCase().includes(q))
      );
    }

    return list;
  }, [activeDeptId, selectedCategory, searchQuery]);

  const handleRegister = (id: string) => {
    setRegisteredEvents((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={`section events ${standalone ? 'events--page' : ''}`}>
      <div className="container">
        <div className="events__header">
          <p className="section-label">⚡ Rituals & Competitions</p>
          <h2 className="section-title heading-gradient">The Haunted Arena</h2>
          <p className="section-lead">
            Step into our nocturnal battlegrounds. Compete for bounties, code through the
            witching hours, and claim your place in the crypt.
          </p>
        </div>

        {/* ── Search Bar ── */}
        <div className="events__search-wrap">
          <div className="events__search-box">
            <span className="events__search-icon" aria-hidden>🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rituals, challenges, hackathons, or prizes..."
              className="events__search-input"
              aria-label="Search events"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="events__search-clear"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ── Category Pill Filters ── */}
        <div className="events__category-bar" role="tablist" aria-label="Event Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`events__cat-pill ${selectedCategory === cat ? 'events__cat-pill--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? '🌟 All Types' : cat}
            </button>
          ))}
        </div>

        {/* ── Department Tabs ── */}
        <div className="events__tabs" role="tablist" aria-label="Departments">
          <button
            type="button"
            role="tab"
            aria-selected={activeDeptId === 'all'}
            className={`events__tab ${activeDeptId === 'all' ? 'events__tab--active' : ''}`}
            onClick={() => setActiveDeptId('all')}
          >
            All Departments
          </button>
          {departments.map((dept) => (
            <button
              key={dept.id}
              type="button"
              role="tab"
              aria-selected={dept.id === activeDeptId}
              className={`events__tab ${dept.id === activeDeptId ? 'events__tab--active' : ''}`}
              onClick={() => setActiveDeptId(dept.id)}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* ── Events Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeDeptId}-${selectedCategory}-${searchQuery}`}
            className="events__grid"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {filteredEvents.length === 0 ? (
              <div className="events__empty">
                <span className="events__empty-icon">🕸️</span>
                <h3>No dark rituals found</h3>
                <p>Try clearing your search query or choosing another category filter.</p>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setActiveDeptId('flagship');
                  }}
                >
                  Reset filters
                </button>
              </div>
            ) : (
              filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="events__card"
                  onClick={() => setSelectedEvent(event)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedEvent(event);
                    }
                  }}
                  role="button"
                  aria-haspopup="dialog"
                >
                  <div className="events__card-top">
                    <span className="events__card-icon">{event.icon || '🦇'}</span>
                    <div className="events__card-badges">
                      {event.badge && <span className="events__card-badge">{event.badge}</span>}
                      {event.prize && <span className="events__card-prize">{event.prize}</span>}
                    </div>
                  </div>

                  <div className="events__card-body">
                    <h3 className="events__card-title">{event.name}</h3>
                    <p className="events__card-tagline">{event.tagline}</p>
                  </div>

                  <div className="events__card-meta">
                    {event.date && (
                      <span className="events__meta-item">
                        <span aria-hidden>🗓️</span> {event.date}
                      </span>
                    )}
                    {event.venue && (
                      <span className="events__meta-item">
                        <span aria-hidden>📍</span> {event.venue}
                      </span>
                    )}
                  </div>

                  <div className="events__card-footer">
                    <span className="events__inspect-btn">
                      Inspect Ritual →
                    </span>
                    {registeredEvents[event.id] && (
                      <span className="events__registered-pill">✓ Inscribed</span>
                    )}
                  </div>
                </article>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Interactive Event Detail Modal ── */}
      <AnimatePresence>
        {selectedEvent && (
          <div
            className="events__modal-backdrop"
            onClick={() => setSelectedEvent(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="events__modal"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="events__modal-close"
                onClick={() => setSelectedEvent(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="events__modal-header">
                <span className="events__modal-glyph">{selectedEvent.icon || '🎃'}</span>
                <div>
                  <div className="events__modal-pills">
                    {selectedEvent.category && (
                      <span className="events__modal-pill">{selectedEvent.category}</span>
                    )}
                    {selectedEvent.badge && (
                      <span className="events__modal-pill events__modal-pill--gold">
                        {selectedEvent.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="events__modal-title">{selectedEvent.name}</h2>
                  <p className="events__modal-tagline">{selectedEvent.tagline}</p>
                </div>
              </div>

              <div className="events__modal-details-grid">
                <div className="events__modal-info-tile">
                  <span className="events__modal-tile-label">🏆 Bounty / Prize</span>
                  <strong className="events__modal-tile-val events__modal-tile-val--gold">
                    {selectedEvent.prize || 'Certificates & Relics'}
                  </strong>
                </div>
                <div className="events__modal-info-tile">
                  <span className="events__modal-tile-label">👥 Team Size</span>
                  <strong className="events__modal-tile-val">
                    {selectedEvent.teamSize || '1 - 3 Mortals'}
                  </strong>
                </div>
                <div className="events__modal-info-tile">
                  <span className="events__modal-tile-label">🗓️ Date & Time</span>
                  <strong className="events__modal-tile-val">
                    {selectedEvent.date || 'Oct 31, 2026'}{' '}
                    {selectedEvent.time ? `• ${selectedEvent.time}` : ''}
                  </strong>
                </div>
                <div className="events__modal-info-tile">
                  <span className="events__modal-tile-label">📍 Crypt / Venue</span>
                  <strong className="events__modal-tile-val">
                    {selectedEvent.venue || 'Main Campus'}
                  </strong>
                </div>
              </div>

              {selectedEvent.description && (
                <div className="events__modal-section">
                  <h4>About This Challenge</h4>
                  <p>{selectedEvent.description}</p>
                </div>
              )}

              {selectedEvent.rules && selectedEvent.rules.length > 0 && (
                <div className="events__modal-section">
                  <h4>Rules of the Crypt</h4>
                  <ul className="events__modal-rules">
                    {selectedEvent.rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="events__modal-actions">
                {registeredEvents[selectedEvent.id] ? (
                  <div className="events__registered-banner">
                    <span>✨ Team Inscribed! You have registered for {selectedEvent.name}.</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn-primary events__modal-register-btn"
                    onClick={() => handleRegister(selectedEvent.id)}
                  >
                    Enter If You Dare (Register Now)
                  </button>
                )}
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
