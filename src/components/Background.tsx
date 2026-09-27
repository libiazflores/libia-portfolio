import { useEffect, useRef } from 'react';
import '../styles/BackgroundStyles.css';

const BLOBS = [
  { key: 'rose', depth: 80 },
  { key: 'sky', depth: -60 },
  { key: 'gold', depth: 45 },
] as const;

export default function AuroraBackground() {
  const rootRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const onMouseMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;

      rootRef.current?.style.setProperty('--mx', current.current.x.toFixed(4));
      rootRef.current?.style.setProperty('--my', current.current.y.toFixed(4));

      frame.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="aurora" aria-hidden="true" ref={rootRef}>
      {BLOBS.map(({ key, depth }) => (
        <div key={key} className="blob-parallax" style={{ '--depth': depth } as React.CSSProperties}>
          <div className={`blob blob--${key}`} />
        </div>
      ))}
    </div>
  );
}