import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StaticCanvas } from './StaticCanvas';
import {
  profile,
  about,
  skillCategories,
  projects,
  resume,
  resumePdfUrl,
  achievements,
  contact,
} from '../content/siteData';

const linkBtnStyle = (color) => ({
  fontFamily: "'VT323', monospace",
  fontSize: 'clamp(12px,1.2vw,14px)',
  color,
  border: `1px solid ${color}60`,
  padding: '8px 16px',
  minHeight: 40,
  textDecoration: 'none',
  letterSpacing: '0.12em',
  transition: 'all 0.2s',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  background: 'rgba(0,0,0,0.3)',
  touchAction: 'manipulation',
});

function ProjectLinks({ p }) {
  const links = [];
  if (p.demoLink) {
    links.push({ label: '● LIVE DEMO', href: p.demoLink, key: 'demo' });
  }
  if (p.frontendLink && p.backendLink) {
    links.push({ label: '▶ FRONTEND', href: p.frontendLink, key: 'fe' });
    links.push({ label: '▶ BACKEND', href: p.backendLink, key: 'be' });
  } else if (p.codeLink) {
    links.push({ label: '▶ GITHUB REPO', href: p.codeLink, key: 'gh' });
  }
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {links.map(({ label, href, key }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={linkBtnStyle(p.color)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${p.color}25`;
            e.currentTarget.style.borderColor = p.color;
            e.currentTarget.style.boxShadow = `0 0 12px ${p.color}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
            e.currentTarget.style.borderColor = `${p.color}60`;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

export function SectionIntro() {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ minHeight: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 8vw' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: '#ff6cf6', letterSpacing: '0.2em', marginBottom: 20, textShadow: '0 0 10px #ff6cf6', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        ▶ NOW PLAYING — WELCOME.VHS · SP MODE · HI-FI STEREO
      </div>
      <div style={{ position: 'relative', marginBottom: 20, overflow: 'hidden' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.6rem,10vw,9rem)', lineHeight: 0.95, letterSpacing: '0.03em', color: '#00ffff', position: 'absolute', top: 0, left: '-3px', opacity: 0.65, userSelect: 'none', whiteSpace: 'nowrap' }}>{profile.name.toUpperCase()}</div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.6rem,10vw,9rem)', lineHeight: 0.95, letterSpacing: '0.03em', color: '#ff00ff', position: 'absolute', top: 0, left: '3px', opacity: 0.65, userSelect: 'none', whiteSpace: 'nowrap' }}>{profile.name.toUpperCase()}</div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.6rem,10vw,9rem)', lineHeight: 0.95, letterSpacing: '0.03em', color: '#f0f0e8', position: 'relative', whiteSpace: 'nowrap' }}>{profile.name.toUpperCase()}</div>
      </div>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(1.4rem,3vw,2.2rem)', color: '#ff00ff', textShadow: '0 0 12px #ff00ff', marginBottom: 16 }}>
        {profile.title.toUpperCase()}
        <span style={{ opacity: blink ? 1 : 0 }}>_</span>
      </div>
      <div style={{ height: 1, background: 'linear-gradient(90deg,#ff00ff,#00ffff,transparent)', maxWidth: 500, marginBottom: 24 }} />
      <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(12px,1.4vw,15px)', color: '#aaa', lineHeight: 1.9, maxWidth: 540, letterSpacing: '0.04em' }}>
        {profile.tagline[0]}
        <br />
        {profile.tagline[1]}
        <br />
        <span style={{ color: '#00ffff' }}>{profile.school}</span>
      </p>
      <div style={{ marginTop: 28, fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.4vw,16px)', color: '#444', letterSpacing: '0.15em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        ◈ SELECT ANOTHER TAPE · PRESS ⏏ TO EJECT
      </div>
    </div>
  );
}

export function SectionAbout() {
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '60px 8vw' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: '#06d6a0', letterSpacing: '0.2em', marginBottom: 16, textShadow: '0 0 8px #06d6a0' }}>◈ ABOUT_ME.VHS — SIDE A</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, letterSpacing: '0.04em', marginBottom: 28, color: '#f0f0e8' }}>
        ABOUT THE <span style={{ color: '#06d6a0', textShadow: '0 0 14px #06d6a0' }}>TAPE</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: 32, alignItems: 'start' }}>
        <div>
          <div style={{ position: 'relative', marginBottom: 22 }}>
            <img src={about.photo} alt={profile.name} style={{ width: '100%', maxWidth: 320, height: 200, objectFit: 'cover', objectPosition: 'top center', display: 'block', border: '1px solid #06d6a040', filter: 'grayscale(20%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }} />
          </div>
          {about.paragraphs.map((text, i) => (
            <p key={i} style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(12px,1.3vw,14px)', color: i === 0 ? '#ccc' : '#999', lineHeight: 1.9, marginBottom: 16 }}>
              {text}
            </p>
          ))}
        </div>
        <div style={{ background: '#0c0c0c', border: '1px solid #ff00ff30', padding: '20px 24px' }}>
          <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color: '#ff6cf6', letterSpacing: '0.18em', marginBottom: 16 }}>◈ FILE INFO</div>
          {about.fileInfo.map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1c1c1c', padding: '9px 0', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(11px,1.2vw,13px)', color: '#555', letterSpacing: '0.15em' }}>{k}</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(11px,1.2vw,12px)', color: '#e8e8e0', textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 32, background: '#0c0c0c', border: '1px solid #1e1e1e', padding: '16px 20px' }}>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(11px,1.2vw,13px)', color: '#555', letterSpacing: '0.18em', marginBottom: 10 }}>RELEVANT COURSEWORK</div>
        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(11px,1.2vw,12px)', color: '#777', lineHeight: 1.8 }}>{about.coursework}</div>
      </div>
    </div>
  );
}

export function SectionSkills() {
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '60px 8vw' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: '#a8dadc', letterSpacing: '0.2em', marginBottom: 16, textShadow: '0 0 8px #a8dadc' }}>◈ SKILLS.VHS — TECH LOADOUT</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, letterSpacing: '0.04em', marginBottom: 32, color: '#f0f0e8' }}>
        TECH <span style={{ color: '#00ffff', textShadow: '0 0 14px #00ffff' }}>LOADOUT</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 280px),1fr))', gap: 20 }}>
        {skillCategories.map(({ cat, color, items }) => (
          <div key={cat} style={{ background: '#0c0c0c', border: `1px solid ${color}20`, padding: '18px 20px' }}>
            <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color, textShadow: `0 0 8px ${color}`, letterSpacing: '0.18em', marginBottom: 14 }}>◈ {cat}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {items.map((item) => (
                <span
                  key={item}
                  style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(10px,1.1vw,12px)', color: '#777', border: '1px solid #2a2a2a', padding: '3px 10px', transition: 'all 0.15s', cursor: 'default' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = color;
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2a2a2a';
                    e.currentTarget.style.color = '#777';
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionProjects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showStatic, setShowStatic] = useState(false);
  const PROJECTS_PER_PAGE = 2;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const visibleProjects = projects.slice(page * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE);

  const rewind = () => {
    if (page > 0) {
      setDirection(-1);
      setShowStatic(true);
      setTimeout(() => {
        setPage((p) => p - 1);
        setTimeout(() => setShowStatic(false), 150);
      }, 150);
    }
  };
  const fastForward = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setShowStatic(true);
      setTimeout(() => {
        setPage((p) => p + 1);
        setTimeout(() => setShowStatic(false), 150);
      }, 150);
    }
  };

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '60px 8vw', position: 'relative' }}>
      <AnimatePresence>
        {showStatic && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }} style={{ position: 'fixed', inset: 0, zIndex: 100, pointerEvents: 'none', background: '#000' }}>
            <StaticCanvas active />
            <motion.div initial={{ opacity: 0.6 }} animate={{ opacity: 0 }} transition={{ duration: 0.15 }} style={{ position: 'absolute', inset: 0, background: '#fff' }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: '#f4a261', letterSpacing: '0.2em', marginBottom: 16, textShadow: '0 0 8px #f4a261' }}>◈ PROJECTS.VHS — TAPE LIBRARY</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, letterSpacing: '0.04em', marginBottom: 32, color: '#f0f0e8' }}>
        RECORDED <span style={{ color: '#ff00ff', textShadow: '0 0 14px #ff00ff' }}>PROJECTS</span>
      </div>
      <motion.div key={page} initial={{ opacity: 0, x: direction * 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'stretch', gap: 20, marginBottom: 32 }}>
        {visibleProjects.map((p) => (
          <div
            key={p.title}
            style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0, background: '#0c0c0c', border: `1px solid ${p.color}25`, transition: 'border-color 0.2s', overflow: 'hidden' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${p.color}55`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${p.color}25`; }}
          >
            <div style={{ flexShrink: 0, position: 'relative', height: 140, overflow: 'hidden' }}>
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: p.imgFit || 'cover',
                    objectPosition: 'center',
                    background: p.imgBg || 'transparent',
                    filter: p.imgFit ? 'none' : 'grayscale(25%) brightness(0.75)',
                    display: 'block',
                  }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: '#0c0c0c', display: 'block' }} />
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)' }} />
              <div style={{ position: 'absolute', top: 8, left: 10, fontFamily: "'VT323', monospace", fontSize: 12, color: p.color, textShadow: `0 0 8px ${p.color}`, letterSpacing: '0.18em' }}>TAPE {p.tape}</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, padding: '18px 24px 22px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,14px)', color: p.color, letterSpacing: '0.18em', textShadow: `0 0 6px ${p.color}`, marginBottom: 2 }}>{p.sub.toUpperCase()} · TAPE {p.tape}</div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.5rem,3vw,2.4rem)', letterSpacing: '0.04em', color: '#f0f0e8', lineHeight: 1 }}>{p.title}</div>
                  </div>
                  <span style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color: p.status === 'REC' ? '#ff6cf6' : '#555', border: `1px solid ${p.status === 'REC' ? '#ff6cf680' : '#333'}`, padding: '2px 12px', letterSpacing: '0.1em', textShadow: p.status === 'REC' ? '0 0 6px #ff6cf6' : 'none', flexShrink: 0 }}>
                    {p.status === 'REC' ? '● REC' : '■ RECORDED'} · {p.year}
                  </span>
                </div>
                {p.progress !== undefined && (
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'VT323', monospace", fontSize: 'clamp(10px,1.1vw,12px)', color: '#555', marginBottom: 5 }}>
                      <span>RECORDING PROGRESS</span>
                      <span style={{ color: p.color }}>{p.progress}%</span>
                    </div>
                    <div style={{ height: 2, background: '#1a1a1a' }}>
                      <div style={{ width: `${p.progress}%`, height: '100%', background: `linear-gradient(90deg,#6d2b9f,${p.color})`, boxShadow: `0 0 6px ${p.color}` }} />
                    </div>
                  </div>
                )}
                <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(11px,1.2vw,13px)', color: '#888', lineHeight: 1.8, marginBottom: 14, marginTop: 0 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(10px,1vw,11px)', color: '#555', border: '1px solid #222', padding: '2px 8px' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 16, flexShrink: 0 }}>
                <ProjectLinks p={p} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {totalPages > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(10px, 3vw, 20px)', marginTop: 12, flexWrap: 'wrap' }}>
          <motion.button onClick={rewind} disabled={page === 0} whileHover={page > 0 ? { scale: 1.05, x: -3 } : {}} whileTap={page > 0 ? { scale: 0.95, x: -8 } : {}} style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(14px,1.4vw,17px)', color: page === 0 ? '#333' : '#ff00ff', background: 'rgba(0,0,0,0.4)', border: `1px solid ${page === 0 ? '#333' : '#ff00ff60'}`, padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px)', minHeight: 44, cursor: page === 0 ? 'not-allowed' : 'pointer', letterSpacing: '0.12em', textShadow: page === 0 ? 'none' : '0 0 8px #ff00ff', opacity: page === 0 ? 0.4 : 1, touchAction: 'manipulation' }}>
            ◄◄ REWIND
          </motion.button>
          <motion.div key={page} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color: '#666', letterSpacing: '0.1em' }}>
            <span style={{ color: '#f4a261', textShadow: '0 0 6px #f4a261' }}>{String(page + 1).padStart(2, '0')}</span>
            {' / '}
            <span style={{ color: '#555' }}>{String(totalPages).padStart(2, '0')}</span>
          </motion.div>
          <motion.button onClick={fastForward} disabled={page === totalPages - 1} whileHover={page < totalPages - 1 ? { scale: 1.05, x: 3 } : {}} whileTap={page < totalPages - 1 ? { scale: 0.95, x: 8 } : {}} style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(14px,1.4vw,17px)', color: page === totalPages - 1 ? '#333' : '#00ffff', background: 'rgba(0,0,0,0.4)', border: `1px solid ${page === totalPages - 1 ? '#333' : '#00ffff60'}`, padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 20px)', minHeight: 44, cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer', letterSpacing: '0.12em', textShadow: page === totalPages - 1 ? 'none' : '0 0 8px #00ffff', opacity: page === totalPages - 1 ? 0.4 : 1, touchAction: 'manipulation' }}>
            FAST FWD ►►
          </motion.button>
        </div>
      )}
    </div>
  );
}

function TimelineSection({ title, children, accent }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.4vw,16px)', color: accent, letterSpacing: '0.22em', marginBottom: 16, textShadow: `0 0 6px ${accent}` }}>◈ {title}</div>
      <div style={{ borderLeft: '2px solid #2a2a2a', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 22 }}>{children}</div>
    </div>
  );
}

function Entry({ title, org, period, points, link, links, accent }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: -24, top: 6, width: 7, height: 7, borderRadius: '50%', background: accent, boxShadow: `0 0 6px ${accent}` }} />
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(10px,1.1vw,12px)', color: '#555', letterSpacing: '0.1em', marginBottom: 3 }}>{period}</div>
      <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(12px,1.3vw,14px)', color: '#e8e8e0', fontWeight: 700, marginBottom: 2 }}>{title}</div>
      {org ? (
        <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(11px,1.2vw,12px)', color: '#777', marginBottom: 8 }}>{org}</div>
      ) : null}
      {points.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {points.map((p, i) => (
            <li key={i} style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(10px,1.1vw,12px)', color: '#666', lineHeight: 1.75 }}>
              <span style={{ color: '#ff00ff' }}>—</span> {p}
            </li>
          ))}
        </ul>
      )}
      {/* Backwards compatibility: if links array not provided, fall back to single link */}
      {(links && links.length > 0) ? (
        <div
          style={{
            marginTop: 8,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {links.map(({ label, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Share Tech Mono', monospace",
                fontSize: 'clamp(9px,1vw,11px)',
                color: '#06d6a0',
                textDecoration: 'none',
                border: '1px solid rgba(6,214,160,0.45)',
                padding: '3px 8px',
                borderRadius: 2,
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      ) : (
        link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              marginTop: 8,
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: 'clamp(9px,1vw,11px)',
              color: '#06d6a0',
              textDecoration: 'none',
              border: '1px solid rgba(6,214,160,0.45)',
              padding: '3px 8px',
              borderRadius: 2,
              whiteSpace: 'nowrap',
            }}
          >
            {link.replace(/^https?:\/\//, '')}
          </a>
        )
      )}
    </div>
  );
}

export function SectionResume() {
  const accent = '#b39ddb';
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '60px 8vw 80px' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: accent, letterSpacing: '0.2em', marginBottom: 16, textShadow: `0 0 8px ${accent}` }}>◈ RESUME.VHS — FULL DOSSIER</div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, letterSpacing: '0.04em', color: '#f0f0e8' }}>
          FULL <span style={{ color: accent, textShadow: `0 0 14px ${accent}` }}>DOSSIER</span>
        </div>
        <a href={resumePdfUrl} download style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: "'VT323', monospace", fontSize: 'clamp(14px,1.5vw,18px)', color: '#000', background: accent, padding: '10px 20px', minHeight: 44, letterSpacing: '0.12em', textDecoration: 'none', boxShadow: `0 0 16px ${accent}60`, flexShrink: 0, alignSelf: 'center', touchAction: 'manipulation' }}>
          ⬇ DOWNLOAD PDF
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%, 290px),1fr))', gap: 0, columnGap: 48 }}>
        <div>
          <TimelineSection title="EDUCATION" accent={accent}>
            {resume.education.map((e) => (
              <Entry key={e.title} {...e} accent={accent} />
            ))}
          </TimelineSection>
          <TimelineSection title="EXPERIENCE" accent={accent}>
            {resume.experience.map((e) => (
              <Entry key={e.title} {...e} accent={accent} />
            ))}
          </TimelineSection>
          <TimelineSection title="LEADERSHIP & ACTIVITIES" accent={accent}>
            {resume.leadership.map((e) => (
              <Entry key={e.title} {...e} accent={accent} />
            ))}
          </TimelineSection>
          <TimelineSection title="CERTIFICATIONS" accent={accent}>
            {resume.certifications.map((e) => (
              <Entry key={e.title} {...e} accent={accent} />
            ))}
          </TimelineSection>
        </div>
        <div>
          <TimelineSection title="PROJECTS" accent={accent}>
            {resume.projectEntries.map((e) => (
              <Entry key={e.title} {...e} accent={accent} />
            ))}
          </TimelineSection>
        </div>
      </div>
    </div>
  );
}

export function SectionContact() {
  return (
    <div style={{ minHeight: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 8vw' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: '#06d6a0', letterSpacing: '0.2em', marginBottom: 16, textShadow: '0 0 8px #06d6a0' }}>◈ CONTACT.VHS — BONUS FEATURE</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem,6vw,6rem)', lineHeight: 0.95, letterSpacing: '0.04em', marginBottom: 12, color: '#f0f0e8' }}>
        LET&apos;S MAKE<br /><span style={{ color: '#ff00ff', textShadow: '0 0 20px #ff00ff' }}>SOMETHING.</span>
      </div>
      <div style={{ height: 1, background: 'linear-gradient(90deg,#ff00ff,#00ffff,transparent)', maxWidth: 480, marginBottom: 32 }} />
      <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color: '#888', lineHeight: 1.9, maxWidth: 480, marginBottom: 40 }}>{contact.intro}</p>
      <div className="contact-grid">
        {contact.links.map(({ label, value, href, color }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
            rel={href.startsWith('mailto') || href.startsWith('tel') ? undefined : 'noopener noreferrer'}
            style={{ display: 'block', background: '#0c0c0c', border: `1px solid ${color}30`, padding: '18px 20px', minHeight: 80, textDecoration: 'none', transition: 'all 0.2s', touchAction: 'manipulation' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = color;
              e.currentTarget.style.boxShadow = `0 0 16px ${color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${color}30`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color, textShadow: `0 0 6px ${color}`, letterSpacing: '0.18em', marginBottom: 6 }}>◈ {label}</div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(11px,1.2vw,13px)', color: '#bbb', wordBreak: 'break-all' }}>{value}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export function SectionAchievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const a = achievements[currentIndex];

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '60px 8vw', position: 'relative' }}>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.5vw,18px)', color: '#ffd700', letterSpacing: '0.2em', marginBottom: 16, textShadow: '0 0 8px #ffd700' }}>◈ ACHIEVEMENTS.VHS — HALL OF FAME</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, letterSpacing: '0.04em', marginBottom: 32, color: '#f0f0e8' }}>
        HALL OF <span style={{ color: '#ffd700', textShadow: '0 0 14px #ffd700' }}>FAME</span>
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 20px)', marginBottom: 32 }}>
        <motion.button onClick={() => currentIndex > 0 && setCurrentIndex((i) => i - 1)} disabled={currentIndex === 0} whileHover={currentIndex > 0 ? { scale: 1.1 } : {}} whileTap={currentIndex > 0 ? { scale: 0.9 } : {}} style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(20px,2vw,28px)', color: currentIndex === 0 ? '#333' : '#ffd700', background: 'rgba(0,0,0,0.5)', border: `1px solid ${currentIndex === 0 ? '#333' : '#ffd70060'}`, width: 'clamp(44px, 10vw, 50px)', height: 'clamp(44px, 10vw, 50px)', minWidth: 44, minHeight: 44, borderRadius: '50%', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentIndex === 0 ? 0.4 : 1, flexShrink: 0, touchAction: 'manipulation' }}>
          ◄
        </motion.button>
        <motion.div key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} style={{ flex: 1, maxWidth: 800, margin: '0 auto' }}>
          <div style={{ background: '#0c0c0c', border: `1px solid ${a.color}40`, overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: a.imgBg || '#0a0a0a' }}>
              {a.img ? (
                <img
                  src={a.img}
                  alt={a.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: a.imgFit || 'cover',
                    objectPosition: 'center',
                    background: a.imgBg || 'transparent',
                    filter: a.imgFit ? 'none' : 'grayscale(35%) brightness(0.65)',
                    display: 'block',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    background: `linear-gradient(135deg, ${a.color}18, #0c0c0c 60%)`,
                  }}
                >
                  <span style={{ fontSize: 48, lineHeight: 1 }}>{a.icon}</span>
                  <span style={{ fontFamily: "'VT323', monospace", fontSize: 11, color: `${a.color}90`, letterSpacing: '0.16em' }}>◈ NO ARTWORK</span>
                </div>
              )}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.88) 100%)', pointerEvents: 'none' }} />
              {a.img && (
                <div style={{ position: 'absolute', top: 8, right: 10, fontSize: 32, lineHeight: 1, pointerEvents: 'none' }}>{a.icon}</div>
              )}
            </div>
            <div style={{ padding: '24px 32px 28px' }}>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(13px,1.4vw,16px)', color: a.color, textShadow: `0 0 8px ${a.color}`, letterSpacing: '0.18em', marginBottom: 6 }}>◈ {a.title} · {a.year}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#e8e8e0', letterSpacing: '0.04em', marginBottom: 16, lineHeight: 1.1 }}>{a.sub}</div>
              <p style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(12px,1.3vw,14px)', color: '#888', lineHeight: 1.85, margin: '0 0 12px' }}>{a.desc}</p>
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: 'clamp(9px,1vw,11px)',
                    color: '#06d6a0',
                    textDecoration: 'none',
                    border: '1px solid rgba(6,214,160,0.45)',
                    padding: '3px 8px',
                    borderRadius: 2,
                    whiteSpace: 'nowrap',
                    touchAction: 'manipulation',
                  }}
                >
                  {a.link.replace(/^https?:\/\//, '')}
                </a>
              )}
            </div>
          </div>
        </motion.div>
        <motion.button onClick={() => currentIndex < achievements.length - 1 && setCurrentIndex((i) => i + 1)} disabled={currentIndex === achievements.length - 1} whileHover={currentIndex < achievements.length - 1 ? { scale: 1.1 } : {}} whileTap={currentIndex < achievements.length - 1 ? { scale: 0.9 } : {}} style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(20px,2vw,28px)', color: currentIndex === achievements.length - 1 ? '#333' : '#ffd700', background: 'rgba(0,0,0,0.5)', border: `1px solid ${currentIndex === achievements.length - 1 ? '#333' : '#ffd70060'}`, width: 'clamp(44px, 10vw, 50px)', height: 'clamp(44px, 10vw, 50px)', minWidth: 44, minHeight: 44, borderRadius: '50%', cursor: currentIndex === achievements.length - 1 ? 'not-allowed' : 'pointer', opacity: currentIndex === achievements.length - 1 ? 0.4 : 1, flexShrink: 0, touchAction: 'manipulation' }}>
          ►
        </motion.button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
        {achievements.map((ach, idx) => (
          <motion.button key={ach.id} animate={{ scale: idx === currentIndex ? 1.2 : 1, opacity: idx === currentIndex ? 1 : 0.4 }} onClick={() => setCurrentIndex(idx)} style={{ width: 32, height: 32, borderRadius: '50%', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, touchAction: 'manipulation', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: idx === currentIndex ? 12 : 10, height: idx === currentIndex ? 12 : 10, borderRadius: '50%', background: ach.color, boxShadow: idx === currentIndex ? `0 0 10px ${ach.color}` : 'none' }} />
          </motion.button>
        ))}
      </div>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: 'clamp(12px,1.3vw,15px)', color: '#666', letterSpacing: '0.1em', textAlign: 'center' }}>
        <span style={{ color: '#ffd700', textShadow: '0 0 6px #ffd700' }}>TAPE {String(currentIndex + 1).padStart(2, '0')}</span>
        {' / '}
        <span style={{ color: '#555' }}>{String(achievements.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export const sectionContent = {
  intro: <SectionIntro />,
  about: <SectionAbout />,
  skills: <SectionSkills />,
  projects: <SectionProjects />,
  resume: <SectionResume />,
  contact: <SectionContact />,
  achievements: <SectionAchievements />,
};
