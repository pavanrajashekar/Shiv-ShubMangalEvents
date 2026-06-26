export default function CorporateStageSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 1400 620" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="stageFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1828"/>
          <stop offset="100%" stopColor="#020610"/>
        </linearGradient>
        <linearGradient id="stageEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a70b8"/>
          <stop offset="100%" stopColor="#1a3060"/>
        </linearGradient>
        <linearGradient id="ledWallG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#061430"/>
          <stop offset="100%" stopColor="#020a1e"/>
        </linearGradient>
        <linearGradient id="barBlue" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0050cc"/>
          <stop offset="50%" stopColor="#00b8ff"/>
          <stop offset="100%" stopColor="#80f0ff"/>
        </linearGradient>
        <linearGradient id="barPurple" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8020c0"/>
          <stop offset="100%" stopColor="#d060ff"/>
        </linearGradient>
        <linearGradient id="barCyan" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#006080"/>
          <stop offset="100%" stopColor="#00f0d8"/>
        </linearGradient>
        <radialGradient id="spot1G" cx=".5" cy="0" r=".7">
          <stop offset="0%" stopColor="rgba(100,200,255,.5)"/>
          <stop offset="100%" stopColor="rgba(100,200,255,0)"/>
        </radialGradient>
        <radialGradient id="spot2G" cx=".5" cy="0" r=".7">
          <stop offset="0%" stopColor="rgba(150,120,255,.45)"/>
          <stop offset="100%" stopColor="rgba(150,120,255,0)"/>
        </radialGradient>
        <radialGradient id="podiumLight" cx=".5" cy=".1" r=".8">
          <stop offset="0%" stopColor="rgba(80,180,255,.7)"/>
          <stop offset="100%" stopColor="rgba(80,180,255,0)"/>
        </radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {/* Spotlight beams */}
      <g id="spots">
        <path d="M260 0 L160 620 L360 620 Z" fill="url(#spot1G)" opacity=".35" id="s1"/>
        <path d="M700 0 L600 620 L800 620 Z" fill="url(#spot2G)" opacity=".3" id="s2"/>
        <path d="M1140 0 L1040 620 L1240 620 Z" fill="url(#spot1G)" opacity=".35" id="s3"/>
      </g>

      {/* Stage floor with perspective reflection */}
      <rect x="0" y="516" width="1400" height="104" fill="url(#stageFloor)"/>
      <rect x="0" y="510" width="1400" height="8" fill="url(#stageEdge)"/>
      {/* Reflection shimmer on floor */}
      <rect x="0" y="520" width="1400" height="40" fill="rgba(0,100,200,.08)"/>
      <path d="M0 518 L1400 518" stroke="rgba(80,180,255,.3)" strokeWidth="1"/>

      {/* LED wall */}
      <g id="ledwall" style={{transformOrigin: "700px 300px", transform: "scale(.5)", opacity: "0"}}>
        {/* Wall body */}
        <rect x="240" y="60" width="920" height="420" fill="url(#ledWallG)" rx="4"/>
        {/* Outer frame/bezel */}
        <rect x="234" y="54" width="932" height="432" fill="none" stroke="#3a70b8" strokeWidth="3" rx="5"/>
        <rect x="238" y="58" width="924" height="424" fill="none" stroke="rgba(80,180,255,.25)" strokeWidth="1" rx="3"/>

        {/* LED grid cells with color */}
        <g opacity=".6">
          {/* Row dividers */}
          <line x1="240" y1="165" x2="1160" y2="165" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          <line x1="240" y1="270" x2="1160" y2="270" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          <line x1="240" y1="375" x2="1160" y2="375" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          {/* Col dividers */}
          <line x1="393" y1="60" x2="393" y2="480" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          <line x1="546" y1="60" x2="546" y2="480" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          <line x1="700" y1="60" x2="700" y2="480" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          <line x1="853" y1="60" x2="853" y2="480" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
          <line x1="1007" y1="60" x2="1007" y2="480" stroke="rgba(80,180,255,.2)" strokeWidth="1"/>
        </g>

        {/* Equalizer bars with multiple colors */}
        <rect className="ebar" x="300" y="376" width="46" height="88" rx="3" fill="url(#barCyan)"/>
        <rect className="ebar" x="393" y="310" width="46" height="154" rx="3" fill="url(#barBlue)"/>
        <rect className="ebar" x="487" y="348" width="46" height="116" rx="3" fill="url(#barPurple)"/>
        <rect className="ebar" x="580" y="252" width="46" height="212" rx="3" fill="url(#barBlue)"/>
        <rect className="ebar" x="674" y="316" width="46" height="148" rx="3" fill="url(#barCyan)"/>
        <rect className="ebar" x="767" y="230" width="46" height="234" rx="3" fill="url(#barBlue)"/>
        <rect className="ebar" x="860" y="296" width="46" height="168" rx="3" fill="url(#barPurple)"/>
        <rect className="ebar" x="954" y="338" width="46" height="126" rx="3" fill="url(#barCyan)"/>
        <rect className="ebar" x="1048" y="360" width="46" height="104" rx="3" fill="url(#barBlue)"/>

        {/* Glow overlay on bars */}
        <rect x="240" y="60" width="920" height="420" fill="url(#barBlue)" opacity=".04"/>
      </g>

      {/* Stage podium */}
      <g id="podium" style={{transform: "translateY(100px)"}}>
        {/* Podium body */}
        <rect x="626" y="436" width="148" height="80" fill="#0a1828" rx="2"/>
        <rect x="626" y="436" width="148" height="6" fill="url(#stageEdge)" rx="1"/>
        <rect x="626" y="434" width="148" height="4" fill="rgba(80,180,255,.4)"/>
        {/* Podium front face accent */}
        <rect x="640" y="450" width="120" height="50" fill="rgba(20,40,80,.5)" rx="2"/>
        {/* LED strip on podium */}
        <rect x="640" y="445" width="120" height="3" fill="rgba(0,180,255,.6)" rx="1"/>
        {/* Podium light */}
        <ellipse cx="700" cy="434" rx="80" ry="30" fill="url(#podiumLight)" opacity=".6"/>
        {/* Logo placeholder on podium */}
        <text x="700" y="478" textAnchor="middle" fontFamily="'Italiana',serif" fontSize="16" fill="rgba(80,180,255,.7)" letterSpacing="4">LUMEN</text>
      </g>

      {/* Speaker silhouette at podium */}
      <g style={{transform: "translate(690px,390px)"}}>
        <ellipse cx="10" cy="-40" rx="10" ry="12" fill="rgba(80,100,140,.8)"/>
        <path d="M0 -28 L0 10 Q0 20 10 20 Q20 20 20 10 L20 -28 Z" fill="rgba(60,80,120,.8)"/>
        <path d="M0 -28 Q5 -10 10 5 Q15 -10 20 -28" fill="rgba(40,60,100,.6)"/>
      </g>
    </svg>
    </div>
  );
}