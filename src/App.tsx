import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { BatIntro } from './components/BatIntro';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import {
  AboutPage,
  TeamPage,
  SpeakersPage,
  MerchandisePage,
  SponsorsPage,
  ContactPage,
} from './pages/ContentPages';

function App() {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    setIntroDone(true);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introDone && <BatIntro key="intro" onComplete={finishIntro} />}
      </AnimatePresence>

      {introDone && (
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="speakers" element={<SpeakersPage />} />
              <Route path="merchandise" element={<MerchandisePage />} />
              <Route path="sponsors" element={<SponsorsPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
