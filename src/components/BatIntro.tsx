import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './BatIntro.css';

const HOLD_MS = 1800;
const OPEN_MS = 1400;
const FADE_MS =  700;

type BatIntroProps = { onComplete: () => void };

/* ─────────────────────────────────────────────
   Shared bat path — ears, wide wings, 3 scallops, V-tail
───────────────────────────────────────────── */
const BAT_PATH = `
  M-10,-30 L-18,-55 L-4,-32 L4,-32 L18,-55 L10,-30
  C20,-20 20,-6 18,-2
  C50,-16 95,-20 155,-6
  C138,14 118,12 100,24
  C116,14 118,26 110,34
  C92,24 74,22 64,30
  C74,20 70,32 62,38
  C46,28 28,22 8,26
  C4,16 2,24 0,30
  C-2,24 -4,16 -8,26
  C-28,22 -46,28 -62,38
  C-70,32 -74,20 -64,30
  C-74,22 -92,24 -110,34
  C-118,26 -116,14 -100,24
  C-118,12 -138,14 -155,-6
  C-95,-20 -50,-16 -18,-2
  C-20,-6 -20,-20 -10,-30 Z
`;

/* ─────────────────────────────────────────────
   Fabric-printed bat (dark, embossed into curtain)
───────────────────────────────────────────── */
function CurtainBat({ x, y, size, opacity }: { x: number; y: number; size: number; opacity: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${size / 160})`} opacity={opacity}>
      <path fill="#1a0a18" d={BAT_PATH}/>
    </g>
  );
}

/* ─────────────────────────────────────────────
   Fabric cobweb
───────────────────────────────────────────── */
function CurtainWeb({ x, y, r }: { x: number; y: number; r: number }) {
  const spokes = [0, 30, 60, 90, 120, 150];
  const rings  = [r * 0.28, r * 0.55, r * 0.82, r];
  return (
    <g transform={`translate(${x},${y})`} opacity={0.18}>
      {spokes.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={i} x1={0} y1={0} x2={r * Math.cos(rad)} y2={r * Math.sin(rad)} stroke="#1a0a18" strokeWidth="0.8"/>;
      })}
      {rings.map((ar, i) => (
        <path key={i}
          d={spokes.map((deg, j) => {
            const a0 = (deg * Math.PI) / 180;
            const a1 = ((deg + 30) * Math.PI) / 180;
            const qx = ar * Math.cos(a0 + 0.26) * 1.06, qy = ar * Math.sin(a0 + 0.26) * 1.06;
            const ex = ar * Math.cos(a1), ey = ar * Math.sin(a1);
            return j === 0 ? `M${ar * Math.cos(a0)},${ar * Math.sin(a0)} Q${qx},${qy} ${ex},${ey}` : `Q${qx},${qy} ${ex},${ey}`;
          }).join(' ')}
          stroke="#1a0a18" strokeWidth="0.8" fill="none"
        />
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────
   Curtain panel SVG
───────────────────────────────────────────── */
function CurtainPanel({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';
  const W = 500, H = 800;
  const jaggedBottom = () => {
    const pts: string[] = [];
    for (let i = 0; i <= 14; i++) {
      pts.push(`${(i / 14) * W},${i % 2 === 0 ? H - 30 : H}`);
    }
    return pts.join(' ');
  };
  const folds = isLeft ? [80, 180, 280, 380, 460] : [40, 120, 220, 320, 420];

  return (
    <svg className={`curtain__panel curtain__panel--${side}`} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`vg-${side}`} x1={isLeft ? '0%' : '100%'} y1="0%" x2={isLeft ? '100%' : '0%'} y2="0%">
          <stop offset="0%"   stopColor="#1a0010"/>
          <stop offset="18%"  stopColor="#3d0a20"/>
          <stop offset="40%"  stopColor="#5a0e28"/>
          <stop offset="65%"  stopColor="#3a0818"/>
          <stop offset="100%" stopColor="#160008"/>
        </linearGradient>
        <linearGradient id={`sheen-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,200,160,0.10)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)"/>
        </linearGradient>
        <linearGradient id={`edge-${side}`} x1={isLeft ? '100%' : '0%'} y1="0%" x2={isLeft ? '80%' : '20%'} y2="0%">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.55)"/>
          <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
        </linearGradient>
      </defs>
      <polygon points={`0,0 ${W},0 ${jaggedBottom()} 0,${H}`} fill={`url(#vg-${side})`}/>
      <rect x="0" y="0" width={W} height={H} fill={`url(#sheen-${side})`}/>
      {folds.map((fx, i) => (
        <path key={i} d={`M${fx},0 C${fx+10},${H*.25} ${fx-8},${H*.5} ${fx+6},${H*.75} C${fx-4},${H*.88} ${fx+8},${H}`}
          stroke="rgba(0,0,0,0.28)" strokeWidth="12" fill="none"/>
      ))}
      {folds.map((fx, i) => (
        <path key={`h${i}`} d={`M${fx+6},0 C${fx+16},${H*.25} ${fx-2},${H*.5} ${fx+12},${H*.75}`}
          stroke="rgba(255,180,100,0.06)" strokeWidth="5" fill="none"/>
      ))}
      <rect x={isLeft ? W - 80 : 0} y="0" width="80" height={H} fill={`url(#edge-${side})`}/>
      <CurtainBat x={120} y={160} size={38} opacity={0.22}/>
      <CurtainBat x={360} y={100} size={28} opacity={0.18}/>
      <CurtainBat x={80}  y={340} size={22} opacity={0.15}/>
      <CurtainBat x={310} y={280} size={32} opacity={0.20}/>
      <CurtainBat x={200} y={460} size={26} opacity={0.16}/>
      <CurtainBat x={420} y={420} size={20} opacity={0.14}/>
      <CurtainBat x={140} y={580} size={30} opacity={0.18}/>
      <CurtainBat x={380} y={620} size={24} opacity={0.15}/>
      <CurtainWeb x={isLeft ? 60  : 440} y={50}  r={70}/>
      <CurtainWeb x={isLeft ? 440 : 60}  y={350} r={55}/>
      <CurtainWeb x={isLeft ? 180 : 320} y={650} r={45}/>
      <polygon points={`0,${H-20} ${W},${H-20} ${W},${H} 0,${H}`} fill="rgba(0,0,0,0.35)"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Gold curtain rod
───────────────────────────────────────────── */
function CurtainRod() {
  return (
    <div className="curtain__rod" aria-hidden>
      <div className="curtain__rod-bar"/>
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="curtain__tassel" style={{ left: `${8 + i * 11}%` }}>
          <div className="curtain__tassel-head"/>
          <div className="curtain__tassel-fringe"/>
        </div>
      ))}
      <div className="curtain__rod-end curtain__rod-end--left"/>
      <div className="curtain__rod-end curtain__rod-end--right"/>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Flying bat SVG (stage bats)
───────────────────────────────────────────── */
function StageBat({ className }: { className?: string }) {
  return (
    <svg className={`curtain__stage-bat ${className ?? ''}`} viewBox="-160 -65 320 130" fill="#e8a838" aria-hidden>
      <path d={BAT_PATH}/>
    </svg>
  );
}
function StagePumpkin({ className }: { className?: string }) {
  return (
    <svg className={`stage-pumpkin ${className ?? ''}`} viewBox="0 0 140 150" fill="none" aria-hidden>
      <defs>
        <radialGradient id="sp-body" cx="42%" cy="35%" r="58%">
          <stop offset="0%"  stopColor="#f0a030"/>
          <stop offset="50%" stopColor="#d45e0a"/>
          <stop offset="100%" stopColor="#6a2000"/>
        </radialGradient>
        <radialGradient id="sp-eye" cx="50%" cy="40%" r="55%">
          <stop offset="0%"  stopColor="#ffffa0"/>
          <stop offset="50%" stopColor="#ffcc00"/>
          <stop offset="100%" stopColor="#ff6600" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* stem */}
      <path d="M70 18 C72 8 80 4 84 6 C78 8 74 12 72 20" fill="#3a6a28"/>
      {/* lobes */}
      <ellipse cx="36" cy="88" rx="24" ry="32" fill="#b84808"/>
      <ellipse cx="104" cy="88" rx="24" ry="32" fill="#b84808"/>
      <ellipse cx="70" cy="82" rx="38" ry="46" fill="url(#sp-body)"/>
      {/* ribs */}
      <path d="M70 40 Q67 62 67 84 Q67 106 70 126" stroke="#b85008" strokeWidth="2" fill="none" opacity="0.5"/>
      <path d="M54 44 Q50 66 51 88 Q52 110 56 128" stroke="#7a2800" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <path d="M86 44 Q90 66 89 88 Q88 110 84 128" stroke="#7a2800" strokeWidth="1.5" fill="none" opacity="0.4"/>
      {/* left eye */}
      <polygon points="44,76 50,66 58,76" fill="#1a0500"/>
      <path d="M40,72 C44,66 52,65 58,68" stroke="#5a1800" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <polygon points="45,77 51,68 57,77" fill="url(#sp-eye)" opacity="0.7"/>
      {/* right eye */}
      <polygon points="82,76 88,66 96,76" fill="#1a0500"/>
      <path d="M80,68 C86,65 94,66 98,72" stroke="#5a1800" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <polygon points="83,77 89,68 95,77" fill="url(#sp-eye)" opacity="0.7"/>
      {/* nose */}
      <polygon points="70,86 67,92 73,92" fill="#1a0500"/>
      {/* mouth — jagged */}
      <path d="M44,102 L48,96 L52,104 L56,94 L62,104 L66,94 L70,106 L74,94 L78,104 L82,94 L86,104 L90,96 L94,102"
        fill="none" stroke="#1a0500" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
      {/* inner glow */}
      <ellipse cx="70" cy="96" rx="22" ry="12" fill="rgba(255,100,0,0.18)"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Stage skeleton (holding pumpkin pose)
───────────────────────────────────────────── */
function StageSkeleton({ className }: { className?: string }) {
  return (
    <svg className={`stage-skeleton ${className ?? ''}`} viewBox="0 0 130 240" fill="none" aria-hidden>
      {/* skull */}
      <ellipse cx="65" cy="30" rx="24" ry="26" fill="#e8e0d0"/>
      <ellipse cx="65" cy="38" rx="15" ry="10" fill="#d0c8b4"/>
      {/* eye sockets */}
      <ellipse cx="55" cy="26" rx="8" ry="9" fill="#1a1020"/>
      <ellipse cx="75" cy="26" rx="8" ry="9" fill="#1a1020"/>
      {/* nose */}
      <path d="M62,36 L65,31 L68,36 L66,40 L64,40 Z" fill="#1a1020"/>
      {/* teeth */}
      <rect x="54" y="46" width="5" height="7" rx="1" fill="#1a1020"/>
      <rect x="61" y="46" width="5" height="7" rx="1" fill="#1a1020"/>
      <rect x="68" y="46" width="5" height="7" rx="1" fill="#1a1020"/>
      <path d="M48,44 Q65,58 82,44" stroke="#c8bfb0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* spine */}
      {[0,1,2,3,4].map(n => <rect key={n} x="61" y={56+n*10} width="8" height="7" rx="1.5" fill="#d0c8b4"/>)}
      {/* ribs */}
      <path d="M65 62 C53 64 44 72 46 82 C48 86 54 86 56 82" stroke="#c8c0aa" strokeWidth="2.5" fill="none"/>
      <path d="M65 70 C51 72 42 80 44 90 C46 94 52 94 54 90" stroke="#c8c0aa" strokeWidth="2" fill="none"/>
      <path d="M65 62 C77 64 86 72 84 82 C82 86 76 86 74 82" stroke="#c8c0aa" strokeWidth="2.5" fill="none"/>
      <path d="M65 70 C79 72 88 80 86 90 C84 94 78 94 76 90" stroke="#c8c0aa" strokeWidth="2" fill="none"/>
      {/* pelvis */}
      <path d="M50,104 Q65,114 80,104 L82,118 Q65,126 48,118 Z" fill="#c0b8a2"/>
      {/* left arm bent */}
      <line x1="50" y1="66" x2="28" y2="88" stroke="#c8c0aa" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="28" cy="88" r="4" fill="#b8b0a0"/>
      <line x1="28" y1="88" x2="20" y2="118" stroke="#c8c0aa" strokeWidth="4" strokeLinecap="round"/>
      <line x1="20" y1="118" x2="14" y2="128" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="118" x2="16" y2="132" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="118" x2="22" y2="133" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="118" x2="28" y2="128" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      {/* right arm bent */}
      <line x1="80" y1="66" x2="102" y2="88" stroke="#c8c0aa" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="102" cy="88" r="4" fill="#b8b0a0"/>
      <line x1="102" y1="88" x2="110" y2="118" stroke="#c8c0aa" strokeWidth="4" strokeLinecap="round"/>
      <line x1="110" y1="118" x2="116" y2="128" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="110" y1="118" x2="114" y2="132" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="110" y1="118" x2="108" y2="133" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="110" y1="118" x2="102" y2="128" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      {/* left leg */}
      <line x1="56" y1="120" x2="48" y2="160" stroke="#c8c0aa" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="48" cy="160" r="3.5" fill="#b8b0a0"/>
      <line x1="48" y1="160" x2="42" y2="198" stroke="#c8c0aa" strokeWidth="4" strokeLinecap="round"/>
      <line x1="42" y1="198" x2="28" y2="206" stroke="#c8c0aa" strokeWidth="3" strokeLinecap="round"/>
      <line x1="42" y1="198" x2="32" y2="212" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="42" y1="198" x2="40" y2="214" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      {/* right leg */}
      <line x1="74" y1="120" x2="82" y2="160" stroke="#c8c0aa" strokeWidth="4.5" strokeLinecap="round"/>
      <circle cx="82" cy="160" r="3.5" fill="#b8b0a0"/>
      <line x1="82" y1="160" x2="88" y2="198" stroke="#c8c0aa" strokeWidth="4" strokeLinecap="round"/>
      <line x1="88" y1="198" x2="102" y2="206" stroke="#c8c0aa" strokeWidth="3" strokeLinecap="round"/>
      <line x1="88" y1="198" x2="98" y2="212" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="88" y1="198" x2="90" y2="214" stroke="#c8c0aa" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function BatIntro({ onComplete }: BatIntroProps) {
  const [opening, setOpening] = useState(false);
  const [done,    setDone]    = useState(false);
  const leftCtrl  = useAnimation();
  const rightCtrl = useAnimation();

  useEffect(() => {
    const t1 = window.setTimeout(async () => {
      setOpening(true);
      await Promise.all([
        leftCtrl.start({ x: '-100%', transition: { duration: OPEN_MS / 1000, ease: [0.76, 0, 0.24, 1] } }),
        rightCtrl.start({ x: '100%', transition: { duration: OPEN_MS / 1000, ease: [0.76, 0, 0.24, 1] } }),
      ]);
      window.setTimeout(() => setDone(true), 200);
    }, HOLD_MS);
    return () => window.clearTimeout(t1);
  }, [leftCtrl, rightCtrl]);

  useEffect(() => {
    if (!done) return;
    const t = window.setTimeout(onComplete, FADE_MS);
    return () => window.clearTimeout(t);
  }, [done, onComplete]);

  return (
    <motion.div
      className="curtain"
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: FADE_MS / 1000 }}
    >
      {/* ── Stage background ── */}
      <div className="curtain__stage" aria-hidden>
        <div className="curtain__moon"/>

        {/* ── Flying bats ── */}
        {[1,2,3,4,5,6,7,8].map(n => (
          <StageBat key={n} className={`curtain__stage-bat--${n}`}/>
        ))}

        {/* ── Candle glows ── */}
        <div className="curtain__candle curtain__candle--l"/>
        <div className="curtain__candle curtain__candle--r"/>
      </div>

      {/* ── Title (always on top) ── */}
      <motion.div
        className="curtain__title-wrap"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: opening ? 0 : 1, y: opening ? -8 : 0 }}
        transition={{ duration: 0.5, delay: opening ? 0 : 0.3 }}
      >
        <p className="curtain__label">Tech Fest 2026</p>
        <h1 className="curtain__title">Tachyon<span>26</span></h1>
        <p className="curtain__sub">The haunt begins…</p>
      </motion.div>

      {/* ── Curtain panels ── */}
      <motion.div className="curtain__half curtain__half--left" animate={leftCtrl} initial={{ x: '0%' }}>
        <CurtainPanel side="left"/>
      </motion.div>
      <motion.div className="curtain__half curtain__half--right" animate={rightCtrl} initial={{ x: '0%' }}>
        <CurtainPanel side="right"/>
      </motion.div>

      <CurtainRod/>
    </motion.div>
  );
}