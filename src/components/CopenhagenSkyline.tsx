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
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="80" y="110" width="60" height="70" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="90" y="120" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="120" y="120" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="90" y="145" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="120" y="145" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="175" y="90" width="85" height="90" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <ellipse cx="217.5" cy="60" rx="45" ry="35" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <ellipse cx="217.5" cy="58" rx="38" ry="28" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" opacity="0.5" />
          <circle cx="217.5" cy="45" r="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <line x1="217.5" y1="37" x2="217.5" y2="25" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <rect x="190" y="105" width="15" height="20" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="235" y="105" width="15" height="20" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="190" y="140" width="15" height="20" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="235" y="140" width="15" height="20" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.95, delay: 0.5 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="295" y="100" width="55" height="80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="305" y="110" width="12" height="15" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="328" y="110" width="12" height="15" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="305" y="140" width="12" height="15" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="328" y="140" width="12" height="15" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.05, delay: 0.6 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="380" y="45" width="50" height="135" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <polygon points="405,20 395,45 415,45" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="398" y="25" width="14" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
          <line x1="405" y1="10" x2="405" y2="20" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <circle cx="405" cy="8" r="3" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="390" y="60" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="410" y="60" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="390" y="85" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="410" y="85" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="390" y="110" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="410" y="110" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="390" y="135" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="410" y="135" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="390" y="160" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="410" y="160" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.88, delay: 0.8 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <circle cx="485" cy="105" r="38" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <circle cx="485" cy="105" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" opacity="0.5" />
          <circle cx="485" cy="105" r="18" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" opacity="0.3" />
          <rect x="467" y="143" width="36" height="37" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="475" y="152" width="8" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="492" y="152" width="8" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="540" y="115" width="50" height="65" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="550" y="125" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="570" y="125" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="550" y="150" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="570" y="150" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.92, delay: 1.1 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <polygon points="655,95 625,125 685,125" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="635" y="125" width="40" height="55" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="643" y="135" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="657" y="135" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="643" y="155" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="657" y="155" width="10" height="12" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.87, delay: 1.25 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="720" y="125" width="45" height="55" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="730" y="135" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="749" y="135" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="730" y="156" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="749" y="156" width="9" height="11" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.85, delay: 1.35 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="800" y="105" width="60" height="75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="812" y="115" width="11" height="13" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="837" y="115" width="11" height="13" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="812" y="142" width="11" height="13" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="837" y="142" width="11" height="13" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="812" y="165" width="11" height="13" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="837" y="165" width="11" height="13" fill="currentColor" className="text-primary" opacity="0.4" />
        </motion.g>

        <motion.g
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.83, delay: 1.45 }}
          style={{ transformOrigin: 'center bottom' }}
        >
          <rect x="895" y="135" width="40" height="45" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" />
          <rect x="904" y="145" width="8" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="918" y="145" width="8" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="904" y="163" width="8" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
          <rect x="918" y="163" width="8" height="10" fill="currentColor" className="text-primary" opacity="0.4" />
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
