export default function HouseStageSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 580 580" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c898"/>
          <stop offset="60%" stopColor="#d4a870"/>
          <stop offset="100%" stopColor="#b88040"/>
        </linearGradient>
        <linearGradient id="roofFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c04020"/>
          <stop offset="60%" stopColor="#9a2c10"/>
          <stop offset="100%" stopColor="#6a180a"/>
        </linearGradient>
        <linearGradient id="doorFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5a3010"/>
          <stop offset="30%" stopColor="#8a5020"/>
          <stop offset="60%" stopColor="#a87030"/>
          <stop offset="100%" stopColor="#6a3818"/>
        </linearGradient>
        <linearGradient id="windowG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8d0f8"/>
          <stop offset="100%" stopColor="#6898d0"/>
        </linearGradient>
        <radialGradient id="sunG" cx=".5" cy=".5">
          <stop offset="0%" stopColor="rgba(255,200,80,.7)"/>
          <stop offset="60%" stopColor="rgba(255,160,40,.2)"/>
          <stop offset="100%" stopColor="rgba(255,160,40,0)"/>
        </radialGradient>
        <radialGradient id="diyaFlame" cx=".5" cy=".8" r=".5">
          <stop offset="0%" stopColor="#fff8d0"/>
          <stop offset="40%" stopColor="#ffb030"/>
          <stop offset="100%" stopColor="#e05010" stopOpacity="0"/>
        </radialGradient>
        {/* Rangoli colors */}
        <radialGradient id="rOrange" cx=".5" cy=".5"><stop offset="0%" stopColor="#ff7020"/><stop offset="100%" stopColor="#e04010"/></radialGradient>
        <radialGradient id="rYellow" cx=".5" cy=".5"><stop offset="0%" stopColor="#ffd020"/><stop offset="100%" stopColor="#e0a010"/></radialGradient>
        <radialGradient id="rRed" cx=".5" cy=".5"><stop offset="0%" stopColor="#e02030"/><stop offset="100%" stopColor="#a00018"/></radialGradient>
        <radialGradient id="rWhite" cx=".5" cy=".5"><stop offset="0%" stopColor="#fff8f0"/><stop offset="100%" stopColor="#f0e0d0"/></radialGradient>
        <filter id="houseShadow"><feDropShadow dx="4" dy="8" stdDeviation="10" floodColor="rgba(80,40,0,.3)"/></filter>
      </defs>

      {/* Sun/ambient glow in sky */}
      <circle cx="480" cy="80" r="120" fill="url(#sunG)"/>

      {/* House group */}
      <g filter="url(#houseShadow)">
        {/* Roof (filled terracotta) */}
        <path id="hp1" d="M60 320 L290 128 L520 320 Z" fill="url(#roofFill)"/>
        {/* Roof shading / depth */}
        <path d="M60 320 L290 128 L176 224 Z" fill="rgba(0,0,0,.15)"/>
        {/* Roof ridge highlight */}
        <path d="M290 128 L520 320" stroke="rgba(255,200,160,.25)" strokeWidth="3"/>

        {/* Second smaller roof / attic */}
        <path id="hp11" d="M158 210 L290 132 L422 210 Z" fill="#a83010"/>
        <path d="M158 210 L290 132 L224 171 Z" fill="rgba(0,0,0,.1)"/>

        {/* Flag/finial */}
        <line id="hp12" x1="290" y1="80" x2="290" y2="130" stroke="#7a5218" strokeWidth="4" strokeLinecap="round"/>
        <path d="M290 80 L310 90 L290 100 Z" fill="#c04020"/>

        {/* Main wall */}
        <path id="hp2" d="M100 320 L100 500 L480 500 L480 320 Z" fill="url(#wallFill)"/>
        {/* Wall shading left */}
        <path d="M100 320 L100 500 L130 500 L130 320 Z" fill="rgba(0,0,0,.12)"/>
        {/* Wall texture lines */}
        <line x1="100" y1="380" x2="480" y2="380" stroke="rgba(180,120,60,.2)" strokeWidth="1"/>
        <line x1="100" y1="440" x2="480" y2="440" stroke="rgba(180,120,60,.2)" strokeWidth="1"/>
        {/* Brick pattern suggestion */}
        <g opacity=".12" stroke="#7a4010" strokeWidth=".5" fill="none">
          <line x1="180" y1="380" x2="180" y2="440"/><line x1="260" y1="320" x2="260" y2="380"/>
          <line x1="340" y1="380" x2="340" y2="440"/><line x1="220" y1="440" x2="220" y2="500"/>
          <line x1="400" y1="440" x2="400" y2="500"/>
        </g>

        {/* Door (arched) */}
        <path id="hp3" d="M240 500 L240 380 Q240 350 290 350 Q340 350 340 380 L340 500 Z" fill="url(#doorFill)"/>
        {/* Door arch fill */}
        <path id="hp4" d="M244 382 Q244 356 290 354 Q336 356 336 382 L336 378 Q336 358 290 356 Q244 358 244 378 Z" fill="rgba(255,200,120,.2)"/>
        {/* Door panels */}
        <rect x="248" y="390" width="36" height="40" rx="2" fill="rgba(255,180,80,.12)"/>
        <rect x="296" y="390" width="36" height="40" rx="2" fill="rgba(255,180,80,.12)"/>
        <rect x="248" y="440" width="36" height="40" rx="2" fill="rgba(255,180,80,.1)"/>
        <rect x="296" y="440" width="36" height="40" rx="2" fill="rgba(255,180,80,.1)"/>
        {/* Door knob */}
        <circle cx="330" cy="428" r="5" fill="url(#rOrange)"/>
        <circle cx="330" cy="428" r="2" fill="rgba(255,220,100,.8)"/>
        {/* Arch decorative dots */}
        <path d="M252 378 Q290 348 328 378" fill="none" stroke="rgba(201,164,76,.5)" strokeWidth="1.5" strokeDasharray="4,4"/>

        {/* Window left */}
        <rect id="hp5" x="140" y="360" width="64" height="64" rx="4" fill="#1a2a3a"/>
        <rect x="143" y="363" width="58" height="58" rx="3" fill="url(#windowG)" opacity=".7"/>
        {/* Window cross */}
        <line id="hp7" x1="172" y1="360" x2="172" y2="424" stroke="rgba(180,120,60,.6)" strokeWidth="3"/>
        <line id="hp8" x1="140" y1="392" x2="204" y2="392" stroke="rgba(180,120,60,.6)" strokeWidth="3"/>
        {/* Window sill */}
        <rect x="135" y="422" width="74" height="5" rx="2" fill="#b88040"/>
        {/* Flower box below window */}
        <rect x="140" y="427" width="64" height="10" rx="2" fill="#8a5020"/>
        <circle cx="155" cy="427" r="5" fill="#e04060"/><circle cx="172" cy="425" r="5" fill="#e8b030"/><circle cx="189" cy="427" r="5" fill="#e04060"/>

        {/* Window right */}
        <rect id="hp6" x="376" y="360" width="64" height="64" rx="4" fill="#1a2a3a"/>
        <rect x="379" y="363" width="58" height="58" rx="3" fill="url(#windowG)" opacity=".7"/>
        <line id="hp9" x1="408" y1="360" x2="408" y2="424" stroke="rgba(180,120,60,.6)" strokeWidth="3"/>
        <line id="hp10" x1="376" y1="392" x2="440" y2="392" stroke="rgba(180,120,60,.6)" strokeWidth="3"/>
        <rect x="371" y="422" width="74" height="5" rx="2" fill="#b88040"/>
        <rect x="376" y="427" width="64" height="10" rx="2" fill="#8a5020"/>
        <circle cx="391" cy="427" r="5" fill="#e8b030"/><circle cx="408" cy="425" r="5" fill="#e04060"/><circle cx="425" cy="427" r="5" fill="#e8b030"/>
      </g>

      {/* ===== RANGOLI (filled, colorful) ===== */}
      <g id="rangoli" style={{transformOrigin: "290px 545px", transform: "scale(0)"}}>
        {/* Outer ring - orange/red petals */}
        <g>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(45,290,535)"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(90,290,535)"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(135,290,535)"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(180,290,535)"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(225,290,535)"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(270,290,535)"/>
          <ellipse cx="290" cy="493" rx="12" ry="26" fill="url(#rOrange)" opacity=".9" transform="rotate(315,290,535)"/>
        </g>
        {/* Middle ring - yellow petals, offset */}
        <g>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(22.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(67.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(112.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(157.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(202.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(247.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(292.5,290,535)"/>
          <ellipse cx="290" cy="502" rx="9" ry="18" fill="url(#rYellow)" opacity=".9" transform="rotate(337.5,290,535)"/>
        </g>
        {/* Inner ring - red */}
        <g>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(0,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(45,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(90,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(135,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(180,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(225,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(270,290,535)"/>
          <ellipse cx="290" cy="518" rx="6" ry="10" fill="url(#rRed)" opacity=".9" transform="rotate(315,290,535)"/>
        </g>
        {/* Center dot */}
        <circle cx="290" cy="535" r="12" fill="url(#rYellow)"/>
        <circle cx="290" cy="535" r="6" fill="url(#rOrange)"/>
        <circle cx="290" cy="535" r="2" fill="rgba(255,255,255,.9)"/>
      </g>

      {/* Diyas flanking door */}
      <g id="diyas">
        {/* Diya left */}
        <g transform="translate(218,498)">
          <path d="M-10 6 Q0 14 10 6 L8 0 L-8 0 Z" fill="url(#lampBowl)"/>
          <ellipse cx="0" cy="-4" rx="16" ry="18" fill="url(#diyaFlame)" opacity=".7"/>
          <path d="M0 -18 Q-4 -10 -2 -4 Q0 -1 2 -4 Q4 -10 0 -18" fill="rgba(255,248,180,.9)"/>
        </g>
        {/* Diya right */}
        <g transform="translate(362,498)">
          <path d="M-10 6 Q0 14 10 6 L8 0 L-8 0 Z" fill="url(#lampBowl)"/>
          <ellipse cx="0" cy="-4" rx="16" ry="18" fill="url(#diyaFlame)" opacity=".7"/>
          <path d="M0 -18 Q-4 -10 -2 -4 Q0 -1 2 -4 Q4 -10 0 -18" fill="rgba(255,248,180,.9)"/>
        </g>
        {/* Row of small diyas along step */}
        <g opacity=".7">
          <g transform="translate(152,503)"><path d="M-6 3 Q0 8 6 3 L5 0 L-5 0 Z" fill="url(#lampBowl)"/><ellipse cx="0" cy="-3" rx="8" ry="10" fill="url(#diyaFlame)" opacity=".6"/></g>
          <g transform="translate(175,503)"><path d="M-6 3 Q0 8 6 3 L5 0 L-5 0 Z" fill="url(#lampBowl)"/><ellipse cx="0" cy="-3" rx="8" ry="10" fill="url(#diyaFlame)" opacity=".6"/></g>
          <g transform="translate(405,503)"><path d="M-6 3 Q0 8 6 3 L5 0 L-5 0 Z" fill="url(#lampBowl)"/><ellipse cx="0" cy="-3" rx="8" ry="10" fill="url(#diyaFlame)" opacity=".6"/></g>
          <g transform="translate(428,503)"><path d="M-6 3 Q0 8 6 3 L5 0 L-5 0 Z" fill="url(#lampBowl)"/><ellipse cx="0" cy="-3" rx="8" ry="10" fill="url(#diyaFlame)" opacity=".6"/></g>
        </g>
      </g>

      {/* Step at bottom */}
      <rect x="220" y="498" width="140" height="8" fill="#c89060" rx="1"/>
      <rect x="210" y="504" width="160" height="6" fill="#b07840" rx="1"/>
    </svg>
    </div>
  );
}