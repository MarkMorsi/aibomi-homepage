import { motion } from 'framer-motion'

export function CopenhagenSkyline() {
  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <svg
        viewBox="0 0 1000 300"
        fill="none"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <path
            d="M 0,200 L 40,200 L 40,150 L 50,140 L 60,150 L 70,145 L 80,155 L 100,155 L 110,165 L 130,165 L 130,180 L 150,180 L 160,100 Q 160,85 175,85 Q 190,85 190,100 L 190,180 L 210,180 L 220,120 L 240,120 L 240,175 L 265,175 L 270,95 L 285,75 L 300,95 L 305,175 L 330,175 L 335,130 Q 335,115 350,115 Q 365,115 365,130 L 365,185 L 385,185 L 390,60 L 395,50 L 400,60 L 400,185 L 420,185 L 425,140 L 445,140 L 450,185 L 480,185 L 485,100 L 505,100 L 510,185 L 545,185 L 555,160 L 565,160 L 565,185 L 590,185 L 595,125 L 610,110 L 625,125 L 630,185 L 655,185 L 660,145 L 680,145 L 685,185 L 715,185 L 720,155 L 735,155 L 735,185 L 765,185 L 770,130 L 785,130 L 785,185 L 810,185 L 815,110 L 835,110 L 840,185 L 870,185 L 875,160 L 890,160 L 895,185 L 920,185 L 925,170 L 935,170 L 940,185 L 1000,185 L 1000,200 Z"
            fill="url(#skyGradient)"
            className="text-primary"
            opacity="0.2"
          />

          <path
            d="M 0,200 L 50,200 L 55,175 L 75,175 L 80,200 L 115,200 L 120,160 L 140,160 L 145,200 L 175,200 L 180,140 L 200,140 L 205,200 L 245,200 L 250,165 Q 250,145 270,145 Q 290,145 290,165 L 295,200 L 330,200 L 335,155 L 355,155 L 360,200 L 395,200 L 405,90 L 415,75 L 415,55 L 420,50 L 425,55 L 425,75 L 435,90 L 445,200 L 480,200 L 485,170 L 505,170 L 510,200 L 550,200 L 555,180 L 570,180 L 575,200 L 610,200 L 615,185 L 630,185 L 635,200 L 675,200 L 680,165 L 700,165 L 705,200 L 745,200 L 750,175 L 770,175 L 775,200 L 810,200 L 815,150 L 835,150 L 840,200 L 880,200 L 885,180 L 900,180 L 905,200 L 945,200 L 950,190 L 965,190 L 970,200 L 1000,200 Z"
            fill="currentColor"
            className="text-primary"
            opacity="0.25"
          />

          <path
            d="M 0,200 L 30,200 L 35,185 L 45,185 L 50,165 L 60,155 L 70,165 L 80,185 L 95,185 L 100,200 L 125,200 L 135,175 L 150,175 L 155,200 L 180,200 L 190,125 Q 190,100 215,100 Q 240,100 240,125 L 250,200 L 285,200 L 290,160 L 300,145 L 310,160 L 315,180 L 325,180 L 330,155 L 345,155 L 350,180 L 360,180 L 365,160 L 375,145 L 385,160 L 390,200 L 425,200 L 430,85 L 435,75 L 440,60 L 445,40 L 450,60 L 455,75 L 460,85 L 465,200 L 495,200 L 510,150 Q 510,130 530,130 Q 550,130 550,150 L 565,200 L 595,200 L 600,170 L 615,170 L 620,200 L 650,200 L 655,175 L 670,165 L 685,175 L 690,200 L 720,200 L 725,185 L 740,185 L 745,200 L 780,200 L 785,165 L 805,165 L 810,200 L 845,200 L 850,180 L 865,180 L 870,200 L 905,200 L 910,190 L 925,190 L 930,200 L 1000,200 Z"
            fill="currentColor"
            className="text-primary"
            opacity="0.4"
          />

          <motion.path
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: 'bottom' }}
            d="M 20,200 L 30,200 L 35,180 L 50,180 L 55,200 L 85,200 L 90,170 L 105,170 L 110,200 L 145,200 L 155,135 L 175,135 L 185,200 L 220,200 L 230,155 Q 230,125 260,125 Q 290,125 290,155 L 295,175 L 310,175 L 315,155 Q 315,125 345,125 Q 375,125 375,155 L 380,200 L 415,200 L 425,105 L 435,90 L 440,75 L 445,60 L 447,45 L 450,30 L 453,45 L 455,60 L 460,75 L 470,90 L 480,105 L 490,200 L 525,200 L 540,165 Q 540,145 565,145 Q 590,145 590,165 L 605,200 L 640,200 L 645,180 L 655,170 L 665,165 L 675,170 L 685,180 L 695,200 L 725,200 L 730,190 L 745,190 L 750,200 L 785,200 L 790,175 L 810,175 L 815,200 L 850,200 L 855,185 L 870,185 L 875,200 L 910,200 L 915,195 L 930,195 L 935,200 L 1000,200 Z"
            fill="currentColor"
            className="text-primary"
            opacity="0.65"
          />
        </motion.g>

        <motion.line
          x1="0"
          y1="200"
          x2="1000"
          y2="200"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.1, ease: "easeInOut" }}
          style={{ transformOrigin: 'left center' }}
          opacity="0.8"
        />

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <path
            d="M 0,200 Q 100,210 200,205 Q 300,200 400,208 Q 500,216 600,206 Q 700,196 800,204 Q 900,212 1000,206 L 1000,300 L 0,300 Z"
            fill="currentColor"
            className="text-primary"
          />
        </motion.g>
      </svg>
    </div>
  )
}
