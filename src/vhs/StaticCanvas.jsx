import { useEffect, useRef } from 'react';

export function StaticCanvas({ active, style = {} }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    let raf;
    const draw = () => {
      c.width = c.offsetWidth || 400;
      c.height = c.offsetHeight || 300;
      const img = ctx.createImageData(c.width, c.height);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = active ? Math.random() * 240 : Math.random() * 22;
        img.data[i] = v;
        img.data[i + 1] = v;
        img.data[i + 2] = v * (active ? 0.8 : 1);
        img.data[i + 3] = active ? 210 : 18;
      }
      ctx.putImageData(img, 0, 0);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [active]);
  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
