import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../data/events';
import './Sidebar.css';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

// Scattered halloween bulbs — positioned diagonally, not in a line
const BULBS = [
  { top:  8, left: 12, color: '#ff4400', glow: 'rgba(255,80,0,0.9)',   delay: 0.0 },
  { top: 18, left: 55, color: '#aa00ff', glow: 'rgba(160,0,255,0.8)',  delay: 0.3 },
  { top: 28, left: 28, color: '#ff8800', glow: 'rgba(255,140,0,0.9)',  delay: 0.7 },
  { top: 38, left: 72, color: '#00cc44', glow: 'rgba(0,200,60,0.8)',   delay: 0.2 },
  { top: 48, left: 15, color: '#aa00ff', glow: 'rgba(160,0,255,0.8)',  delay: 1.0 },
  { top: 55, left: 48, color: '#ff4400', glow: 'rgba(255,80,0,0.9)',   delay: 0.5 },
  { top: 62, left: 82, color: '#ff8800', glow: 'rgba(255,140,0,0.9)',  delay: 0.8 },
  { top: 72, left: 35, color: '#00cc44', glow: 'rgba(0,200,60,0.8)',   delay: 0.1 },
  { top: 80, left: 68, color: '#ff4400', glow: 'rgba(255,80,0,0.9)',   delay: 1.2 },
  { top: 88, left: 20, color: '#aa00ff', glow: 'rgba(160,0,255,0.8)',  delay: 0.4 },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const ref = useRef<HTMLElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${open ? 'sidebar-overlay--visible' : ''}`}
        aria-hidden
      />

      <aside ref={ref} className={`sidebar ${open ? 'sidebar--open' : ''}`} aria-label="Site navigation">
        {/* Scattered halloween lights in the background */}
        <div className="sidebar__lights" aria-hidden>
          {BULBS.map((b, i) => (
            <span
              key={i}
              className="sidebar__bulb"
              style={{
                top: `${b.top}%`,
                left: `${b.left}%`,
                '--b-color': b.color,
                '--b-glow': b.glow,
                animationDelay: `${b.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="sidebar__header">
          <NavLink to="/" className="sidebar__brand" end onClick={onClose}>
            <span className="sidebar__mark">T</span>
            <span className="sidebar__name">Tachyon <em>26</em></span>
          </NavLink>
          <button className="sidebar__close" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        <p className="sidebar__tag">Tech Fest 2026</p>

        <nav className="sidebar__nav" aria-label="Site sections">
          {navRoutes.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Halloween pumpkin decoration */}
        <div className="sidebar__deco" aria-hidden>
          <svg className="sidebar__pumpkin" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* stem */}
            <path d="M40 8 Q43 2 48 4 Q44 6 42 10" fill="#4a7c3f"/>
            {/* left lobe */}
            <ellipse cx="22" cy="38" rx="13" ry="16" fill="#c45c10"/>
            {/* middle lobe */}
            <ellipse cx="40" cy="34" rx="16" ry="19" fill="#e06b12"/>
            {/* right lobe */}
            <ellipse cx="58" cy="38" rx="13" ry="16" fill="#c45c10"/>
            {/* face — left eye */}
            <path d="M26 34 L29 30 L32 34 Z" fill="#1a0a00"/>
            {/* face — right eye */}
            <path d="M48 34 L51 30 L54 34 Z" fill="#1a0a00"/>
            {/* face — nose */}
            <path d="M39 38 L41 36 L43 38 L41 40 Z" fill="#1a0a00"/>
            {/* face — mouth */}
            <path d="M30 44 Q40 52 50 44" stroke="#1a0a00" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M32 44 L34 47 M38 46 L38 50 M44 46 L44 50 M48 44 L46 47" stroke="#1a0a00" strokeWidth="1.5" strokeLinecap="round"/>
            {/* glow */}
            <ellipse cx="40" cy="38" rx="18" ry="20" fill="rgba(255,140,0,0.08)"/>
          </svg>
          <p className="sidebar__deco-text">🕸 Tachyon Dev Team 🕸</p>
        </div>
      </aside>
    </>
  );
}
