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
          <stop offset="0%" stopColor="oklch(0.95 0.01 240)" />
          <stop offset="100%" stopColor="oklch(0.98 0.005 240)" />
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
        transition={{ duration: 0.9, delay: 0.2 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="150" y="100" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="165" y="115" width="12" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="195" y="115" width="12" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="165" y="140" width="12" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="195" y="140" width="12" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="165" y="165" width="12" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="195" y="165" width="12" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.85, delay: 0.3 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="270" y="110" width="70" height="70" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="285" y="125" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="310" y="125" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="285" y="148" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="310" y="148" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.95, delay: 0.4 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="380" y="105" width="50" height="75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="395" y="120" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="410" y="120" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="395" y="140" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="410" y="140" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="395" y="160" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="410" y="160" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="470" y="75" width="90" height="105" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="488" y="90" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="518" y="90" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="488" y="115" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="518" y="115" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="488" y="140" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="518" y="140" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="488" y="165" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="518" y="165" width="11" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.78, delay: 0.7 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="600" y="115" width="55" height="65" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="615" y="130" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="635" y="130" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="615" y="150" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="635" y="150" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="615" y="170" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="635" y="170" width="8" height="8" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.77, delay: 0.9 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="695" y="105" width="60" height="75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="710" y="120" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="732" y="120" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="710" y="142" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="732" y="142" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="710" y="164" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="732" y="164" width="9" height="9" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.82, delay: 1.1 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="795" y="125" width="45" height="55" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="808" y="140" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="823" y="140" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="808" y="158" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="823" y="158" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
      </motion.g>

      <motion.g
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.75, delay: 1.3 }}
        style={{ transformOrigin: 'center bottom' }}
      >
        <rect x="880" y="130" width="50" height="50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
        <rect x="893" y="145" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="910" y="145" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="893" y="163" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
        <rect x="910" y="163" width="7" height="7" fill="currentColor" className="text-primary" opacity="0.4" />
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
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ transformOrigin: 'center' }}
      />
    </svg>
  )
}
