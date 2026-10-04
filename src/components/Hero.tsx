import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

// Scary pumpkin traced from reference image:
// rounded orange body with ribs, curly green stem, dark thorn tendrils,
// glowing angry eyes (yellow-white inner glow), huge jagged toothed mouth
function DecoPumpkin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 210" fill="none" aria-hidden>
      <defs>
        <radialGradient id="pgBody" cx="45%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#f0a030"/>
          <stop offset="45%" stopColor="#d45e0a"/>
          <stop offset="100%" stopColor="#7a2800"/>
        </radialGradient>
        <radialGradient id="pgEye" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffffa0"/>
          <stop offset="40%" stopColor="#ffcc00"/>
          <stop offset="100%" stopColor="#ff6600" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="pgMouth" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ff8800" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#ff4400" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* ── dark tendrils behind pumpkin ── */}
      <g fill="#0e0a08">
        {/* top-left tendril */}
        <path d="M72 42 C55 20 30 18 18 8 C28 22 40 28 52 38 C38 26 22 30 14 22 C24 36 44 36 58 48"/>
        {/* top-right tendril */}
        <path d="M128 42 C145 20 170 18 182 8 C172 22 160 28 148 38 C162 26 178 30 186 22 C176 36 156 36 142 48"/>
        {/* left tendrils */}
        <path d="M48 80 C22 70 10 55 4 40 C12 56 20 66 34 76 C18 70 8 82 6 96 C16 84 32 80 46 88"/>
        <path d="M42 110 C18 108 6 122 2 138 C12 124 26 118 40 120"/>
        {/* right tendrils */}
        <path d="M152 80 C178 70 190 55 196 40 C188 56 180 66 166 76 C182 70 192 82 194 96 C184 84 168 80 154 88"/>
        <path d="M158 110 C182 108 194 122 198 138 C188 124 174 118 160 120"/>
        {/* bottom tendrils */}
        <path d="M70 178 C55 188 44 202 40 210 C50 198 62 192 74 186"/>
        <path d="M100 182 C100 194 96 204 92 210 C98 200 102 190 100 182"/>
        <path d="M130 178 C145 188 156 202 160 210 C150 198 138 192 126 186"/>
      </g>

      {/* ── pumpkin body ── */}
      {/* side lobes for rounded ribbed look */}
      <ellipse cx="56" cy="118" rx="34" ry="52" fill="#b84808"/>
      <ellipse cx="144" cy="118" rx="34" ry="52" fill="#b84808"/>
      {/* main center body */}
      <ellipse cx="100" cy="112" rx="62" ry="68" fill="url(#pgBody)"/>

      {/* rib highlight lines */}
      <path d="M100 52 Q96 80 96 112 Q96 144 100 172" stroke="#c86010" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M78 56 Q72 84 73 114 Q74 144 80 170" stroke="#7a2800" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M122 56 Q128 84 127 114 Q126 144 120 170" stroke="#7a2800" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* top highlight */}
      <ellipse cx="88" cy="72" rx="20" ry="14" fill="#f0c060" opacity="0.25"/>

      {/* ── curly stem ── */}
      <path d="M100 48 C102 38 110 28 116 22 C122 16 124 10 118 6 C114 4 110 8 112 14 C114 18 118 18 116 22"
        stroke="#2d6b22" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M100 48 C98 40 92 34 88 30" stroke="#3d8a2e" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* ── LEFT eye — angry slanted, glowing ── */}
      {/* eye socket black */}
      <path d="M54 98 C58 88 72 86 78 90 C82 93 80 104 74 108 C66 112 54 108 54 98 Z" fill="#1a0500"/>
      {/* brow slash — inner high outer low (angry) */}
      <path d="M50 90 C56 83 70 82 80 86" stroke="#5a1800" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      {/* eye glow */}
      <path d="M56 98 C59 90 71 88 76 92 C79 95 77 104 72 107 C65 110 56 106 56 98 Z" fill="url(#pgEye)" opacity="0.9"/>

      {/* ── RIGHT eye — mirrored ── */}
      <path d="M122 98 C128 88 142 86 146 90 C150 93 148 104 142 108 C134 112 122 108 122 98 Z" fill="#1a0500"/>
      <path d="M120 86 C130 82 144 83 150 90" stroke="#5a1800" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M124 98 C129 90 141 88 144 92 C147 95 145 104 140 107 C133 110 124 106 124 98 Z" fill="url(#pgEye)" opacity="0.9"/>

      {/* ── huge jagged mouth ── */}
      {/* mouth outer black shape */}
      <path d="
        M52 128
        C56 122 62 120 66 124
        L70 118 L76 128 L82 114 L88 128
        L94 112 L100 130
        L106 112 L112 128 L118 114 L124 128
        L130 118 L134 124 C138 120 144 122 148 128
        C144 148 130 162 100 164
        C70 162 56 148 52 128 Z
      " fill="#1a0500"/>
      {/* mouth inner glow */}
      <path d="
        M56 130
        C60 125 63 123 66 126
        L70 121 L75 129 L82 117 L88 130
        L94 115 L100 132
        L106 115 L112 130 L118 117 L124 129
        L130 121 L134 126 C137 123 140 125 144 130
        C140 146 128 158 100 160
        C72 158 60 146 56 130 Z
      " fill="url(#pgMouth)" opacity="0.8"/>

      {/* bottom teeth (lower jaw) */}
      <path d="M68 150 L72 140 L76 150 M86 154 L90 142 L94 154 M106 154 L110 142 L114 154 M124 150 L128 140 L132 150"
        fill="#1a0500"/>
    </svg>
  );
}

// Candle SVG
function DecoCandle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 80" fill="none" aria-hidden>
      {/* flame */}
      <path d="M20 8 C18 14 14 18 15 22 C16 27 24 27 25 22 C26 18 22 14 20 8 Z" fill="#e8a838"/>
      <path d="M20 12 C19 16 17 19 17.5 22 C18 25 22 25 22.5 22 C23 19 21 16 20 12 Z" fill="#fff5c0"/>
      {/* wax drip */}
      <rect x="14" y="24" width="12" height="46" rx="3" fill="#e8dcc8"/>
      <path d="M14 40 Q10 44 12 50 L14 50 Z" fill="#d4c8b4"/>
      <path d="M26 35 Q30 39 28 45 L26 45 Z" fill="#d4c8b4"/>
      {/* base */}
      <rect x="11" y="68" width="18" height="5" rx="2" fill="#c8b89a"/>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero__glow" aria-hidden />

      {/* Candles on the sides */}
      <DecoCandle className="hero__deco-candle hero__deco-candle--left" />
      <DecoCandle className="hero__deco-candle hero__deco-candle--right" />

      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">Tech Fest 2026</p>
          <h1 className="hero__title heading-gradient">Welcome to the haunt.</h1>
          <p className="hero__lead">
            Tachyon returns under a Halloween sky — workshops, competitions, and nights
            worth staying awake for. Same fest spirit as always, dressed for October.
          </p>
          <div className="hero__actions">
            <Link to="/events" className="btn-primary">
              Explore events
            </Link>
            <Link to="/about" className="btn-ghost">
              About the fest
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero__media"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pumpkin decoration above the video frame */}
          <div className="hero__pumpkin-wrap">
            <DecoPumpkin className="hero__deco-pumpkin" />
            <div className="hero__pumpkin-glow" aria-hidden />
          </div>

          <div className="hero__video-frame">
            <div className="hero__video-placeholder">
              <button type="button" className="hero__play" aria-label="Watch previous event">
                <span className="hero__play-icon" />
              </button>
              <p>Watch previous event</p>
            </div>
          </div>
          <p className="hero__video-note">
            Replace this block with your promo reel when it&apos;s ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
