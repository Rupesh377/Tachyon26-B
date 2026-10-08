import { Events } from '../components/Events';
import { Footer } from '../components/ContentSections';
import './Pages.css';

export function EventsPage() {
  return (
    <div className="page page--dark">
      <Events standalone />
      <Footer />
    </div>
  );
}
