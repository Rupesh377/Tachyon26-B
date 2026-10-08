import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { navRoutes } from '../data/events';
import logoWhite from '../assets/Tachyon26logo-white.png';
import woodenBoardImg from '../assets/wooden-board-clean.png';
import './Sidebar.css';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  const ref = useRef<HTMLElement>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Close on outside click (safeguarded against hamburger / close button race condition)
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      // CRITICAL: ignore clicks on the hamburger button or close button so it doesn't close & reopen in 1ms!
      if (target?.closest('.hamburger') || target?.closest('.sidebar__board-close')) {
        return;
      }
      if (ref.current && !ref.current.contains(target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [open, onClose]);

  return (
    <>
      {/* Background Dim Overlay */}
      <div
        className={`sidebar-overlay ${open ? 'sidebar-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden
      />

      {/* Haunted Weathered Wooden Signboard Sidebar (Image Reference) */}
      <aside
        ref={ref}
        className={`sidebar sidebar--wooden-board ${open ? 'sidebar--open' : ''}`}
        aria-label="Site navigation"
      >
        <div className="sidebar__board-frame">
          <img
            src={woodenBoardImg}
            alt=""
            className="sidebar__board-bg-img"
            aria-hidden
          />

          {/* Board Content Overlaid on the Weathered Wood */}
          <div className="sidebar__board-content">
            {/* Top Close Button on the Signboard */}
            <button
              type="button"
              className="sidebar__board-close"
              onClick={onClose}
              aria-label="Close navigation"
              title="Close"
            >
              ✕
            </button>

            {/* Top Title Banner */}
            <div className="sidebar__board-header">
              <span className="sidebar__board-subtitle">⚡ FEST NAVIGATION ⚡</span>
            </div>

            {/* Navigation Links inside the Wooden Board */}
            <nav className="sidebar__board-nav" aria-label="Main links">
              {navRoutes.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar__board-link ${isActive ? 'sidebar__board-link--active' : ''}`
                  }
                >
                  <span className="sidebar__board-bullet">✦</span>
                  <span className="sidebar__board-label">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Bottom Original Tachyon 26 Logo inside Wooden Board */}
            <div className="sidebar__board-footer">
              <img
                src={logoWhite}
                alt="Tachyon 26"
                className="sidebar__board-logo"
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
