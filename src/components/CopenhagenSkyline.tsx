import { motion } from 'framer-motion'

export function CopenhagenSkyline() {
  return (
    <div className="w-full max-w-5xl mx-auto opacity-30">
      <svg
        viewBox="0 0 1000 250"
        fill="none"
        className="w-full h-auto"
      >
        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="50" y="120" width="60" height="60" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="60" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="80" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="60" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="80" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="140" y="90" width="50" height="90" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="150" y="100" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="172" y="100" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="150" y="120" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="172" y="120" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="150" y="140" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="172" y="140" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="220" y="100" width="70" height="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="230" y="110" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="250" y="110" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="270" y="110" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="230" y="135" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="250" y="135" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="270" y="135" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="230" y="160" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="250" y="160" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="270" y="160" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.87, delay: 0.5 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="320" y="60" width="55" height="120" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <circle cx="347.5" cy="45" r="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <line x1="347.5" y1="33" x2="347.5" y2="60" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <rect x="330" y="75" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="75" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="330" y="100" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="100" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="330" y="125" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="125" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="330" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.88, delay: 0.6 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="405" y="110" width="45" height="70" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="415" y="120" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="432" y="120" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="415" y="140" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="432" y="140" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="415" y="160" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="432" y="160" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.92, delay: 0.7 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="480" y="80" width="60" height="100" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="490" y="90" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="518" y="90" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="490" y="115" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="518" y="115" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="490" y="140" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="518" y="140" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="490" y="165" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="518" y="165" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.87, delay: 0.8 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="570" y="125" width="50" height="55" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="580" y="135" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="602" y="135" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="580" y="155" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="602" y="155" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="650" y="95" width="65" height="85" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="662" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="690" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="662" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="690" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="662" y="155" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="690" y="155" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.84, delay: 1.0 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="745" y="130" width="45" height="50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="755" y="140" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="772" y="140" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="755" y="160" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="772" y="160" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.88, delay: 1.1 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="820" y="105" width="55" height="75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="830" y="115" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="856" y="115" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="830" y="140" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="856" y="140" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="830" y="165" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="856" y="165" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.82, delay: 1.2 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="905" y="140" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="915" y="150" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="930" y="150" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="915" y="165" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="930" y="165" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.line
          x1="0"
          y1="180"
          x2="1000"
          y2="180"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          style={{ transformOrigin: 'left center' }}
        />
      </svg>
    </div>
  )
}
