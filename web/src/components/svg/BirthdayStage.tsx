export default function BirthdayStageSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 560 660" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tier1G" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffbedd"/>
          <stop offset="40%" stopColor="#e8609a"/>
          <stop offset="100%" stopColor="#b82870"/>
        </linearGradient>
        <linearGradient id="tier1Side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c03070"/>
          <stop offset="100%" stopColor="#8a1848"/>
        </linearGradient>
        <linearGradient id="tier2G" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d0b8ff"/>
          <stop offset="40%" stopColor="#8060d8"/>
          <stop offset="100%" stopColor="#5838a8"/>
        </linearGradient>
        <linearGradient id="tier2Side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6848b8"/>
          <stop offset="100%" stopColor="#3a2078"/>
        </linearGradient>
        <linearGradient id="tier3G" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b0e8ff"/>
          <stop offset="40%" stopColor="#4490d0"/>
          <stop offset="100%" stopColor="#2060a8"/>
        </linearGradient>
        <linearGradient id="tier3Side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3070b8"/>
          <stop offset="100%" stopColor="#183880"/>
        </linearGradient>
        <radialGradient id="frosting1" cx=".5" cy=".2" r=".8">
          <stop offset="0%" stopColor="#ffd0e8"/>
          <stop offset="100%" stopColor="#ffb0d0"/>
        </radialGradient>
        <radialGradient id="frosting2" cx=".5" cy=".2" r=".8">
          <stop offset="0%" stopColor="#e0d0ff"/>
          <stop offset="100%" stopColor="#c0a8ff"/>
        </radialGradient>
        <radialGradient id="frosting3" cx=".5" cy=".2" r=".8">
          <stop offset="0%" stopColor="#c8eeff"/>
          <stop offset="100%" stopColor="#a8d8ff"/>
        </radialGradient>
        <radialGradient id="bdFlameG" cx=".5" cy=".8" r=".6">
          <stop offset="0%" stopColor="#fff8d0"/>
          <stop offset="35%" stopColor="#ffb030"/>
          <stop offset="70%" stopColor="#e04010"/>
          <stop offset="100%" stopColor="#e04010" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="candleG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0e8d0"/>
          <stop offset="50%" stopColor="#fff8f0"/>
          <stop offset="100%" stopColor="#e0d8c0"/>
        </linearGradient>
        <radialGradient id="cakePlate" cx=".5" cy=".3" r=".7">
          <stop offset="0%" stopColor="#f8f0e0"/>
          <stop offset="100%" stopColor="#d0c090"/>
        </radialGradient>
        <linearGradient id="plateEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d8a0"/>
          <stop offset="100%" stopColor="#a89040"/>
        </linearGradient>
        <filter id="cakeShadow"><feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="rgba(80,0,60,.4)"/></filter>
      </defs>

      <g id="cakeGrp" style={{transformOrigin: "280px 620px", transform: "scale(0)"}} filter="url(#cakeShadow)">

        {/* Plate */}
        <ellipse cx="280" cy="600" rx="180" ry="22" fill="url(#cakePlate)"/>
        <ellipse cx="280" cy="600" rx="180" ry="22" fill="none" stroke="url(#plateEdge)" strokeWidth="2"/>
        <ellipse cx="280" cy="598" rx="174" ry="18" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1"/>

        {/* TIER 1 (bottom) - oval top + body */}
        <ellipse cx="280" cy="458" rx="155" ry="18" fill="url(#frosting1)"/>
        <path d="M125 460 L125 582 Q125 600 280 600 Q435 600 435 582 L435 460 Q435 474 280 476 Q125 474 125 460 Z" fill="url(#tier1G)"/>
        {/* T1 side shadow */}
        <path d="M125 460 L125 582 Q128 596 145 600" fill="none" stroke="url(#tier1Side)" strokeWidth="8" opacity=".5"/>
        {/* T1 frosting drips */}
        <path d="M135 470 Q145 494 140 510 M175 465 Q180 488 178 505 M215 462 Q217 485 216 502 M255 460 Q256 483 256 500 M295 460 Q296 483 296 500 M335 461 Q338 484 336 502 M375 463 Q380 486 378 504 M415 466 Q420 490 418 506" fill="none" stroke="rgba(255,200,220,.5)" strokeWidth="3" strokeLinecap="round"/>
        {/* T1 decoration dots */}
        <circle cx="170" cy="530" r="5" fill="rgba(255,255,255,.4)"/><circle cx="220" cy="545" r="4" fill="rgba(255,255,255,.3)"/><circle cx="280" cy="548" r="5" fill="rgba(255,255,255,.4)"/><circle cx="340" cy="545" r="4" fill="rgba(255,255,255,.3)"/><circle cx="390" cy="530" r="5" fill="rgba(255,255,255,.4)"/>
        {/* T1 ribbon band */}
        <path d="M125 520 L435 520" stroke="rgba(255,255,255,.2)" strokeWidth="6"/>
        <path d="M125 522 L435 522" stroke="rgba(255,200,220,.3)" strokeWidth="2"/>

        {/* TIER 2 (middle) */}
        <ellipse cx="280" cy="344" rx="116" ry="16" fill="url(#frosting2)"/>
        <path d="M164 346 L164 454 Q164 468 280 468 Q396 468 396 454 L396 346 Q396 358 280 360 Q164 358 164 346 Z" fill="url(#tier2G)"/>
        <path d="M164 346 L164 454 Q166 466 180 468" fill="none" stroke="url(#tier2Side)" strokeWidth="7" opacity=".5"/>
        <path d="M176 356 Q180 376 178 392 M214 349 Q216 369 215 386 M252 346 Q253 366 253 382 M308 346 Q309 366 309 382 M346 349 Q348 369 347 386 M382 356 Q386 376 384 392" fill="none" stroke="rgba(210,190,255,.5)" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="220" cy="420" r="5" fill="rgba(255,255,255,.4)"/><circle cx="280" cy="428" r="5" fill="rgba(255,255,255,.4)"/><circle cx="340" cy="420" r="5" fill="rgba(255,255,255,.4)"/>

        {/* TIER 3 (top) */}
        <ellipse cx="280" cy="240" rx="80" ry="13" fill="url(#frosting3)"/>
        <path d="M200 242 L200 338 Q200 350 280 352 Q360 350 360 338 L360 242 Q360 252 280 254 Q200 252 200 242 Z" fill="url(#tier3G)"/>
        <path d="M200 242 L200 338 Q202 349 214 350" fill="none" stroke="url(#tier3Side)" strokeWidth="6" opacity=".5"/>
        <path d="M212 250 Q214 268 213 282 M248 243 Q249 261 249 275 M312 243 Q313 261 313 275 M348 250 Q350 268 349 282" fill="none" stroke="rgba(180,230,255,.5)" strokeWidth="3" strokeLinecap="round"/>

        {/* Flowers on T1 top edge */}
        <g transform="translate(135,462)">
          <circle cx="0" cy="0" r="7" fill="#ff9abc"/>
          <circle cx="0" cy="-8" r="5" fill="#ffc0d0"/><circle cx="7" cy="-4" r="5" fill="#ffc0d0"/><circle cx="7" cy="4" r="5" fill="#ffc0d0"/>
          <circle cx="0" cy="8" r="5" fill="#ffc0d0"/><circle cx="-7" cy="4" r="5" fill="#ffc0d0"/><circle cx="-7" cy="-4" r="5" fill="#ffc0d0"/>
          <circle cx="0" cy="0" r="3" fill="#ffe0e8"/>
        </g>
        <g transform="translate(425,462)">
          <circle cx="0" cy="0" r="7" fill="#ff9abc"/>
          <circle cx="0" cy="-8" r="5" fill="#ffc0d0"/><circle cx="7" cy="-4" r="5" fill="#ffc0d0"/><circle cx="7" cy="4" r="5" fill="#ffc0d0"/>
          <circle cx="0" cy="8" r="5" fill="#ffc0d0"/><circle cx="-7" cy="4" r="5" fill="#ffc0d0"/><circle cx="-7" cy="-4" r="5" fill="#ffc0d0"/>
          <circle cx="0" cy="0" r="3" fill="#ffe0e8"/>
        </g>
        {/* Flowers on T2 top edge */}
        <g transform="translate(175,348)">
          <circle cx="0" cy="0" r="6" fill="#c0a0ff"/>
          <circle cx="0" cy="-7" r="4" fill="#d8c0ff"/><circle cx="6" cy="-3" r="4" fill="#d8c0ff"/><circle cx="6" cy="3" r="4" fill="#d8c0ff"/>
          <circle cx="0" cy="7" r="4" fill="#d8c0ff"/><circle cx="-6" cy="3" r="4" fill="#d8c0ff"/><circle cx="-6" cy="-3" r="4" fill="#d8c0ff"/>
        </g>
        <g transform="translate(385,348)">
          <circle cx="0" cy="0" r="6" fill="#c0a0ff"/>
          <circle cx="0" cy="-7" r="4" fill="#d8c0ff"/><circle cx="6" cy="-3" r="4" fill="#d8c0ff"/><circle cx="6" cy="3" r="4" fill="#d8c0ff"/>
          <circle cx="0" cy="7" r="4" fill="#d8c0ff"/><circle cx="-6" cy="3" r="4" fill="#d8c0ff"/><circle cx="-6" cy="-3" r="4" fill="#d8c0ff"/>
        </g>

        {/* Candle */}
        <rect x="272" y="176" width="16" height="64" rx="3" fill="url(#candleG)"/>
        <line x1="272" y1="192" x2="288" y2="192" stroke="#b89878" strokeWidth="1" opacity=".5"/>
        <line x1="272" y1="208" x2="288" y2="208" stroke="#b89878" strokeWidth="1" opacity=".5"/>
        {/* Wick */}
        <path d="M280 176 Q282 168 280 162" stroke="#4a2a0a" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* Flame glow */}
        <ellipse cx="280" cy="148" rx="24" ry="36" fill="url(#bdFlameG)" opacity=".7" id="bdFlameGlow"/>
        {/* Flame body */}
        <path id="bdFlame" d="M280 162 Q272 148 274 132 Q276 116 280 108 Q284 116 286 132 Q288 148 280 162" fill="url(#bdFlameG)"/>
        <path d="M280 158 Q276 148 277 136 Q279 122 280 115 Q281 122 283 136 Q284 148 280 158" fill="rgba(255,255,220,.9)"/>
      </g>
    </svg>
    </div>
  );
}