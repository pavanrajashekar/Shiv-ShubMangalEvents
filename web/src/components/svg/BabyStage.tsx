export default function BabyStageSVG({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 720 580" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moonFill" cx=".4" cy=".35" r=".65">
          <stop offset="0%" stopColor="#fffbe8"/>
          <stop offset="50%" stopColor="#fff3c0"/>
          <stop offset="100%" stopColor="#f0e090"/>
        </radialGradient>
        <linearGradient id="cradleWood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8a878"/>
          <stop offset="40%" stopColor="#a88050"/>
          <stop offset="100%" stopColor="#7a5828"/>
        </linearGradient>
        <linearGradient id="cradleWoodH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7a5828"/>
          <stop offset="30%" stopColor="#c8a878"/>
          <stop offset="60%" stopColor="#e8c890"/>
          <stop offset="100%" stopColor="#a88050"/>
        </linearGradient>
        <linearGradient id="quilt1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c8f0"/>
          <stop offset="100%" stopColor="#d0a8e0"/>
        </linearGradient>
        <linearGradient id="quilt2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8e8ff"/>
          <stop offset="100%" stopColor="#a8c8f0"/>
        </linearGradient>
        <linearGradient id="ribbonG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0b0c8"/>
          <stop offset="50%" stopColor="#f8d0e0"/>
          <stop offset="100%" stopColor="#f0b0c8"/>
        </linearGradient>
        <radialGradient id="starGlow" cx=".5" cy=".5">
          <stop offset="0%" stopColor="rgba(255,240,160,.8)"/>
          <stop offset="100%" stopColor="rgba(255,240,160,0)"/>
        </radialGradient>
        <filter id="moonShadow"><feDropShadow dx="4" dy="6" stdDeviation="8" floodColor="rgba(180,150,60,.3)"/></filter>
      </defs>

      {/* Moon with texture and glow */}
      <g filter="url(#moonShadow)">
        <circle cx="560" cy="128" r="86" fill="url(#moonFill)"/>
        {/* Moon shadow crescent */}
        <path d="M540 58 Q612 70 620 128 Q612 186 540 198 Q596 190 610 128 Q596 66 540 58" fill="rgba(200,170,80,.18)"/>
        {/* Moon craters */}
        <circle cx="578" cy="98" r="8" fill="rgba(200,170,60,.3)"/>
        <circle cx="540" cy="118" r="5" fill="rgba(200,170,60,.25)"/>
        <circle cx="590" cy="148" r="6" fill="rgba(200,170,60,.2)"/>
        <circle cx="552" cy="158" r="4" fill="rgba(200,170,60,.2)"/>
        {/* Moon glow ring */}
        <circle cx="560" cy="128" r="96" fill="none" stroke="rgba(255,240,160,.2)" strokeWidth="8"/>
        <circle cx="560" cy="128" r="108" fill="none" stroke="rgba(255,240,160,.1)" strokeWidth="6"/>
      </g>

      {/* Stars */}
      <g fill="url(#starGlow)">
        <polygon cx="80" cy="80" points="80,60 84,74 98,74 88,82 92,96 80,88 68,96 72,82 62,74 76,74" transform="scale(.55) translate(72,54)"/>
        <polygon points="140,40 143,50 153,50 146,56 149,66 140,60 131,66 134,56 127,50 137,50"/>
        <polygon points="80,170 83,180 93,180 86,186 89,196 80,190 71,196 74,186 67,180 77,180" transform="scale(.7)"/>
        <polygon points="620,70 623,79 633,79 626,85 629,94 620,89 611,94 614,85 607,79 617,79" transform="scale(.8)"/>
      </g>

      {/* Cradle ropes */}
      <line x1="310" y1="210" x2="270" y2="420" stroke="url(#cradleWood)" strokeWidth="3" strokeLinecap="round"/>
      <line x1="410" y1="210" x2="450" y2="420" stroke="url(#cradleWood)" strokeWidth="3" strokeLinecap="round"/>

      {/* Cradle group */}
      <g id="cradleGrp" style={{transformOrigin: "360px 200px"}}>
        {/* Cradle bowl - rich wooden form */}
        <path d="M240 420 Q260 440 360 450 Q460 440 480 420 L470 440 Q450 478 360 484 Q270 478 250 440 Z" fill="url(#cradleWoodH)"/>
        {/* Cradle interior shadow */}
        <path d="M252 430 Q290 448 360 452 Q430 448 468 430 Q450 465 360 470 Q270 465 252 430 Z" fill="rgba(0,0,0,.25)"/>
        {/* Top rim highlight */}
        <path d="M240 420 Q360 410 480 420" fill="none" stroke="rgba(220,180,110,.7)" strokeWidth="3"/>
        {/* Cradle hood supports */}
        <path d="M258 424 Q280 360 310 330 Q340 310 360 310 Q380 310 410 330 Q440 360 462 424" fill="none" stroke="url(#cradleWood)" strokeWidth="4" strokeLinecap="round"/>
        {/* Hood fabric */}
        <path d="M290 368 Q360 340 430 368 Q410 320 360 312 Q310 320 290 368" fill="rgba(232,200,240,.5)"/>

        {/* Quilt/blanket inside cradle */}
        <path d="M268 430 Q310 448 360 452 Q410 448 452 430 L448 444 Q420 460 360 462 Q300 460 272 444 Z" fill="url(#quilt1)"/>
        {/* Quilt pattern */}
        <path d="M300 442 L300 456 M330 440 L330 456 M360 440 L360 458 M390 440 L390 456 M420 442 L420 456" stroke="rgba(180,140,200,.4)" strokeWidth="1"/>
        <path d="M280 448 L440 448" stroke="rgba(180,140,200,.3)" strokeWidth="1"/>

        {/* Baby head peek (pillow area) */}
        <ellipse cx="360" cy="432" rx="28" ry="18" fill="rgba(255,240,220,.8)"/>
        {/* Face features (very subtle) */}
        <ellipse cx="354" cy="430" rx="3" ry="2.5" fill="rgba(180,100,60,.25)"/>
        <ellipse cx="366" cy="430" rx="3" ry="2.5" fill="rgba(180,100,60,.25)"/>
        <path d="M356 436 Q360 438 364 436" fill="none" stroke="rgba(180,100,60,.3)" strokeWidth="1"/>

        {/* Bow at top of cradle */}
        <path d="M346 208 Q336 198 346 190 Q356 182 360 192 Q364 182 374 190 Q384 198 374 208 Q364 218 360 210 Q356 218 346 208 Z" fill="url(#ribbonG)"/>
        <circle cx="360" cy="208" r="5" fill="#f0b0c8"/>
      </g>

      {/* Hanging mobile elements */}
      <g id="mobileHang" style={{transformOrigin: "360px 180px", opacity: ".7"}}>
        <line x1="360" y1="170" x2="310" y2="220" stroke="rgba(180,140,200,.5)" strokeWidth="1"/>
        <line x1="360" y1="170" x2="410" y2="220" stroke="rgba(180,140,200,.5)" strokeWidth="1"/>
        {/* Star pendant */}
        <polygon points="310,220 313,229 322,229 315,234 318,244 310,238 302,244 305,234 298,229 307,229" fill="rgba(255,240,160,.8)" transform="scale(.7) translate(130,120)"/>
        <circle cx="410" cy="225" r="8" fill="rgba(210,180,255,.7)"/>
        <circle cx="410" cy="225" r="4" fill="rgba(230,210,255,.9)"/>
      </g>
    </svg>
    </div>
  );
}