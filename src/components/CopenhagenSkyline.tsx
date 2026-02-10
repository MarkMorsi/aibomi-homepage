interface CopenhagenSkylineProps {
}
}

export function CopenhagenSkyline({ className = "" }: CopenhagenSkylineProps) {
  return (
    <svg
      viewBox="0 0 1200 300"
      <defs>
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="buildingGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.55 0.22 260)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="oklch(0.55 0.22 260)" stopOpacity="0.08" />
      <g>
        <rect x="90" y="120" width="70" height="180" fill="url(#buildingGradient2
        <rect x="240" y="100" width="90" height="200" fill="url(#buildingGradient1
        <rect x="420" y="110" width="80" height="190" fill="url(#buildingGradient3)"
        <rect x="580" y="
        <rect x="770" y="120" width="80" height="180" fill="url(#buildingGradient
        <rect x="930" y="100" width="90" height="200" fill="url(#buildingGradient
        <rect x="1110" y="160" width="90" height="140" fill="url(#buildingGradient2
        <path
             Q600 160 1000 220
             Q600 180 200 240
          fill="url(#bridgeGradient)"
      </g>
  );


      <g>
        <rect x="0" y="160" width="80" height="140" fill="url(#buildingGradient1)" />
        <rect x="90" y="120" width="70" height="180" fill="url(#buildingGradient2)" />
        <rect x="170" y="140" width="60" height="160" fill="url(#buildingGradient3)" />
        <rect x="240" y="100" width="90" height="200" fill="url(#buildingGradient1)" />
        <rect x="340" y="150" width="70" height="150" fill="url(#buildingGradient2)" />
        <rect x="420" y="110" width="80" height="190" fill="url(#buildingGradient3)" />
        <rect x="510" y="130" width="60" height="170" fill="url(#buildingGradient1)" />
        <rect x="580" y="90" width="100" height="210" fill="url(#buildingGradient2)" />
        <rect x="690" y="140" width="70" height="160" fill="url(#buildingGradient3)" />
        <rect x="770" y="120" width="80" height="180" fill="url(#buildingGradient1)" />
        <rect x="860" y="150" width="60" height="150" fill="url(#buildingGradient2)" />
        <rect x="930" y="100" width="90" height="200" fill="url(#buildingGradient3)" />
        <rect x="1030" y="130" width="70" height="170" fill="url(#buildingGradient1)" />
        <rect x="1110" y="160" width="90" height="140" fill="url(#buildingGradient2)" />

        <path
          d="M200 220
             Q600 160 1000 220
             L1000 240
             Q600 180 200 240
             Z"
          fill="url(#bridgeGradient)"
        />
      </g>
    </svg>
  );
}
