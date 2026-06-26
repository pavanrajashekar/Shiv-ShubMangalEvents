export default function RingsStageSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Gold ring - highly metallic */}
        <linearGradient id="goldRingMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff0c0"/>
          <stop offset="15%" stopColor="#f0d080"/>
          <stop offset="30%" stopColor="#c9a44c"/>
          <stop offset="45%" stopColor="#8a6010"/>
          <stop offset="55%" stopColor="#6a4a08"/>
          <stop offset="70%" stopColor="#c9a44c"/>
          <stop offset="85%" stopColor="#f0d080"/>
          <stop offset="100%" stopColor="#fff0c0"/>
        </linearGradient>
        <linearGradient id="goldRingInner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(10,5,8,.9)"/>
          <stop offset="100%" stopColor="rgba(20,10,14,.9)"/>
        </linearGradient>
        {/* Rose gold ring */}
        <linearGradient id="roseRingMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe0d8"/>
          <stop offset="15%" stopColor="#f0b0a0"/>
          <stop offset="30%" stopColor="#d07068"/>
          <stop offset="45%" stopColor="#903040"/>
          <stop offset="55%" stopColor="#702030"/>
          <stop offset="70%" stopColor="#c06068"/>
          <stop offset="85%" stopColor="#e0a090"/>
          <stop offset="100%" stopColor="#ffe0d8"/>
        </linearGradient>
        {/* Heart gem facets */}
        <linearGradient id="heartTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9080"/>
          <stop offset="100%" stopColor="#d03050"/>
        </linearGradient>
        <linearGradient id="heartLeft" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e05060"/>
          <stop offset="100%" stopColor="#a01830"/>
        </linearGradient>
        <linearGradient id="heartRight" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#e05060"/>
          <stop offset="100%" stopColor="#a01830"/>
        </linearGradient>
        <radialGradient id="heartGlow" cx=".5" cy=".4">
          <stop offset="0%" stopColor="rgba(255,80,100,.5)"/>
          <stop offset="100%" stopColor="rgba(255,80,100,0)"/>
        </radialGradient>
        <radialGradient id="ringGlow" cx=".5" cy=".5">
          <stop offset="0%" stopColor="rgba(201,164,76,.3)"/>
          <stop offset="100%" stopColor="rgba(201,164,76,0)"/>
        </radialGradient>
        {/* Diamond sparkle shape */}
        <filter id="sparkleGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Atmospheric glow behind rings */}
      <ellipse cx="280" cy="280" rx="220" ry="200" fill="url(#ringGlow)" opacity=".6"/>
      <ellipse cx="280" cy="280" rx="160" ry="140" fill="url(#heartGlow)" opacity=".3"/>

      {/* GOLD RING (left) */}
      <g id="ringA">
        {/* Ring shadow */}
        <circle cx="200" cy="280" r="116" fill="rgba(0,0,0,.3)" transform="translate(4,6)"/>
        {/* Ring outer body (thick stroke = filled donut via two circles) */}
        <circle cx="200" cy="280" r="116" fill="url(#goldRingMetal)"/>
        <circle cx="200" cy="280" r="88" fill="url(#goldRingInner)"/>
        {/* Ring highlight arc */}
        <path d="M122 240 Q140 168 200 166 Q258 168 276 240" fill="none" stroke="rgba(255,240,180,.5)" strokeWidth="6" strokeLinecap="round"/>
        {/* Engraving lines */}
        <circle cx="200" cy="280" r="112" fill="none" stroke="rgba(255,220,120,.2)" strokeWidth="1.5"/>
        <circle cx="200" cy="280" r="92" fill="none" stroke="rgba(255,220,120,.15)" strokeWidth="1"/>
        {/* Diamond on gold ring */}
        <g transform="translate(200,166)">
          <polygon points="0,-12 10,0 0,16 -10,0" fill="rgba(220,240,255,.9)"/>
          <polygon points="0,-12 10,0 0,-2" fill="rgba(255,255,255,.9)"/>
          <polygon points="-10,0 0,-2 0,16" fill="rgba(180,200,230,.7)"/>
          <polygon points="10,0 0,-2 0,16" fill="rgba(200,220,250,.8)"/>
          <circle cx="0" cy="2" r="3" fill="rgba(255,255,255,.6)"/>
        </g>
      </g>

      {/* ROSE GOLD RING (right) */}
      <g id="ringB">
        <circle cx="360" cy="280" r="116" fill="rgba(0,0,0,.3)" transform="translate(4,6)"/>
        <circle cx="360" cy="280" r="116" fill="url(#roseRingMetal)"/>
        <circle cx="360" cy="280" r="88" fill="url(#goldRingInner)"/>
        <path d="M282 240 Q300 168 360 166 Q418 168 438 240" fill="none" stroke="rgba(255,220,210,.4)" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="360" cy="280" r="112" fill="none" stroke="rgba(255,200,180,.2)" strokeWidth="1.5"/>
        <circle cx="360" cy="280" r="92" fill="none" stroke="rgba(255,200,180,.15)" strokeWidth="1"/>
        {/* Ruby on rose ring */}
        <g transform="translate(360,166)">
          <polygon points="0,-12 10,0 0,16 -10,0" fill="#ff4060"/>
          <polygon points="0,-12 10,0 0,-2" fill="#ff9090"/>
          <polygon points="-10,0 0,-2 0,16" fill="#c01830"/>
          <polygon points="10,0 0,-2 0,16" fill="#e03050"/>
          <circle cx="0" cy="2" r="3" fill="rgba(255,200,200,.8)"/>
        </g>
      </g>

      {/* HEART (appears when rings overlap) */}
      <path id="heartA" d="M280 330 Q220 280 218 245 a46 46 0 0 1 92 -8 a46 46 0 0 1 92 8 Q400 280 280 330 Q265 348 280 360 Q295 348 280 330 Z"
        fill="url(#heartTop)" opacity="0" style={{transformOrigin: "280px 310px", transform: "scale(0)"}}/>

      {/* Diamond sparkles (4-point stars) */}
      <g id="sparkles" filter="url(#sparkleGlow)">
        <g transform="translate(80,90)" opacity=".8">
          <polygon points="0,-14 3,-3 14,0 3,3 0,14 -3,3 -14,0 -3,-3" fill="#e3c785"/>
          <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="white" opacity=".7"/>
        </g>
        <g transform="translate(460,100)" opacity=".7">
          <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#e3c785"/>
          <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="white" opacity=".6"/>
        </g>
        <g transform="translate(490,440)" opacity=".75">
          <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#e3c785"/>
        </g>
        <g transform="translate(70,440)" opacity=".7">
          <polygon points="0,-10 2,-2 10,0 2,2 0,10 -2,2 -10,0 -2,-2" fill="#e3c785"/>
        </g>
        <g transform="translate(280,80)" opacity=".6">
          <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#fff0c0"/>
        </g>
      </g>
    </svg>
    </div>
  );
}