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
