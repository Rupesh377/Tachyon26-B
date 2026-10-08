import { useState, useCallback } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import logoWhite from '../assets/Tachyon26logo-white.png';
import { Sidebar } from '../components/Sidebar';
import { HamburgerBtn } from '../components/HamburgerBtn';
import { HalloweenDecorations } from '../components/HalloweenDecorations';
import './MainLayout.css';

export function MainLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="shell">
      <HalloweenDecorations />

      {/* Tachyon 26 Logo — present at top-left of every page in same place, scrolls away with page */}
      <div className="shell__top-bar">
        <Link to="/" className="shell__brand" aria-label="Tachyon 26 Home">
          <img src={logoWhite} alt="Tachyon 26" className="shell__brand-img" />
        </Link>
      </div>

      <HamburgerBtn isOpen={sidebarOpen} onClick={toggleSidebar} />
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />
      <div className="shell__main">
        <Outlet />
      </div>
    </div>
  );
}
