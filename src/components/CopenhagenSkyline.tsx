import { motion } from 'framer-motion'

export function CopenhagenSkyline() {
  return (
    <div className="w-full max-w-4xl mx-auto opacity-20">
      <svg
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.path
            d="M 0 180 L 100 180 L 100 140 L 120 140 L 120 160 L 140 160 L 140 120 L 160 120 L 160 180 L 200 180"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <motion.rect
            x="220"
            y="100"
            width="40"
            height="80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ transformOrigin: 'center bottom' }}
          />
          <motion.rect
            x="228"
            y="108"
            width="24"
            height="12"
            fill="currentColor"
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
          
          <motion.g
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{ transformOrigin: 'center bottom' }}
          >
            <rect x="280" y="90" width="50" height="90" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            <circle cx="305" cy="75" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            <line x1="305" y1="83" x2="305" y2="90" stroke="currentColor" strokeWidth="2" className="text-primary" />
          </motion.g>
          
          <motion.path
            d="M 350 180 L 350 110 L 370 95 L 390 110 L 390 180"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />
          
          <motion.g
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            style={{ transformOrigin: 'center bottom' }}
          >
            <rect x="410" y="130" width="35" height="50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            <rect x="417" y="137" width="7" height="7" fill="currentColor" className="text-primary" />
            <rect x="430" y="137" width="7" height="7" fill="currentColor" className="text-primary" />
            <rect x="417" y="150" width="7" height="7" fill="currentColor" className="text-primary" />
            <rect x="430" y="150" width="7" height="7" fill="currentColor" className="text-primary" />
          </motion.g>
          
          <motion.g
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            style={{ transformOrigin: 'center bottom' }}
          >
            <rect x="465" y="70" width="45" height="110" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            <rect x="472" y="80" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="485" y="80" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="498" y="80" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="472" y="95" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="485" y="95" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="498" y="95" width="8" height="8" fill="currentColor" className="text-primary" />
          </motion.g>
          
          <motion.path
            d="M 530 180 L 530 140 L 545 130 L 560 140 L 560 180"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          <motion.g
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ transformOrigin: 'center bottom' }}
          >
            <rect x="580" y="115" width="38" height="65" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
            <rect x="587" y="122" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="600" y="122" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="587" y="137" width="8" height="8" fill="currentColor" className="text-primary" />
            <rect x="600" y="137" width="8" height="8" fill="currentColor" className="text-primary" />
          </motion.g>
          
          <motion.path
            d="M 640 180 L 640 150 L 660 150 L 660 130 L 680 130 L 680 180"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 0.6 }}
          />
          
          <motion.path
            d="M 700 180 L 700 160 L 720 160 L 720 145 L 740 145 L 740 180 L 800 180"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.7 }}
          />
          
          <motion.line
            x1="0"
            y1="180"
            x2="800"
            y2="180"
            stroke="currentColor"
            strokeWidth="3"
            className="text-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{ transformOrigin: 'left center' }}
          />
        </motion.g>
      </svg>
    </div>
  )
}
