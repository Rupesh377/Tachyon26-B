import './HalloweenDecorations.css';

// ── Detailed Witch — long robes, detailed hat, flying hair, broom ──
function Witch() {
  return (
    <svg className="hw-witch" viewBox="0 0 340 180" fill="none" aria-hidden>
      {/* ── Broomstick ── */}
      <line x1="10" y1="140" x2="310" y2="95" stroke="#6B3E1E" strokeWidth="6" strokeLinecap="round"/>
      {/* broom bristles — splayed fan */}
      <path d="M10 140 C0 126 -4 134 -2 144 C2 140 -4 150 4 149 C8 142 2 152 10 150 C14 144 8 153 16 149 C20 142 14 151 20 148 L10 140Z" fill="#b8903a"/>
      <line x1="10" y1="140" x2="-4" y2="130" stroke="#8a6825" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="140" x2="-2" y2="144" stroke="#8a6825" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="140" x2="4" y2="150" stroke="#8a6825" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="140" x2="12" y2="152" stroke="#8a6825" strokeWidth="1.5" strokeLinecap="round"/>

      {/* ── Long flowing robes / dress ── */}
      {/* Main robe body */}
      <path d="M160 108 C148 106 136 110 128 118 C120 128 118 142 122 154 C132 152 148 148 160 148 C172 148 188 152 198 154 C202 142 200 128 192 118 C184 110 172 106 160 108Z" fill="#120c20"/>
      {/* robe folds / shading */}
      <path d="M148 110 Q144 130 146 152" stroke="#1e1434" strokeWidth="2" fill="none"/>
      <path d="M170 110 Q174 130 172 152" stroke="#1e1434" strokeWidth="2" fill="none"/>
      {/* robe hem — jagged bottom edge */}
      <path d="M122 154 L126 162 L130 154 L134 164 L140 154 L145 166 L152 154 L158 168 L164 154 L170 168 L176 154 L181 166 L186 154 L190 164 L194 154 L198 162 L200 154" fill="#120c20" stroke="#120c20" strokeWidth="1" strokeLinejoin="round"/>
      {/* sleeve left — arm holding broom */}
      <path d="M130 118 C118 116 106 118 96 128 C88 136 86 148 90 154 C96 148 104 140 112 136 C116 130 122 124 130 122Z" fill="#120c20"/>
      {/* sleeve right — trailing behind */}
      <path d="M190 118 C202 116 214 120 222 130 C228 138 224 150 218 156 C208 148 200 136 196 128Z" fill="#120c20"/>
      {/* cape flowing back */}
      <path d="M192 122 C210 118 228 122 238 134 C244 142 240 158 232 162 C220 152 208 138 196 130Z" fill="#0e0818" opacity="0.85"/>
      <path d="M196 132 C212 130 226 136 230 148 C226 152 214 148 202 140Z" fill="#0e0818" opacity="0.6"/>

      {/* ── Left arm/hand on broom ── */}
      <line x1="102" y1="136" x2="78" y2="144" stroke="#c8b068" strokeWidth="5" strokeLinecap="round"/>
      {/* fingers */}
      <line x1="78" y1="144" x2="70" y2="138" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="78" y1="144" x2="68" y2="142" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="78" y1="144" x2="68" y2="148" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="78" y1="144" x2="72" y2="154" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>

      {/* ── Right arm reaching forward ── */}
      <line x1="214" y1="128" x2="240" y2="114" stroke="#c8b068" strokeWidth="5" strokeLinecap="round"/>
      <line x1="240" y1="114" x2="248" y2="106" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="240" y1="114" x2="250" y2="112" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="240" y1="114" x2="250" y2="118" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="240" y1="114" x2="246" y2="122" stroke="#c8b068" strokeWidth="2.5" strokeLinecap="round"/>

      {/* ── Head ── */}
      <ellipse cx="160" cy="88" rx="16" ry="15" fill="#c4aa72"/>
      {/* chin/jaw */}
      <path d="M148 96 Q152 106 160 108 Q168 106 172 96" fill="#c4aa72"/>
      {/* wrinkled cheeks */}
      <path d="M148 90 C144 92 142 96 144 98" stroke="#a88a50" strokeWidth="1" fill="none"/>
      <path d="M172 90 C176 92 178 96 176 98" stroke="#a88a50" strokeWidth="1" fill="none"/>

      {/* ── Eyes — glowing yellow ── */}
      <ellipse cx="154" cy="86" rx="5" ry="4" fill="#1a0a00"/>
      <ellipse cx="166" cy="86" rx="5" ry="4" fill="#1a0a00"/>
      <ellipse cx="154" cy="86" rx="3.5" ry="3" fill="#ffcc00"/>
      <ellipse cx="166" cy="86" rx="3.5" ry="3" fill="#ffcc00"/>
      <ellipse cx="154" cy="86" rx="1.5" ry="1.5" fill="#ff8800"/>
      <ellipse cx="166" cy="86" rx="1.5" ry="1.5" fill="#ff8800"/>
      {/* angry brow */}
      <path d="M149 82 C152 79 158 80 160 81" stroke="#5a3010" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M162 81 C164 80 170 79 173 82" stroke="#5a3010" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* ── Hooked nose ── */}
      <path d="M157 90 C153 94 152 100 156 101 C160 102 162 98 160 93" fill="#b09050"/>
      {/* wart on nose */}
      <circle cx="153" cy="100" r="2" fill="#9a7840"/>

      {/* ── Grinning mouth ── */}
      <path d="M150 103 C154 110 166 110 170 103" stroke="#2a1008" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* teeth */}
      <rect x="154" y="104" width="4" height="5" rx="1" fill="#e8dcc0"/>
      <rect x="160" y="104" width="4" height="5" rx="1" fill="#e8dcc0"/>
      {/* gap tooth */}
      <rect x="158" y="104" width="2" height="5" rx="0" fill="#2a1008"/>

      {/* ── Flying wild hair ── */}
      <path d="M148 80 C140 70 130 65 118 68 C110 70 106 78 110 84" stroke="#1a1018" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M146 78 C136 62 124 56 112 58 C104 60 100 70 104 76" stroke="#1a1018" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M150 82 C142 75 138 62 140 50 C141 42 148 38 152 44" stroke="#1a1018" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M172 80 C180 68 192 62 200 66 C206 70 204 80 198 84" stroke="#1a1018" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M170 78 C182 64 196 60 202 52 C206 44 200 36 194 40" stroke="#1a1018" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── Witch hat ── */}
      {/* brim */}
      <ellipse cx="160" cy="72" rx="26" ry="8" fill="#0a0814"/>
      {/* cone — tall and slightly tilted */}
      <path d="M142 72 L152 24 L162 22 L178 72Z" fill="#0a0814"/>
      {/* hat band */}
      <rect x="140" y="68" width="40" height="7" rx="1" fill="#3d1a50"/>
      {/* buckle */}
      <rect x="156" y="69" width="8" height="5" rx="1" fill="#e8a838"/>
      <rect x="158" y="70.5" width="4" height="2" rx="0.5" fill="#0a0814"/>
      {/* hat tip curve */}
      <path d="M152 24 C150 18 154 12 158 14 C162 16 162 22 162 22" stroke="#0a0814" strokeWidth="2" fill="none"/>
      {/* cobweb on hat */}
      <line x1="162" y1="30" x2="172" y2="38" stroke="rgba(200,190,180,0.5)" strokeWidth="0.8"/>
      <line x1="162" y1="30" x2="168" y2="42" stroke="rgba(200,190,180,0.5)" strokeWidth="0.8"/>
      <path d="M164 34 Q167 36 166 40" stroke="rgba(200,190,180,0.5)" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

// ── Detailed skeleton holding pumpkin — matches reference image ──
function Skeleton() {
  return (
    <svg className="hw-skeleton" viewBox="0 0 200 260" fill="none" aria-hidden>
      {/* ── SKULL ── */}
      {/* cranium */}
      <ellipse cx="100" cy="42" rx="32" ry="34" fill="#eee8dc"/>
      {/* cheekbones */}
      <ellipse cx="78" cy="60" rx="10" ry="8" fill="#e0d8c8"/>
      <ellipse cx="122" cy="60" rx="10" ry="8" fill="#e0d8c8"/>
      {/* forehead highlight */}
      <ellipse cx="94" cy="28" rx="14" ry="10" fill="#f5f0e8" opacity="0.6"/>
      {/* skull shading */}
      <path d="M72 50 Q68 60 72 70" stroke="#c8bfaa" strokeWidth="1.5" fill="none"/>
      <path d="M128 50 Q132 60 128 70" stroke="#c8bfaa" strokeWidth="1.5" fill="none"/>
      {/* crack on skull */}
      <path d="M96 18 L92 30 L96 36" stroke="#a09080" strokeWidth="1" fill="none"/>

      {/* ── Eye sockets ── */}
      <ellipse cx="86" cy="46" rx="12" ry="13" fill="#1a1020"/>
      <ellipse cx="114" cy="46" rx="12" ry="13" fill="#1a1020"/>
      {/* inner eye highlight */}
      <ellipse cx="82" cy="43" rx="3" ry="2.5" fill="#2a2030" opacity="0.6"/>
      <ellipse cx="110" cy="43" rx="3" ry="2.5" fill="#2a2030" opacity="0.6"/>

      {/* ── Nose cavity ── */}
      <path d="M96 60 L100 54 L104 60 L102 66 L98 66 Z" fill="#1a1020"/>

      {/* ── Teeth / jaw ── */}
      <path d="M76 72 Q100 84 124 72" stroke="#d0c8b4" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* upper teeth */}
      <rect x="84" y="70" width="6" height="8" rx="2" fill="#ede5d4"/>
      <rect x="92" y="70" width="6" height="9" rx="2" fill="#ede5d4"/>
      <rect x="100" y="70" width="6" height="9" rx="2" fill="#ede5d4"/>
      <rect x="108" y="70" width="6" height="8" rx="2" fill="#ede5d4"/>
      {/* jaw bone */}
      <path d="M74 72 Q72 82 76 88 Q100 98 124 88 Q128 82 126 72" stroke="#d0c8b4" strokeWidth="2.5" fill="none"/>

      {/* ── Neck vertebrae ── */}
      <rect x="94" y="76" width="12" height="7" rx="2" fill="#d8d0be"/>
      <rect x="94" y="85" width="12" height="7" rx="2" fill="#d8d0be"/>
      <rect x="94" y="94" width="12" height="7" rx="2" fill="#d8d0be"/>

      {/* ── Clavicles ── */}
      <path d="M100 102 C86 100 72 104 64 112" stroke="#d0c8b4" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M100 102 C114 100 128 104 136 112" stroke="#d0c8b4" strokeWidth="5" fill="none" strokeLinecap="round"/>

      {/* ── Ribcage ── */}
      {/* sternum */}
      <rect x="94" y="102" width="12" height="52" rx="3" fill="#c8bfaa"/>
      {/* ribs left */}
      <path d="M96 108 C80 108 68 116 68 126 C68 132 74 134 80 130" stroke="#d0c8b4" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M96 116 C78 116 64 124 64 136 C64 142 72 144 78 140" stroke="#d0c8b4" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M96 124 C78 124 64 132 64 144 C64 150 72 152 78 148" stroke="#d0c8b4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M96 132 C80 132 68 140 68 150 C68 154 74 156 80 152" stroke="#d0c8b4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* ribs right */}
      <path d="M104 108 C120 108 132 116 132 126 C132 132 126 134 120 130" stroke="#d0c8b4" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M104 116 C122 116 136 124 136 136 C136 142 128 144 122 140" stroke="#d0c8b4" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M104 124 C122 124 136 132 136 144 C136 150 128 152 122 148" stroke="#d0c8b4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M104 132 C120 132 132 140 132 150 C132 154 126 156 120 152" stroke="#d0c8b4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* ── Pelvis ── */}
      <path d="M72 158 Q100 172 128 158 L132 174 Q100 186 68 174 Z" fill="#c0b8a2"/>
      <ellipse cx="84" cy="168" rx="8" ry="6" fill="#1a1020" opacity="0.25"/>
      <ellipse cx="116" cy="168" rx="8" ry="6" fill="#1a1020" opacity="0.25"/>

      {/* ── LEFT ARM — bent holding pumpkin ── */}
      {/* upper arm */}
      <line x1="68" y1="112" x2="44" y2="136" stroke="#d0c8b4" strokeWidth="6" strokeLinecap="round"/>
      {/* elbow joint */}
      <circle cx="44" cy="136" r="5" fill="#c0b8a2"/>
      {/* forearm */}
      <line x1="44" y1="136" x2="34" y2="168" stroke="#d0c8b4" strokeWidth="5" strokeLinecap="round"/>
      {/* wrist */}
      <circle cx="34" cy="168" r="4" fill="#c0b8a2"/>
      {/* hand/fingers curled around pumpkin */}
      <line x1="34" y1="168" x2="28" y2="178" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>
      <line x1="34" y1="168" x2="30" y2="182" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>
      <line x1="34" y1="168" x2="36" y2="183" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>
      <line x1="34" y1="168" x2="42" y2="180" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>

      {/* ── RIGHT ARM — bent holding pumpkin ── */}
      <line x1="132" y1="112" x2="156" y2="136" stroke="#d0c8b4" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="156" cy="136" r="5" fill="#c0b8a2"/>
      <line x1="156" y1="136" x2="166" y2="168" stroke="#d0c8b4" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="166" cy="168" r="4" fill="#c0b8a2"/>
      <line x1="166" y1="168" x2="172" y2="178" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>
      <line x1="166" y1="168" x2="170" y2="182" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>
      <line x1="166" y1="168" x2="164" y2="183" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>
      <line x1="166" y1="168" x2="158" y2="180" stroke="#d0c8b4" strokeWidth="3" strokeLinecap="round"/>

      {/* ── PUMPKIN held in lap ── */}
      {/* stem */}
      <path d="M100 178 C102 170 108 166 112 168 C108 170 104 174 102 180" fill="#3a6e2a"/>
      {/* left lobe */}
      <ellipse cx="80" cy="210" rx="22" ry="26" fill="#c45008"/>
      {/* right lobe */}
      <ellipse cx="120" cy="210" rx="22" ry="26" fill="#c45008"/>
      {/* center lobe */}
      <ellipse cx="100" cy="206" rx="28" ry="30" fill="#e06010"/>
      {/* rib lines */}
      <path d="M100 182 Q97 196 97 210 Q97 224 100 234" stroke="#b84808" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
      {/* highlight */}
      <ellipse cx="90" cy="194" rx="12" ry="9" fill="#f08030" opacity="0.3"/>
      {/* left eye — triangle */}
      <polygon points="82,202 88,194 94,202" fill="#1a0800"/>
      {/* right eye */}
      <polygon points="106,202 112,194 118,202" fill="#1a0800"/>
      {/* nose */}
      <polygon points="100,212 97,208 103,208" fill="#1a0800"/>
      {/* mouth — jagged */}
      <path d="M80 222 L84 216 L88 222 L92 214 L96 222 L100 214 L104 222 L108 214 L112 222 L116 216 L120 222"
        fill="none" stroke="#1a0800" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
      {/* inner glow */}
      <ellipse cx="100" cy="215" rx="18" ry="10" fill="rgba(255,100,0,0.15)"/>
    </svg>
  );
}

// ── Spider web ──
function SpiderWeb({ flip }: { flip?: boolean }) {
  return (
    <svg className={`hw-web ${flip ? 'hw-web--flip' : ''}`} viewBox="0 0 160 160" fill="none" aria-hidden>
      {[0, 18, 36, 54, 72, 90].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return <line key={i} x1="0" y1="0" x2={140 * Math.cos(rad)} y2={140 * Math.sin(rad)} stroke="rgba(200,190,180,0.35)" strokeWidth="1"/>;
      })}
      {[30, 60, 90, 120].map((r, i) => (
        <path key={i} d={`M ${r} 0 Q ${r * 0.7} ${r * 0.7} 0 ${r}`} stroke="rgba(200,190,180,0.28)" strokeWidth="1" fill="none"/>
      ))}
      <ellipse cx="62" cy="62" rx="9" ry="7" fill="#1a1020"/>
      <ellipse cx="62" cy="55" rx="6" ry="5" fill="#1a1020"/>
      <circle cx="59" cy="54" r="1.5" fill="#ff2200"/>
      <circle cx="65" cy="54" r="1.5" fill="#ff2200"/>
      <line x1="53" y1="60" x2="38" y2="50" stroke="#1a1020" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="53" y1="63" x2="36" y2="60" stroke="#1a1020" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="53" y1="66" x2="38" y2="74" stroke="#1a1020" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="71" y1="60" x2="86" y2="50" stroke="#1a1020" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="71" y1="63" x2="88" y2="60" stroke="#1a1020" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="71" y1="66" x2="86" y2="74" stroke="#1a1020" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="62" y1="0" x2="62" y2="47" stroke="rgba(200,190,180,0.4)" strokeWidth="1"/>
    </svg>
  );
}

// ── Moon ──
function Moon() {
  return (
    <svg className="hw-moon" viewBox="0 0 120 120" fill="none" aria-hidden>
      <defs>
        <radialGradient id="moonGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#fff8e0"/>
          <stop offset="60%" stopColor="#e8d898"/>
          <stop offset="100%" stopColor="#c4a840"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="rgba(200,170,60,0.12)"/>
      <circle cx="60" cy="60" r="44" fill="rgba(200,170,60,0.08)"/>
      <circle cx="60" cy="60" r="36" fill="url(#moonGrad)"/>
      <circle cx="46" cy="50" r="5" fill="rgba(0,0,0,0.1)"/>
      <circle cx="68" cy="42" r="3" fill="rgba(0,0,0,0.08)"/>
      <circle cx="72" cy="64" r="4" fill="rgba(0,0,0,0.09)"/>
      <circle cx="52" cy="70" r="3" fill="rgba(0,0,0,0.07)"/>
    </svg>
  );
}

// ── Blood drip ──
function BloodDrip() {
  return (
    <svg className="hw-drip" viewBox="0 0 300 30" fill="none" aria-hidden>
      {[20, 55, 90, 130, 165, 200, 240, 275].map((x, i) => {
        const h = 8 + (i % 3) * 6;
        return (
          <g key={i}>
            <rect x={x - 3} y="0" width="6" height={h} rx="3" fill="#8B1010"/>
            <circle cx={x} cy={h + 4} r="4" fill="#8B1010"/>
          </g>
        );
      })}
    </svg>
  );
}

export function HalloweenDecorations() {
  return null;
}
