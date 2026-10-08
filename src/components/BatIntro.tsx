import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './BatIntro.css';

const HOLD_MS = 1800;
const OPEN_MS = 1400;

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
      <rect x="0" y="0" width={W} height={H} fill={`url(#vg-${side})`}/>
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
   Main component
───────────────────────────────────────────── */
export function BatIntro({ onComplete }: BatIntroProps) {
  const [opening, setOpening] = useState(false);
  const leftCtrl  = useAnimation();
  const rightCtrl = useAnimation();

  useEffect(() => {
    const t1 = window.setTimeout(async () => {
      setOpening(true);
      await Promise.all([
        leftCtrl.start({ x: '-100%', transition: { duration: OPEN_MS / 1000, ease: [0.76, 0, 0.24, 1] } }),
        rightCtrl.start({ x: '100%', transition: { duration: OPEN_MS / 1000, ease: [0.76, 0, 0.24, 1] } }),
      ]);
      onComplete();
    }, HOLD_MS);
    return () => window.clearTimeout(t1);
  }, [leftCtrl, rightCtrl, onComplete]);

  return (
    <div
      className="curtain"
      style={{ pointerEvents: opening ? 'none' : 'auto' }}
    >
      {/* ── Title (always on top) ── */}
      <motion.div
        className="curtain__title-wrap"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: opening ? 0 : 1, y: opening ? -8 : 0 }}
        transition={{ duration: 0.4, delay: opening ? 0 : 0.3 }}
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

      <motion.div
        animate={{ opacity: opening ? 0 : 1, y: opening ? -40 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, pointerEvents: 'none' }}
      >
        <CurtainRod/>
      </motion.div>
    </div>
  );
}