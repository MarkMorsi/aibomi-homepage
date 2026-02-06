import { motion } from 'framer-motion'

export function CopenhagenSkyline() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <svg
        viewBox="0 0 1000 200"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0.05" />
          </linearGradient>
        </defs>

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
          <rect x="150" y="160" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="172" y="160" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="220" y="100" width="70" height="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="232" y="110" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="252" y="110" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="272" y="110" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="232" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="252" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="272" y="130" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="232" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="252" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="272" y="150" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="320" y="70" width="55" height="110" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="330" y="80" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="80" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="330" y="102" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="102" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="330" y="124" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="124" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="330" y="146" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="355" y="146" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.78, delay: 0.6 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="405" y="110" width="48" height="70" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="414" y="118" width="7" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="437" y="118" width="7" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="414" y="140" width="7" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="437" y="140" width="7" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="414" y="162" width="7" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="437" y="162" width="7" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.88, delay: 0.7 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="483" y="85" width="52" height="95" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="493" y="95" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="516" y="95" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="493" y="118" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="516" y="118" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="493" y="141" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="516" y="141" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="493" y="164" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="516" y="164" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.82, delay: 0.8 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="565" y="95" width="60" height="85" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="575" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="595" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="605" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="575" y="125" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="595" y="125" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="605" y="125" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="575" y="145" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="595" y="145" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="605" y="145" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="575" y="165" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="595" y="165" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="605" y="165" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.76, delay: 0.9 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="655" y="120" width="50" height="60" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="665" y="130" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="687" y="130" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="665" y="150" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="687" y="150" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="665" y="165" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="687" y="165" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.84, delay: 1.0 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="735" y="105" width="55" height="75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="745" y="115" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="770" y="115" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="745" y="135" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="770" y="135" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="745" y="155" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="770" y="155" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="820" y="115" width="48" height="65" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="830" y="125" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="851" y="125" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="830" y="142" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="851" y="142" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="830" y="159" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="851" y="159" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.82, delay: 1.2 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="900" y="125" width="45" height="55" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="910" y="135" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="928" y="135" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="910" y="152" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="928" y="152" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="910" y="167" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="928" y="167" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.line
          x1="20"
          y1="180"
          x2="980"
          y2="180"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          style={{ transformOrigin: 'center' }}
        />
      </svg>
    </div>
  )
}
