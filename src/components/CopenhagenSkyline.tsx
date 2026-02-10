interface CopenhagenSkylineProps {
  className?: string;
}

export function CopenhagenSkyline({ className = "" }: CopenhagenSkylineProps) {
  return (
    <svg
      viewBox="0 0 1000 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1000" height="200" fill="url(#skyGradient)" />

      <g fill="currentColor" opacity="0.12">
        <path d="M 50 120 L 50 90 L 55 85 L 60 90 L 60 120 Z" />
        
        <rect x="70" y="100" width="35" height="20" />
        <rect x="75" y="85" width="25" height="15" />
        <polygon points="87.5,70 75,85 100,85" />
        
        <rect x="110" y="90" width="25" height="30" />
        <circle cx="122.5" cy="85" r="8" />
        
        <rect x="140" y="95" width="20" height="25" />
        <rect x="145" y="80" width="10" height="15" />
        <path d="M 150 75 L 145 80 L 155 80 Z" />
        
        <rect x="165" y="70" width="40" height="50" />
        <rect x="175" y="55" width="20" height="15" />
        <path d="M 185 45 L 175 55 L 195 55 Z" />
        <path d="M 185 35 L 182 45 L 188 45 Z" />
        
        <rect x="210" y="85" width="30" height="35" />
        
        <rect x="245" y="60" width="50" height="60" />
        <rect x="260" y="45" width="20" height="15" />
        <circle cx="270" cy="35" r="10" />
        
        <rect x="300" y="75" width="35" height="45" />
        <rect x="310" y="60" width="15" height="15" />
        <path d="M 317.5 50 L 310 60 L 325 60 Z" />
        <path d="M 317.5 42 L 314 50 L 321 50 Z" />
        
        <rect x="340" y="90" width="30" height="30" />
        
        <rect x="375" y="65" width="45" height="55" />
        <polygon points="397.5,50 375,65 420,65" />
        
        <rect x="425" y="80" width="25" height="40" />
        
        <rect x="455" y="70" width="40" height="50" />
        <ellipse cx="475" cy="60" rx="22" ry="12" />
        
        <rect x="500" y="85" width="35" height="35" />
        <rect x="510" y="70" width="15" height="15" />
        <path d="M 517.5 62 L 510 70 L 525 70 Z" />
        
        <rect x="540" y="95" width="30" height="25" />
        
        <rect x="575" y="75" width="45" height="45" />
        <rect x="590" y="60" width="15" height="15" />
        <path d="M 597.5 52 L 590 60 L 605 60 Z" />
        <path d="M 597.5 45 L 594 52 L 601 52 Z" />
        
        <rect x="625" y="90" width="25" height="30" />
        
        <rect x="655" y="65" width="50" height="55" />
        <polygon points="680,45 655,65 705,65" />
        
        <path d="M 710 110 Q 720 105 730 110 Q 740 115 750 110 Q 760 105 770 110 L 770 120 L 710 120 Z" />
        
        <rect x="775" y="80" width="35" height="40" />
        <rect x="785" y="65" width="15" height="15" />
        <path d="M 792.5 57 L 785 65 L 800 65 Z" />
        
        <rect x="815" y="70" width="40" height="50" />
        <circle cx="835" cy="60" r="12" />
        
        <rect x="860" y="85" width="30" height="35" />
        
        <rect x="895" y="95" width="25" height="25" />
        <polygon points="907.5,85 895,95 920,95" />
        
        <path d="M 930 105 L 935 100 L 940 105 L 940 120 L 930 120 Z" />
        
        <ellipse cx="960" cy="90" rx="25" ry="35" opacity="0.08" />
        <rect x="950" y="95" width="20" height="25" opacity="0.1" />
      </g>

      <rect x="0" y="120" width="1000" height="2" fill="currentColor" opacity="0.2" />

      <g fill="currentColor" opacity="0.04">
        <path d="M 50 130 L 50 145 L 60 145 L 60 130 Z" />
        <rect x="70" y="130" width="35" height="15" />
        <rect x="110" y="130" width="25" height="15" />
        <rect x="140" y="130" width="20" height="15" />
        <rect x="165" y="130" width="40" height="15" />
        <rect x="210" y="130" width="30" height="15" />
        <rect x="245" y="130" width="50" height="15" />
        <rect x="300" y="130" width="35" height="15" />
        <rect x="340" y="130" width="30" height="15" />
        <rect x="375" y="130" width="45" height="15" />
        <rect x="425" y="130" width="25" height="15" />
        <rect x="455" y="130" width="40" height="15" />
        <rect x="500" y="130" width="35" height="15" />
        <rect x="540" y="130" width="30" height="15" />
        <rect x="575" y="130" width="45" height="15" />
        <rect x="625" y="130" width="25" height="15" />
        <rect x="655" y="130" width="50" height="15" />
        <rect x="710" y="130" width="60" height="15" />
        <rect x="775" y="130" width="35" height="15" />
        <rect x="815" y="130" width="40" height="15" />
        <rect x="860" y="130" width="30" height="15" />
        <rect x="895" y="130" width="25" height="15" />
        <rect x="930" y="130" width="10" height="15" />
        <rect x="950" y="130" width="20" height="15" />
      </g>
    </svg>
  );
}
