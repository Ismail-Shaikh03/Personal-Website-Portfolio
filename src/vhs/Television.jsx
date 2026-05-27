import { StaticCanvas } from './StaticCanvas';
import { useClock } from './useClock';

export function Television({ activeTape, showStatic }) {
  const clock = useClock();
  const pad = (n) => String(n).padStart(2, '0');
  const timeStr = `${pad(clock.getHours())}:${pad(clock.getMinutes())}:${pad(clock.getSeconds())}`;

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 680 }}>
      <div style={{ background: 'linear-gradient(160deg,#2a2a2a 0%,#1a1a1a 45%,#111 100%)', borderRadius: '8px 8px 6px 6px', border: '1.5px solid #333', boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.5)', padding: '16px 16px 0', display: 'grid', gridTemplateColumns: '1fr 64px', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ background: 'linear-gradient(180deg,#0d0d0d 0%,#080808 100%)', borderRadius: '4px 4px 2px 2px', padding: '8px 8px 6px', boxShadow: 'inset 0 2px 8px rgba(0,0,0,1), inset 0 0 0 1px #000' }}>
            <div style={{ position: 'relative', borderRadius: '3px', overflow: 'hidden', aspectRatio: '4/3', background: '#010402', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.95), inset 0 0 0 1px #000' }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 9, pointerEvents: 'none', backgroundImage: 'linear-gradient(transparent calc(33% - 0.5px), rgba(0,0,0,0.45) calc(33% - 0.5px), rgba(0,0,0,0.45) calc(33% + 0.5px), transparent calc(33% + 0.5px), transparent calc(66% - 0.5px), rgba(0,0,0,0.45) calc(66% - 0.5px), rgba(0,0,0,0.45) calc(66% + 0.5px), transparent calc(66% + 0.5px))' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 45% 38%,rgba(0,35,14,0.5) 0%,transparent 68%)', zIndex: 1, pointerEvents: 'none' }} />
              <StaticCanvas active={showStatic} style={{ zIndex: 5 }} />
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.14) 2px,rgba(0,0,0,0.14) 3px)', pointerEvents: 'none', zIndex: 6 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,transparent 45%,rgba(0,0,0,0.7) 100%)', pointerEvents: 'none', zIndex: 7 }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(180deg,rgba(255,255,255,0.03) 0%,transparent 100%)', pointerEvents: 'none', zIndex: 8 }} />
              {!activeTape && !showStatic && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <div style={{ fontFamily: "'VT323', monospace", fontSize: 26, color: '#1f2e1f', letterSpacing: '0.18em' }}>NO SIGNAL</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#141c14', letterSpacing: '0.15em' }}>INSERT TAPE BELOW</div>
                </div>
              )}
              {activeTape && !showStatic && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: activeTape.spine, textShadow: `0 0 10px ${activeTape.spine}`, letterSpacing: '0.22em', marginBottom: 6 }}>{activeTape.file}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, color: '#eeeee8', letterSpacing: '0.05em', textShadow: '0 0 24px rgba(255,255,255,0.12)' }}>{activeTape.title}</div>
                  <div style={{ marginTop: 18, fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#3a3a3a', letterSpacing: '0.14em' }}>LOADING...</div>
                </div>
              )}
              {activeTape && !showStatic && (
                <div style={{ position: 'absolute', bottom: 6, right: 8, zIndex: 8, fontFamily: "'VT323', monospace", fontSize: 15, color: 'rgba(255,140,255,0.7)', textShadow: '0 0 7px rgba(255,0,255,0.35)', letterSpacing: '0.07em', pointerEvents: 'none' }}>
                  SP ■ {timeStr}
                </div>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 4px 14px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 15, color: '#3a3a3a', letterSpacing: '0.18em' }}>ISHITACHI</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 8, color: '#252525', letterSpacing: '0.12em' }}>TRINITRON · KV-2026</span>
            </div>
            <div style={{ flex: 1, position: 'relative', height: 10, background: '#0a0a0a', borderRadius: 2, border: '1px solid #1a1a1a', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.9)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '2px 10%', display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '100%', height: 2, background: '#111', borderRadius: 2 }} />
              </div>
              {activeTape && <div style={{ position: 'absolute', inset: '2px 10%', background: activeTape.spine, borderRadius: 1, opacity: 0.8, transformOrigin: 'left', transform: 'scaleX(1)' }} />}
            </div>
            <div style={{ fontFamily: "'VT323', monospace", fontSize: 10, color: '#2a2a2a', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
              {activeTape ? `▶ ${activeTape.file}` : '⏹'}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, paddingTop: 10, paddingBottom: 14 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: activeTape ? '#ff2200' : '#1f0800', boxShadow: activeTape ? '0 0 8px #ff2200, 0 0 16px #ff220060' : 'none', border: '1px solid #333', transition: 'all 0.4s' }} />
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 7, color: '#2a2a2a', letterSpacing: '0.05em', writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>STBY</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {['▲', '▼'].map((arrow) => (
              <div key={arrow} style={{ width: 32, height: 14, background: 'linear-gradient(180deg,#252525,#1a1a1a)', border: '1px solid #333', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)', cursor: 'default' }}>
                <span style={{ fontSize: 7, color: '#444', lineHeight: 1 }}>{arrow}</span>
              </div>
            ))}
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 7, color: '#252525', textAlign: 'center', letterSpacing: '0.04em' }}>CH</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1 }}>
            <div style={{ width: 6, flex: 1, maxHeight: 60, background: 'linear-gradient(180deg,#333 0%,#111 100%)', borderRadius: 3, border: '1px solid #2a2a2a', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)', position: 'relative', minHeight: 40 }}>
              <div style={{ position: 'absolute', bottom: '35%', left: -3, width: 12, height: 5, background: 'linear-gradient(90deg,#3a3a3a,#282828)', border: '1px solid #444', borderRadius: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.6)' }} />
            </div>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 7, color: '#252525', letterSpacing: '0.04em' }}>VOL</span>
          </div>
          <div style={{ width: 32, height: 10, background: 'linear-gradient(180deg,#252525,#1a1a1a)', border: '1px solid #333', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', cursor: 'default' }}>
            <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 6, color: '#333', letterSpacing: '0.03em' }}>INPUT</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '42%', height: 6, background: 'linear-gradient(180deg,#1e1e1e,#141414)', borderRadius: '0 0 3px 3px', boxShadow: '0 4px 10px rgba(0,0,0,0.7)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '28%', height: 10, background: 'linear-gradient(180deg,#161616,#0e0e0e)', borderRadius: '0 0 4px 4px', boxShadow: '0 6px 14px rgba(0,0,0,0.8)' }} />
      </div>
    </div>
  );
}
