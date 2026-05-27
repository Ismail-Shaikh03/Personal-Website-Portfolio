export const globalStyles = `
  @keyframes flicker { 0%,100%{opacity:1} 95%{opacity:1} 96%{opacity:0.88} 97%{opacity:1} }
  * { box-sizing: border-box; }
  html, body, #root { margin: 0; min-height: 100%; }
  html { -webkit-tap-highlight-color: transparent; }
  body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  ::-webkit-scrollbar { width: 3px; } ::-webkit-scrollbar-thumb { background: #ff00ff; }
  .tape-shelf { display: flex; gap: 10px; align-items: flex-end; min-height: 88px; overflow-x: auto; overflow-y: visible; padding-bottom: 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .tape-shelf::-webkit-scrollbar { display: none; }
  .fullscreen-tape-row { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; padding-bottom: 2px; -webkit-overflow-scrolling: touch; }
  .fullscreen-tape-row::-webkit-scrollbar { display: none; }
  .nav-tape-btn {
    --tape-spine: #888;
    background: rgba(255,255,255,0.05);
    border: 1px solid #2a2a2a;
    color: #666;
    font-family: 'VT323', monospace;
    font-size: clamp(12px, 3vw, 14px);
    padding: 6px 12px;
    min-height: 36px;
    cursor: pointer;
    letter-spacing: 0.08em;
    white-space: nowrap;
    flex-shrink: 0;
    touch-action: manipulation;
    transition: color 0.15s ease, border-color 0.15s ease, text-shadow 0.15s ease, background 0.15s ease;
  }
  .nav-tape-btn--active {
    background: color-mix(in srgb, var(--tape-spine) 12%, transparent);
    border-color: color-mix(in srgb, var(--tape-spine) 50%, transparent);
    color: var(--tape-spine);
    text-shadow: 0 0 8px var(--tape-spine);
  }
  @media (hover: hover) {
    .nav-tape-btn:hover:not(.nav-tape-btn--active) {
      color: var(--tape-spine);
      border-color: color-mix(in srgb, var(--tape-spine) 35%, transparent);
      text-shadow: 0 0 6px var(--tape-spine);
    }
  }
  @media (max-width: 768px) {
    .tape-shelf { gap: 8px; }
    .fullscreen-tape-row { gap: 8px; padding: 0 12px 8px !important; }
  }
  @media (hover: none) and (pointer: coarse) {
    button, a { -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1); }
  }
  .contact-grid {
    display: grid;
    gap: 14px;
    width: 100%;
    max-width: 100%;
    grid-template-columns: 1fr;
  }
  @media (min-width: 480px) {
    .contact-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 900px) {
    .contact-grid {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1100px;
    }
  }
`;
