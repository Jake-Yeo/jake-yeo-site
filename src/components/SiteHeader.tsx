import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  ['About', '/#about'],
  ['Experience', '/#experience'],
  ['Skills', '/#skills'],
  ['Projects', '/#projects'],
] as const;

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeMenu);
    return () => window.removeEventListener('keydown', closeMenu);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Link className="wordmark" to="/#top" aria-label="Jake Yeo, back to top" onClick={() => setMenuOpen(false)}>
        <span className="wordmark-mark" aria-hidden="true">JY</span>
        <span>Jake Yeo</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <Link key={href} to={href} onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
        <a className="nav-contact" href="mailto:jakeyeozh@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default SiteHeader;
