import { motion } from 'framer-motion'

export function CopenhagenSkyline() {
  return (
    <svg
      viewBox="0 0 1000 200"
      className="w-full max-w-4xl mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.05" />
          <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1000" height="200" fill="url(#skyGradient)" />

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
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
        transition={{ duration: 0.85, delay: 0.2 }}
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
        transition={{ duration: 0.9, delay: 0.3 }}
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
        transition={{ duration: 0.75, delay: 0.4 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="320" y="110" width="55" height="70" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="332" y="120" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="355" y="120" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="332" y="140" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="355" y="140" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="332" y="160" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="355" y="160" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="405" y="70" width="80" height="110" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="418" y="80" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="442" y="80" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="466" y="80" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="418" y="105" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="442" y="105" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="466" y="105" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="418" y="130" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="442" y="130" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="466" y="130" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="418" y="155" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="442" y="155" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="466" y="155" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.85, delay: 0.6 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="515" y="95" width="65" height="85" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="528" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="550" y="105" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="528" y="127" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="550" y="127" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="528" y="149" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="550" y="149" width="10" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.78, delay: 0.7 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="610" y="115" width="50" height="65" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="622" y="125" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="642" y="125" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="622" y="145" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="642" y="145" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="622" y="165" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="642" y="165" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.82, delay: 0.8 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="690" y="105" width="60" height="75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="702" y="115" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="725" y="115" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="702" y="137" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="725" y="137" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="702" y="159" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="725" y="159" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.77, delay: 0.9 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="780" y="125" width="45" height="55" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="792" y="135" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="808" y="135" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="792" y="153" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="808" y="153" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.81, delay: 1 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="855" y="130" width="40" height="50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="865" y="140" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="878" y="140" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="865" y="158" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="878" y="158" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.line
        x1="20"
        y1="180"
        x2="980"
        y2="180"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  )
}
