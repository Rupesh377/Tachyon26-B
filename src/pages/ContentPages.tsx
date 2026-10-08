import {
  About,
  Team,
  Speakers,
  Merchandise,
  Sponsors,
  Contact,
  Footer,
} from '../components/ContentSections';
import './Pages.css';

export function AboutPage() {
  return (
    <div className="page page--dark">
      <div className="page__inner">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="page page--dark">
      <div className="page__inner">
        <Team />
      </div>
      <Footer />
    </div>
  );
}

export function SpeakersPage() {
  return (
    <div className="page page--dark">
      <div className="page__inner">
        <Speakers />
      </div>
      <Footer />
    </div>
  );
}

export function MerchandisePage() {
  return (
    <div className="page page--dark">
      <div className="page__inner">
        <Merchandise />
      </div>
      <Footer />
    </div>
  );
}

export function SponsorsPage() {
  return (
    <div className="page page--dark">
      <div className="page__inner">
        <Sponsors />
      </div>
      <Footer />
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="page page--dark">
      <div className="page__inner">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
