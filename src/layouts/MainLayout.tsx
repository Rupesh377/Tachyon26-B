import { useState, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Sidebar } from '../components/Sidebar';
import { HamburgerBtn } from '../components/HamburgerBtn';
import { HalloweenDecorations } from '../components/HalloweenDecorations';
import './MainLayout.css';

export function MainLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
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
      <HamburgerBtn onClick={openSidebar} />
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />
      <div className="shell__main">
        <Outlet />
      </div>
    </div>
  );
}
