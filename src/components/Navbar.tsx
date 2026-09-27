import { useLayoutEffect, useRef, useState } from 'react';
import '../styles/NavbarStyles.css';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const;

type LinkId = (typeof LINKS)[number]['id'];

export default function Navbar() {
  const [active, setActive] = useState<LinkId>('home');
  const [hovered, setHovered] = useState<LinkId | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const pillRef = useRef<HTMLDivElement>(null);

  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  const movePill = (id: LinkId) => {
    const link = linkRefs.current[id];
    const pill = pillRef.current;

    if (!link || !pill) return;

    // Extrae el ancho exacto con decimales para evitar el desajuste de subpíxeles
    const exactWidth = link.getBoundingClientRect().width;

    pill.style.width = `${exactWidth}px`;
    pill.style.transform = `translateX(${link.offsetLeft}px)`;
  };

  useLayoutEffect(() => {
    movePill(hovered ?? active);

    const onResize = () => {
      movePill(hovered ?? active);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [active, hovered]);

  useLayoutEffect(() => {
    let ticking = false;

    const updateActive = () => {
      ticking = false;

      if (isClickScrolling.current) return;

      const viewportCenter = window.innerHeight / 2;

      let closestSection: LinkId = 'home';
      let closestDistance = Infinity;

      for (const link of LINKS) {
        const section = document.getElementById(link.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = link.id;
        }
      }

      setActive((prev) =>
        prev === closestSection ? prev : closestSection
      );
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(updateActive);
    };

    updateActive();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleClick = (id: LinkId) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActive(id);
    isClickScrolling.current = true;

    if (scrollTimeout.current) {
      window.clearTimeout(scrollTimeout.current);
    }

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    scrollTimeout.current = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <header className="navbar-wrap">
      <nav
        className="navbar"
        ref={navRef}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="navbar-pill" ref={pillRef} />

        {LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => {
              linkRefs.current[link.id] = el;
            }}
            className={`navbar-link${active === link.id ? ' is-active' : ''
              }`}
            onMouseEnter={() => setHovered(link.id)}
            onClick={(e) => {
              e.preventDefault();
              handleClick(link.id);
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}