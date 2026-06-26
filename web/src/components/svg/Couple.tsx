export default function CoupleSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 880 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="coupleHalo" cx=".5" cy=".7" r=".6">
          <stop offset="0%" stopColor="rgba(255,208,100,.35)"/>
          <stop offset="100%" stopColor="rgba(255,208,100,0)"/>
        </radialGradient>
        <linearGradient id="brideLehenga" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a1530"/>
          <stop offset="40%" stopColor="#c01840"/>
          <stop offset="70%" stopColor="#9a1830"/>
          <stop offset="100%" stopColor="#5a0c1e"/>
        </linearGradient>
        <linearGradient id="brideLehenga2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5a0c1e"/>
          <stop offset="100%" stopColor="#c01840"/>
        </linearGradient>
        <linearGradient id="groomSherwani" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0a1a38"/>
          <stop offset="40%" stopColor="#142848"/>
          <stop offset="100%" stopColor="#06101e"/>
        </linearGradient>
        <radialGradient id="skinTone" cx=".4" cy=".3" r=".6">
          <stop offset="0%" stopColor="#f0c090"/>
          <stop offset="60%" stopColor="#d4905a"/>
          <stop offset="100%" stopColor="#a86038"/>
        </radialGradient>
        <linearGradient id="dupattaGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(200,60,80,.8)"/>
          <stop offset="100%" stopColor="rgba(120,10,40,.4)"/>
        </linearGradient>
        <linearGradient id="groomTurban" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a44c"/>
          <stop offset="100%" stopColor="#8a6a1f"/>
        </linearGradient>
        <radialGradient id="sacreFire" cx=".5" cy=".8" r=".5">
          <stop offset="0%" stopColor="#fff6c0"/>
          <stop offset="30%" stopColor="#ff8a20"/>
          <stop offset="70%" stopColor="#c04010"/>
          <stop offset="100%" stopColor="#c04010" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="floorLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(201,164,76,0)"/>
          <stop offset="30%" stopColor="rgba(201,164,76,.5)"/>
          <stop offset="70%" stopColor="rgba(201,164,76,.5)"/>
          <stop offset="100%" stopColor="rgba(201,164,76,0)"/>
        </linearGradient>
      </defs>

      {/* Atmospheric halo behind couple */}
      <ellipse cx="440" cy="420" rx="420" ry="200" fill="url(#coupleHalo)"/>

      {/* Sacred fire (kund) center */}
      <g id="sacredFire" transform="translate(440,420)">
        <rect x="-40" y="-18" width="80" height="18" fill="#3a1a08" rx="3"/>
        <rect x="-36" y="-14" width="72" height="14" fill="#5a2a0e" rx="2"/>
        <ellipse cx="0" cy="-30" rx="38" ry="55" fill="url(#sacreFire)" opacity=".8"/>
        <ellipse cx="0" cy="-45" rx="22" ry="38" fill="url(#sacreFire)" opacity=".7"/>
        <path d="M-10 -50 Q-14 -35 -8 -22 Q0 -16 8 -22 Q14 -35 10 -50 Q4 -60 0 -68 Q-4 -60 -10 -50" fill="rgba(255,240,150,.9)"/>
        <path d="M0 -55 Q-6 -44 -3 -32 Q0 -25 3 -32 Q6 -44 0 -55" fill="rgba(255,255,220,1)"/>
      </g>

      {/* BRIDE (left, slightly offset) */}
      <g id="bride" transform="translate(330,0)">
        {/* Lehenga - voluminous skirt with folds */}
        <path d="M56 480 L2 480 Q-28 440 -38 380 Q-46 320 -30 280 Q-14 240 10 224 L34 224 Q58 240 74 280 Q90 320 82 380 Q72 440 56 480 Z" fill="url(#brideLehenga)"/>
        {/* Lehenga fold details */}
        <path d="M10 224 Q-10 320 -20 380 Q-26 430 10 480" fill="none" stroke="rgba(255,200,100,.15)" strokeWidth="3"/>
        <path d="M34 224 Q24 310 18 380 Q14 430 30 480" fill="none" stroke="rgba(255,200,100,.1)" strokeWidth="2"/>
        <path d="M55 230 Q60 310 65 380 Q68 430 60 480" fill="none" stroke="rgba(0,0,0,.2)" strokeWidth="2"/>
        {/* Lehenga hem embroidery line */}
        <path d="M2 480 Q30 475 56 480" fill="none" stroke="url(#groomTurban)" strokeWidth="2"/>
        <path d="M-5 470 Q28 465 58 470" fill="none" stroke="rgba(201,164,76,.4)" strokeWidth="1.2"/>
        {/* Choli (blouse) */}
        <path d="M10 224 Q8 196 18 180 Q26 166 34 164 Q42 162 48 164 Q58 166 64 180 Q74 196 74 224 Z" fill="#7a0e24"/>
        {/* Dupatta (veil/scarf) over shoulder */}
        <path d="M-30 190 Q0 210 10 224 Q-10 290 -38 380" fill="url(#dupattaGrad)" opacity=".85"/>
        <path d="M75 190 Q80 250 82 380" fill="none" stroke="rgba(200,100,100,.3)" strokeWidth="8" strokeLinecap="round"/>
        {/* Neck and head */}
        <ellipse cx="34" cy="156" rx="14" ry="20" fill="url(#skinTone)"/>
        {/* Hair bun */}
        <ellipse cx="34" cy="136" rx="18" ry="14" fill="#1a0a06"/>
        <ellipse cx="42" cy="130" rx="10" ry="8" fill="#2a1208"/>
        {/* Maang tikka (head ornament) */}
        <circle cx="34" cy="132" r="4" fill="url(#goldV)"/>
        <line x1="34" y1="136" x2="34" y2="154" stroke="rgba(201,164,76,.7)" strokeWidth="1"/>
        {/* Necklace dots */}
        <path d="M22 172 Q34 178 46 172" fill="none" stroke="url(#goldV)" strokeWidth="2"/>
        {/* Bangles suggestion */}
        <ellipse cx="8" cy="240" rx="5" ry="2" fill="none" stroke="url(#goldV)" strokeWidth="1.5"/>
        <ellipse cx="62" cy="244" rx="5" ry="2" fill="none" stroke="url(#goldV)" strokeWidth="1.5"/>
      </g>

      {/* GROOM (right) */}
      <g id="groom" transform="translate(484,0)">
        {/* Sherwani body */}
        <path d="M10 228 Q-8 240 -16 280 Q-24 330 -20 420 Q-16 460 -10 480 L50 480 Q56 460 60 420 Q64 330 56 280 Q48 240 30 228 Z" fill="url(#groomSherwani)"/>
        {/* Sherwani collar band */}
        <path d="M10 228 L10 196 Q12 186 20 182 L30 180 Q38 180 40 186 L40 196 L30 228 Z" fill="#1e3a60"/>
        {/* Gold embroidery lines on sherwani */}
        <path d="M20 200 L20 280" stroke="rgba(201,164,76,.25)" strokeWidth="1"/>
        <path d="M30 192 L30 280" stroke="rgba(201,164,76,.2)" strokeWidth="1"/>
        <path d="M40 200 L40 280" stroke="rgba(201,164,76,.25)" strokeWidth="1"/>
        {/* Buttons */}
        <circle cx="25" cy="220" r="2.5" fill="url(#goldV)"/>
        <circle cx="25" cy="236" r="2.5" fill="url(#goldV)"/>
        <circle cx="25" cy="252" r="2.5" fill="url(#goldV)"/>
        {/* Dhoti visible at bottom */}
        <path d="M-10 480 Q8 472 20 480 Q28 486 40 480 Q52 472 62 480" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="2"/>
        {/* Neck / face */}
        <ellipse cx="20" cy="164" rx="12" ry="18" fill="url(#skinTone)"/>
        {/* Turban */}
        <path d="M4 150 Q8 128 20 124 Q32 120 36 128 L36 148 Q36 160 28 165 L12 165 Q4 162 4 150 Z" fill="url(#groomTurban)"/>
        <path d="M4 150 Q2 138 6 130" fill="none" stroke="rgba(201,164,76,.6)" strokeWidth="1.5"/>
        <ellipse cx="20" cy="128" rx="16" ry="6" fill="rgba(255,230,100,.4)"/>
        {/* Brooch */}
        <circle cx="20" cy="126" r="4" fill="url(#goldV)"/>
        <circle cx="20" cy="126" r="2" fill="rgba(255,255,200,.8)"/>
      </g>

      {/* Flower petals scattered on floor */}
      <g opacity=".6">
        <ellipse cx="280" cy="482" rx="6" ry="3" fill="#d04060" transform="rotate(-15,280,482)"/>
        <ellipse cx="320" cy="486" rx="5" ry="2.5" fill="#e06080" transform="rotate(10,320,486)"/>
        <ellipse cx="560" cy="484" rx="6" ry="3" fill="#d04060" transform="rotate(20,560,484)"/>
        <ellipse cx="600" cy="478" rx="5" ry="2.5" fill="#e06080" transform="rotate(-10,600,478)"/>
        <ellipse cx="420" cy="480" rx="4" ry="2" fill="#f0a0c0" transform="rotate(5,420,480)"/>
        <ellipse cx="460" cy="486" rx="4" ry="2" fill="#d87090" transform="rotate(-5,460,486)"/>
      </g>

      {/* Floor line */}
      <rect x="0" y="488" width="880" height="3" fill="url(#floorLine)" rx="1"/>

      {/* Birds motifs */}
      <g id="birds" opacity="0">
        <path d="M80 160 q10 -10 22 0 q10 -10 22 0" fill="none" stroke="rgba(227,199,133,.6)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M120 200 q8 -8 18 0 q8 -8 18 0" fill="none" stroke="rgba(227,199,133,.5)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M730 170 q10 -10 22 0 q10 -10 22 0" fill="none" stroke="rgba(227,199,133,.6)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M690 220 q8 -8 18 0 q8 -8 18 0" fill="none" stroke="rgba(227,199,133,.5)" strokeWidth="1.2" strokeLinecap="round"/>
      </g>
    </svg>
    </div>
  );
}