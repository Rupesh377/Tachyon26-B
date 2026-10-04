import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { departments } from '../data/events';
import './Events.css';

type EventsProps = {
  standalone?: boolean;
};

export function Events({ standalone }: EventsProps) {
  const [activeId, setActiveId] = useState(departments[0].id);
  const active = departments.find((d) => d.id === activeId) ?? departments[0];

  return (
    <section className={`section events ${standalone ? 'events--page' : ''}`}>
      <div className="container">
        <p className="section-label">Programme</p>
        <h2 className="section-title heading-gradient">Our events</h2>
        <p className="section-lead">
          Pick a department — cards mirror last year&apos;s layout, with room for your
          logos and registration links.
        </p>

        <div className="events__tabs" role="tablist" aria-label="Departments">
          {departments.map((dept) => (
            <button
              key={dept.id}
              type="button"
              role="tab"
              aria-selected={dept.id === activeId}
              className={`events__tab ${dept.id === activeId ? 'events__tab--active' : ''}`}
              onClick={() => setActiveId(dept.id)}
            >
              {dept.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className="events__grid"
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {active.events.map((event) => (
              <article key={event.id} className="events__card">
                <div className="events__card-logo" aria-hidden>
                  {event.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 3)}
                </div>
                <div>
                  <h3 className="events__card-title">{event.name}</h3>
                  <p className="events__card-tagline">{event.tagline}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
