import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { tapes } from './content/siteData';
import { globalStyles } from './vhs/globalStyles';
import { StaticCanvas } from './vhs/StaticCanvas';
import { VHSTape } from './vhs/VHSTape';
import { Television } from './vhs/Television';
import { sectionContent } from './vhs/sections';

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [showStatic, setShowStatic] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [tvScale, setTvScale] = useState(1);

  const activeTape = tapes.find((t) => t.id === activeId) ?? null;

  useEffect(() => {
    const TV_NATURAL_WIDTH = 724;
    const update = () => {
      const available = window.innerWidth - 32;
      setTvScale(available < TV_NATURAL_WIDTH ? available / TV_NATURAL_WIDTH : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const switchTape = (id) => {
    setContentReady(false);
    setShowStatic(true);
    setTimeout(() => {
      setActiveId(id);
      setShowStatic(false);
      setTimeout(() => setContentReady(true), 300);
    }, 350);
  };

  const insertTape = (id) => {
    if (zoomed) return;
    if (activeId === id) {
      doZoom();
      return;
    }
    setShowStatic(true);
    setTimeout(() => {
      setActiveId(id);
      setShowStatic(false);
      setTimeout(() => doZoom(), 900);
    }, 400);
  };

  const doZoom = () => {
    setZoomed(true);
    setTimeout(() => setContentReady(true), 500);
  };

  const eject = () => {
    setContentReady(false);
    setTimeout(() => {
      setZoomed(false);
      setTimeout(() => setActiveId(null), 400);
    }, 300);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0a0808 0%,#120e0a 60%,#1a1208 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: 'clamp(60px,8vw,90px) 16px 40px', overflow: 'hidden', position: 'relative' }}>
      <style>{globalStyles}</style>
      <div style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, background: 'radial-gradient(ellipse,rgba(0,80,40,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <motion.div
        animate={zoomed ? { scale: 6, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: zoomed ? [0.4, 0, 1, 1] : [0, 0, 0.4, 1] }}
        style={{ transformOrigin: 'center 42%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: zoomed ? 'none' : 'auto' }}
      >
        <div style={{ zoom: tvScale, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ width: '100%', maxWidth: 700 }}>
            <Television activeTape={activeTape} showStatic={showStatic} />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.25 }} style={{ width: '100%', maxWidth: 740 }}>
            <div style={{ height: 13, background: 'linear-gradient(180deg,#3e3224,#2e2418)', borderRadius: '4px 4px 0 0', boxShadow: '0 -2px 8px rgba(0,0,0,0.4)' }} />
            <div style={{ background: 'linear-gradient(180deg,#1e1810,#161008)', border: '1px solid #2e2416', borderTop: 'none', padding: '14px 20px 16px', borderRadius: '0 0 8px 8px', boxShadow: '0 8px 24px rgba(0,0,0,0.65)' }}>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 11, color: '#302820', letterSpacing: '0.2em', marginBottom: 10, textAlign: 'center' }}>◈ SELECT A TAPE — CLICK TO INSERT ◈</div>
              <div className="tape-shelf" style={{ justifyContent: 'safe center' }}>
                {tapes.map((tape) => (
                  <VHSTape key={tape.id} tape={tape} isInserted={activeId === tape.id} onClick={() => insertTape(tape.id)} />
                ))}
              </div>
              <div style={{ height: 5, background: 'linear-gradient(180deg,#4a3a28,#3a2a18)', borderRadius: 2, marginTop: 12 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px' }}>
              {[0, 1].map((i) => (
                <div key={i} style={{ width: 14, height: 18, background: 'linear-gradient(180deg,#2e2416,#1e1810)', borderRadius: '0 0 3px 3px' }} />
              ))}
            </div>
          </motion.div>

          <div style={{ width: '80%', maxWidth: 560, height: 10, background: 'radial-gradient(ellipse,rgba(0,0,0,0.45) 0%,transparent 70%)', marginTop: 4, borderRadius: '50%' }} />
        </div>

        <div style={{ marginTop: 16, fontFamily: "'VT323', monospace", fontSize: 'clamp(11px,3vw,13px)', color: '#28201a', letterSpacing: '0.12em', textAlign: 'center', padding: '0 16px' }}>
          {activeId ? `▶ ${activeTape?.file} — TAP AGAIN TO WATCH` : '⏹ NO TAPE — TAP A TAPE TO INSERT'}
        </div>
      </motion.div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            style={{ position: 'fixed', inset: 0, zIndex: 50, background: '#060808', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'fixed', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.16) 3px,rgba(0,0,0,0.16) 4px)', pointerEvents: 'none', zIndex: 60 }} />
            <div style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,0.6) 100%)', pointerEvents: 'none', zIndex: 61 }} />
            <StaticCanvas active={false} style={{ zIndex: 62, opacity: 0.5 }} />

            <AnimatePresence>
              {showStatic && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }} style={{ position: 'fixed', inset: 0, zIndex: 200, pointerEvents: 'none', background: '#000' }}>
                  <StaticCanvas active />
                  <motion.div initial={{ opacity: 0.6 }} animate={{ opacity: 0 }} transition={{ duration: 0.15 }} style={{ position: 'absolute', inset: 0, background: '#fff' }} />
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ position: 'relative', zIndex: 65, background: 'rgba(0,0,0,0.85)', borderBottom: `1px solid ${activeTape?.spine ?? '#ff00ff'}40`, flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff3333', boxShadow: '0 0 6px #ff3333', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,3.5vw,18px)', color: activeTape?.spine ?? '#ff00ff', textShadow: `0 0 8px ${activeTape?.spine ?? '#ff00ff'}`, letterSpacing: '0.12em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    ▶ {activeTape?.file}
                  </span>
                </div>
                <button type="button" onClick={eject} style={{ background: 'transparent', border: '1px solid #ff00ff80', color: '#ff6cf6', fontFamily: "'VT323', monospace", fontSize: 'clamp(14px,3.5vw,17px)', padding: '6px 16px', minHeight: 40, cursor: 'pointer', letterSpacing: '0.1em', textShadow: '0 0 8px #ff6cf6', flexShrink: 0, whiteSpace: 'nowrap', touchAction: 'manipulation' }}>
                  ⏏ EJECT
                </button>
              </div>
              <div className="fullscreen-tape-row" style={{ padding: '0 16px 8px' }}>
                {tapes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => switchTape(t.id)}
                    style={{ background: activeId === t.id ? t.spine : 'rgba(255,255,255,0.05)', border: `1px solid ${activeId === t.id ? t.spine : '#2a2a2a'}`, color: activeId === t.id ? '#000' : '#666', fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,3vw,14px)', padding: '6px 12px', minHeight: 36, cursor: 'pointer', letterSpacing: '0.08em', whiteSpace: 'nowrap', flexShrink: 0, touchAction: 'manipulation' }}
                  >
                    {t.title}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {contentReady && activeId && (
                <motion.div key={activeId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: 'relative', zIndex: 63, flex: 1, overflowY: 'auto', overflowX: 'hidden', color: '#e8e8e0', WebkitOverflowScrolling: 'touch' }}>
                  {sectionContent[activeId]}
                </motion.div>
              )}
            </AnimatePresence>

            <div style={{ position: 'fixed', bottom: 12, right: 14, zIndex: 66, fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,3vw,18px)', color: 'rgba(255,150,255,0.65)', letterSpacing: '0.08em', pointerEvents: 'none' }}>
              SP ■ CH-01
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
