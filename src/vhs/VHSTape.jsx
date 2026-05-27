import { motion } from 'motion/react';

export function VHSTape({ tape, isInserted, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      animate={isInserted ? { y: -140, opacity: 0.25, scale: 0.9 } : { y: 0, opacity: 1, scale: 1 }}
      whileHover={isInserted ? {} : { y: -12, scale: 1.07 }}
      whileTap={isInserted ? {} : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ cursor: isInserted ? 'default' : 'pointer', userSelect: 'none', flexShrink: 0, padding: '4px 6px', touchAction: 'manipulation' }}
    >
      <div style={{ width: 78, background: '#181818', borderRadius: '3px 3px 5px 5px', border: `1.5px solid ${isInserted ? tape.spine : '#2e2e2e'}`, boxShadow: isInserted ? `0 0 16px ${tape.spine}60` : '0 4px 12px rgba(0,0,0,0.6)', overflow: 'hidden', transition: 'all 0.2s' }}>
        <div style={{ margin: '6px 7px 5px', background: '#080808', borderRadius: 2, height: 20, position: 'relative', border: '1px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 7px' }}>
          {[0, 1].map((i) => (
            <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', border: `1.5px solid ${isInserted ? tape.spine : '#2e2e2e'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}>
              <div style={{ width: 3.5, height: 3.5, borderRadius: '50%', background: isInserted ? tape.spine : '#2e2e2e' }} />
            </div>
          ))}
          <div style={{ position: 'absolute', left: 22, right: 22, height: 1, background: isInserted ? `${tape.spine}80` : '#222' }} />
        </div>
        <div style={{ background: tape.label, margin: '0 4px 0', borderRadius: '1px 1px 0 0', padding: '5px 5px 4px' }}>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 8, fontWeight: 700, color: tape.labelText, letterSpacing: '0.06em', lineHeight: 1.35, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{tape.title}</div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 6.5, color: `${tape.labelText}aa`, marginTop: 1, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{tape.file}</div>
        </div>
        <div style={{ height: 5, background: tape.spine }} />
      </div>
    </motion.div>
  );
}
