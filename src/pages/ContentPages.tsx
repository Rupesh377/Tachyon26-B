import {
  About,
  Team,
  Speakers,
  Merchandise,
  Sponsors,
  Contact,
} from '../components/ContentSections';
import './Pages.css';

export function AboutPage() {
  return (
    <div className="page page__inner">
      <About />
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="page page__inner">
      <Team />
    </div>
  );
}

export function SpeakersPage() {
  return (
    <div className="page page__inner">
      <Speakers />
    </div>
  );
}

export function MerchandisePage() {
  return (
    <div className="page">
      <Merchandise />
    </div>
  );
}

export function SponsorsPage() {
  return (
    <div className="page page__inner">
      <Sponsors />
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="page page__inner">
      <Contact />
    </div>
  );
}
