export default function MandapSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 1100 900" preserveAspectRatio="xMidYMax meet">
        <defs>
          {/* Gold gradients - multiple richness levels */}
          <linearGradient id="goldV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5e0a0"/>
            <stop offset="30%" stopColor="#d4a840"/>
            <stop offset="65%" stopColor="#c9a44c"/>
            <stop offset="100%" stopColor="#7a5c18"/>
          </linearGradient>
          <linearGradient id="goldH" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a5c18"/>
            <stop offset="25%" stopColor="#c9a44c"/>
            <stop offset="50%" stopColor="#f0d080"/>
            <stop offset="75%" stopColor="#c9a44c"/>
            <stop offset="100%" stopColor="#7a5c18"/>
          </linearGradient>
          <linearGradient id="pillarBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a1a08"/>
            <stop offset="18%" stopColor="#7a5218"/>
            <stop offset="35%" stopColor="#c9a44c"/>
            <stop offset="50%" stopColor="#f0d080"/>
            <stop offset="65%" stopColor="#c9a44c"/>
            <stop offset="82%" stopColor="#7a5218"/>
            <stop offset="100%" stopColor="#3a1a08"/>
          </linearGradient>
          <linearGradient id="pillarBodyR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3a1a08"/>
            <stop offset="18%" stopColor="#7a5218"/>
            <stop offset="35%" stopColor="#c9a44c"/>
            <stop offset="50%" stopColor="#f0d080"/>
            <stop offset="65%" stopColor="#c9a44c"/>
            <stop offset="82%" stopColor="#7a5218"/>
            <stop offset="100%" stopColor="#3a1a08"/>
          </linearGradient>
          <linearGradient id="drapeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a3a20"/>
            <stop offset="40%" stopColor="#5a1126"/>
            <stop offset="100%" stopColor="#2a0712"/>
          </linearGradient>
          <radialGradient id="petalGrad" cx=".35" cy=".3" r=".7">
            <stop offset="0%" stopColor="#fde4c4"/>
            <stop offset="40%" stopColor="#f0a060"/>
            <stop offset="100%" stopColor="#c85020"/>
          </radialGradient>
          <radialGradient id="petalGradDeep" cx=".35" cy=".3" r=".7">
            <stop offset="0%" stopColor="#ffe0b8"/>
            <stop offset="50%" stopColor="#e8882a"/>
            <stop offset="100%" stopColor="#9a4010"/>
          </radialGradient>
          <radialGradient id="flameOuter" cx=".5" cy=".9" r=".6">
            <stop offset="0%" stopColor="#fff6c0" stopOpacity="1"/>
            <stop offset="30%" stopColor="#ffbc30" stopOpacity=".9"/>
            <stop offset="70%" stopColor="#e05010" stopOpacity=".6"/>
            <stop offset="100%" stopColor="#e05010" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="glowAmber" cx=".5" cy=".5" r=".5">
            <stop offset="0%" stopColor="#ffd080" stopOpacity=".9"/>
            <stop offset="50%" stopColor="#d08020" stopOpacity=".4"/>
            <stop offset="100%" stopColor="#d08020" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="lampBowl" cx=".35" cy=".3" r=".7">
            <stop offset="0%" stopColor="#f5d890"/>
            <stop offset="50%" stopColor="#c9a44c"/>
            <stop offset="100%" stopColor="#6a4a10"/>
          </radialGradient>
          <radialGradient id="mandalaCenter" cx=".5" cy=".5">
            <stop offset="0%" stopColor="rgba(201,164,76,.5)"/>
            <stop offset="60%" stopColor="rgba(201,164,76,.12)"/>
            <stop offset="100%" stopColor="rgba(201,164,76,0)"/>
          </radialGradient>
          <radialGradient id="archGlow" cx=".5" cy=".5">
            <stop offset="0%" stopColor="rgba(201,164,76,.3)"/>
            <stop offset="100%" stopColor="rgba(201,164,76,0)"/>
          </radialGradient>
          <filter id="softGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="lampGlow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <filter id="petalBlur"><feGaussianBlur stdDeviation="0.4"/></filter>
        </defs>

        {/* Ambient ground glow */}
        <ellipse cx="550" cy="875" rx="420" ry="28" fill="url(#glowAmber)" opacity=".55"/>

        {/* Ground line */}
        <rect x="100" y="866" width="900" height="4" fill="url(#goldH)" rx="2" opacity=".7"/>
        <rect x="80" y="868" width="940" height="2" fill="url(#goldH)" rx="1" opacity=".35"/>

        {/* ============ LEFT PILLAR ============ */}
        <g id="pLeft" style={{opacity: "0", transform: "translateX(-120px)"}}>
          {/* Pillar shaft - filled with 3D gradient */}
          <rect x="172" y="230" width="56" height="636" fill="url(#pillarBody)" rx="2"/>
          {/* Pillar highlight stripe */}
          <rect x="192" y="230" width="16" height="636" fill="rgba(255,240,180,.12)" rx="1"/>
          {/* Shadow edge */}
          <rect x="172" y="230" width="8" height="636" fill="rgba(0,0,0,.3)" rx="1"/>
          <rect x="220" y="230" width="8" height="636" fill="rgba(0,0,0,.25)" rx="1"/>

          {/* Capital / top ornament */}
          <path d="M158 230 L242 230 L236 212 L164 212 Z" fill="url(#goldH)"/>
          <path d="M162 212 L238 212 L234 198 L166 198 Z" fill="url(#goldH)"/>
          <rect x="154" y="188" width="92" height="12" fill="url(#goldH)" rx="1"/>
          <rect x="150" y="178" width="100" height="12" fill="url(#goldH)" rx="1"/>
          {/* Capital medallion */}
          <ellipse cx="200" cy="210" rx="18" ry="10" fill="url(#goldH)" opacity=".8"/>
          <ellipse cx="200" cy="210" rx="12" ry="6" fill="rgba(255,240,160,.4)"/>

          {/* Base plinth */}
          <path d="M165 866 L165 856 L160 848 L240 848 L235 856 L235 866 Z" fill="url(#goldH)"/>
          <rect x="158" y="862" width="84" height="6" fill="url(#goldH)" rx="1"/>

          {/* Carved bands on pillar */}
          <rect x="172" y="450" width="56" height="4" fill="rgba(255,240,120,.25)" rx="1"/>
          <rect x="172" y="454" width="56" height="1" fill="rgba(0,0,0,.3)"/>
          <rect x="172" y="610" width="56" height="4" fill="rgba(255,240,120,.25)" rx="1"/>
          <rect x="172" y="614" width="56" height="1" fill="rgba(0,0,0,.3)"/>

          {/* Vine decoration - carved look */}
          <path d="M200 820 Q188 780 200 740 Q212 700 200 660 Q188 620 200 580 Q212 540 200 500 Q188 460 200 420" fill="none" stroke="rgba(255,220,100,.2)" strokeWidth="1.5"/>
          {/* Leaf motifs */}
          <ellipse cx="192" cy="798" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(-20,192,798)"/>
          <ellipse cx="208" cy="758" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(20,208,758)"/>
          <ellipse cx="192" cy="718" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(-20,192,718)"/>
          <ellipse cx="208" cy="638" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(20,208,638)"/>
          <ellipse cx="192" cy="558" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(-20,192,558)"/>
          <ellipse cx="208" cy="478" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(20,208,478)"/>
        </g>

        {/* ============ RIGHT PILLAR (mirror) ============ */}
        <g id="pRight" style={{opacity: "0", transform: "translateX(120px)"}}>
          <rect x="872" y="230" width="56" height="636" fill="url(#pillarBodyR)" rx="2"/>
          <rect x="892" y="230" width="16" height="636" fill="rgba(255,240,180,.12)" rx="1"/>
          <rect x="872" y="230" width="8" height="636" fill="rgba(0,0,0,.3)" rx="1"/>
          <rect x="920" y="230" width="8" height="636" fill="rgba(0,0,0,.25)" rx="1"/>
          <path d="M858 230 L942 230 L936 212 L864 212 Z" fill="url(#goldH)"/>
          <path d="M862 212 L938 212 L934 198 L866 198 Z" fill="url(#goldH)"/>
          <rect x="854" y="188" width="92" height="12" fill="url(#goldH)" rx="1"/>
          <rect x="850" y="178" width="100" height="12" fill="url(#goldH)" rx="1"/>
          <ellipse cx="900" cy="210" rx="18" ry="10" fill="url(#goldH)" opacity=".8"/>
          <ellipse cx="900" cy="210" rx="12" ry="6" fill="rgba(255,240,160,.4)"/>
          <path d="M865 866 L865 856 L860 848 L940 848 L935 856 L935 866 Z" fill="url(#goldH)"/>
          <rect x="858" y="862" width="84" height="6" fill="url(#goldH)" rx="1"/>
          <rect x="872" y="450" width="56" height="4" fill="rgba(255,240,120,.25)" rx="1"/>
          <rect x="872" y="610" width="56" height="4" fill="rgba(255,240,120,.25)" rx="1"/>
          <path d="M900 820 Q888 780 900 740 Q912 700 900 660 Q888 620 900 580 Q912 540 900 500 Q888 460 900 420" fill="none" stroke="rgba(255,220,100,.2)" strokeWidth="1.5"/>
          <ellipse cx="892" cy="798" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(-20,892,798)"/>
          <ellipse cx="908" cy="758" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(20,908,758)"/>
          <ellipse cx="892" cy="718" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(-20,892,718)"/>
          <ellipse cx="908" cy="638" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(20,908,638)"/>
          <ellipse cx="892" cy="558" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(-20,892,558)"/>
          <ellipse cx="908" cy="478" rx="5" ry="8" fill="rgba(201,164,76,.25)" transform="rotate(20,908,478)"/>
        </g>

        {/* ============ ARCH ============ */}
        <g id="arch" style={{opacity: "0"}}>
          {/* Inner arch glow */}
          <path d="M172 178 Q550 -100 928 178" fill="none" stroke="url(#glowAmber)" strokeWidth="40" opacity=".18"/>
          {/* Arch body - thick filled shape */}
          <path d="M148 182 Q550 -130 952 182 L944 172 Q550 -112 156 172 Z" fill="url(#goldH)" opacity=".9"/>
          {/* Arch inner line */}
          <path d="M172 178 Q550 -90 928 178" fill="none" stroke="url(#goldH)" strokeWidth="2.5"/>

          {/* Arch ornamental scallops (filled petals along arch) */}
          <g id="archPetals" opacity=".7">
            {/* 11 scallop petals evenly along arch */}
            <g transform="translate(218,140) rotate(-62)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(280,88) rotate(-48)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(352,50) rotate(-32)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(432,24) rotate(-16)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(550,12) rotate(0)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(668,24) rotate(16)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(748,50) rotate(32)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(820,88) rotate(48)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
            <g transform="translate(882,140) rotate(62)"><ellipse rx="10" ry="16" fill="url(#goldV)"/></g>
          </g>

          {/* Arch finial */}
          <ellipse cx="550" cy="2" rx="18" ry="22" fill="url(#goldV)" filter="url(#softGlow)"/>
          <ellipse cx="550" cy="2" rx="10" ry="14" fill="rgba(255,248,200,.6)"/>
          <path d="M542 -22 L558 -22 L556 -30 L544 -30 Z" fill="url(#goldV)"/>
          <circle cx="550" cy="-32" r="5" fill="url(#goldV)" filter="url(#softGlow)"/>
        </g>

        {/* ============ DRAPE ============ */}
        <g id="drape" style={{opacity: "0", transform: "scaleY(0)", transformOrigin: "550px 178px"}}>
          {/* Main drape body with rich fabric folds */}
          <path d="M172 178 L928 178 L902 270 L858 202 L814 282 L770 210 L726 288 L682 216 L638 292 L594 218 L550 296 L506 218 L462 292 L418 216 L374 288 L330 210 L286 282 L242 202 L198 270 Z" fill="url(#drapeGrad)" opacity=".9"/>
          {/* Drape highlight fold */}
          <path d="M172 178 L928 178" stroke="rgba(255,200,150,.35)" strokeWidth="2.5"/>
          <path d="M172 178 L928 178" stroke="rgba(201,164,76,.5)" strokeWidth="1.2"/>
          {/* Fabric shimmer highlights */}
          <path d="M242 202 L198 270" stroke="rgba(255,200,140,.2)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M374 288 L330 210" stroke="rgba(255,200,140,.2)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M506 218 L462 292" stroke="rgba(255,200,140,.2)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M638 292 L594 218" stroke="rgba(255,200,140,.2)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M770 210 L726 288" stroke="rgba(255,200,140,.2)" strokeWidth="4" strokeLinecap="round"/>
          <path d="M902 270 L858 202" stroke="rgba(255,200,140,.2)" strokeWidth="4" strokeLinecap="round"/>
          {/* Gold trim at top */}
          <rect x="172" y="176" width="756" height="5" fill="url(#goldH)" rx="2"/>
          {/* Hanging pearl strings */}
          <g opacity=".6">
            <g><circle cx="300" cy="214" r="3" fill="url(#goldV)"/><circle cx="300" cy="224" r="2.5" fill="url(#goldV)"/><circle cx="300" cy="233" r="2" fill="url(#goldV)"/></g>
            <g><circle cx="400" cy="222" r="3" fill="url(#goldV)"/><circle cx="400" cy="232" r="2.5" fill="url(#goldV)"/><circle cx="400" cy="241" r="2" fill="url(#goldV)"/></g>
            <g><circle cx="550" cy="228" r="3" fill="url(#goldV)"/><circle cx="550" cy="238" r="2.5" fill="url(#goldV)"/><circle cx="550" cy="247" r="2" fill="url(#goldV)"/></g>
            <g><circle cx="700" cy="222" r="3" fill="url(#goldV)"/><circle cx="700" cy="232" r="2.5" fill="url(#goldV)"/><circle cx="700" cy="241" r="2" fill="url(#goldV)"/></g>
            <g><circle cx="800" cy="214" r="3" fill="url(#goldV)"/><circle cx="800" cy="224" r="2.5" fill="url(#goldV)"/><circle cx="800" cy="233" r="2" fill="url(#goldV)"/></g>
          </g>
        </g>

        {/* ============ GARLAND ============ */}
        <g id="garland" style={{opacity: "0"}}>
          {/* Garland string */}
          <path d="M228 196 Q380 290 550 252 Q720 290 872 196" fill="none" stroke="url(#goldH)" strokeWidth="1.5" opacity=".6"/>
          {/* Marigold clusters - each has multiple petals */}
          <g id="marigolds"></g>
        </g>

        {/* ============ MANDALA ============ */}
        <g id="mandala" style={{opacity: "0", transformOrigin: "550px 760px"}}>
          {/* Outer ring fill */}
          <circle cx="550" cy="760" r="88" fill="url(#mandalaCenter)"/>
          {/* Ring dividers with fills */}
          <circle cx="550" cy="760" r="88" fill="none" stroke="rgba(201,164,76,.4)" strokeWidth="1.5"/>
          <circle cx="550" cy="760" r="68" fill="none" stroke="rgba(201,164,76,.35)" strokeWidth="1.2"/>
          <circle cx="550" cy="760" r="48" fill="none" stroke="rgba(201,164,76,.3)" strokeWidth="1"/>
          {/* 8 petal fills */}
          <g opacity=".5">
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(45,550,760)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(90,550,760)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(135,550,760)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(180,550,760)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(225,550,760)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(270,550,760)"/>
            <ellipse cx="550" cy="696" rx="10" ry="20" fill="url(#goldV)" transform="rotate(315,550,760)"/>
          </g>
          {/* Inner lotus */}
          <g opacity=".7">
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(45,550,760)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(90,550,760)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(135,550,760)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(180,550,760)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(225,550,760)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(270,550,760)"/>
            <ellipse cx="550" cy="722" rx="7" ry="14" fill="url(#goldV)" transform="rotate(315,550,760)"/>
          </g>
          <circle cx="550" cy="760" r="10" fill="url(#goldV)"/>
          <circle cx="550" cy="760" r="5" fill="rgba(255,248,200,.8)"/>
        </g>

        {/* ============ LAMP 1 (large, left) ============ */}
        <g id="lamp1" className="lampgrp" style={{opacity: "0"}} transform="translate(310,740)">
          {/* Glow halo behind */}
          <ellipse cx="0" cy="-30" rx="50" ry="60" fill="url(#glowAmber)" opacity=".7" filter="url(#lampGlow)"/>
          {/* Bowl body */}
          <path d="M-28 12 Q-26 30 0 36 Q26 30 28 12 L22 0 L-22 0 Z" fill="url(#lampBowl)"/>
          {/* Bowl rim highlight */}
          <ellipse cx="0" cy="0" rx="22" ry="6" fill="url(#goldH)" opacity=".9"/>
          {/* Oil surface */}
          <ellipse cx="0" cy="4" rx="16" ry="4" fill="#8a6010" opacity=".7"/>
          {/* Stem */}
          <rect x="-4" y="-16" width="8" height="18" fill="url(#goldV)" rx="2"/>
          {/* Wick */}
          <ellipse cx="0" cy="-16" rx="3" ry="5" fill="#c08020" opacity=".8"/>
          {/* Flame layers */}
          <ellipse cx="0" cy="-36" rx="14" ry="24" fill="url(#glowAmber)" opacity=".6"/>
          <path id="flame1" d="M0 -50 Q-8 -36 -6 -24 Q-2 -14 0 -16 Q2 -14 6 -24 Q8 -36 0 -50" fill="url(#flameOuter)"/>
          <path id="flame1i" d="M0 -46 Q-4 -36 -3 -26 Q0 -20 3 -26 Q4 -36 0 -46" fill="rgba(255,248,180,.9)"/>
        </g>

        {/* ============ LAMP 2 (large, right) ============ */}
        <g id="lamp2" className="lampgrp" style={{opacity: "0"}} transform="translate(790,740)">
          <ellipse cx="0" cy="-30" rx="50" ry="60" fill="url(#glowAmber)" opacity=".7" filter="url(#lampGlow)"/>
          <path d="M-28 12 Q-26 30 0 36 Q26 30 28 12 L22 0 L-22 0 Z" fill="url(#lampBowl)"/>
          <ellipse cx="0" cy="0" rx="22" ry="6" fill="url(#goldH)" opacity=".9"/>
          <ellipse cx="0" cy="4" rx="16" ry="4" fill="#8a6010" opacity=".7"/>
          <rect x="-4" y="-16" width="8" height="18" fill="url(#goldV)" rx="2"/>
          <ellipse cx="0" cy="-16" rx="3" ry="5" fill="#c08020" opacity=".8"/>
          <ellipse cx="0" cy="-36" rx="14" ry="24" fill="url(#glowAmber)" opacity=".6"/>
          <path id="flame2" d="M0 -50 Q-8 -36 -6 -24 Q-2 -14 0 -16 Q2 -14 6 -24 Q8 -36 0 -50" fill="url(#flameOuter)"/>
          <path d="M0 -46 Q-4 -36 -3 -26 Q0 -20 3 -26 Q4 -36 0 -46" fill="rgba(255,248,180,.9)"/>
        </g>

        {/* ============ LAMP 3 (small, left) ============ */}
        <g id="lamp3" className="lampgrp" style={{opacity: "0"}} transform="translate(425,836)">
          <ellipse cx="0" cy="-22" rx="34" ry="42" fill="url(#glowAmber)" opacity=".6"/>
          <path d="M-20 8 Q-18 22 0 26 Q18 22 20 8 L16 0 L-16 0 Z" fill="url(#lampBowl)"/>
          <ellipse cx="0" cy="0" rx="16" ry="5" fill="url(#goldH)" opacity=".9"/>
          <path id="flame3" d="M0 -36 Q-6 -26 -4 -16 Q0 -10 4 -16 Q6 -26 0 -36" fill="url(#flameOuter)"/>
          <path d="M0 -33 Q-3 -26 0 -18 Q3 -26 0 -33" fill="rgba(255,248,180,.9)"/>
        </g>

        {/* ============ LAMP 4 (small, right) ============ */}
        <g id="lamp4" className="lampgrp" style={{opacity: "0"}} transform="translate(675,836)">
          <ellipse cx="0" cy="-22" rx="34" ry="42" fill="url(#glowAmber)" opacity=".6"/>
          <path d="M-20 8 Q-18 22 0 26 Q18 22 20 8 L16 0 L-16 0 Z" fill="url(#lampBowl)"/>
          <ellipse cx="0" cy="0" rx="16" ry="5" fill="url(#goldH)" opacity=".9"/>
          <path id="flame4" d="M0 -36 Q-6 -26 -4 -16 Q0 -10 4 -16 Q6 -26 0 -36" fill="url(#flameOuter)"/>
          <path d="M0 -33 Q-3 -26 0 -18 Q3 -26 0 -33" fill="rgba(255,248,180,.9)"/>
        </g>

      </svg>
    </div>
  );
}