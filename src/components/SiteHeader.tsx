import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { approvedExperiences } from '../experience';

const Icon = ({ name }: { name: 'github' | 'linkedin' | 'menu' | 'close' | 'arrow' }) => {
  const paths: Record<string, ReactNode> = {
    github: <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.88c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.82a9.5 9.5 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" />,
    linkedin: <path d="M6.5 8.5H3.2V19h3.3V8.5ZM4.85 3A1.92 1.92 0 1 0 4.85 6.84 1.92 1.92 0 0 0 4.85 3ZM20 13c0-3.17-1.69-4.65-3.95-4.65-1.82 0-2.63 1-3.08 1.7V8.5H9.68V19h3.29v-5.2c0-1.37.26-2.7 1.96-2.7 1.67 0 1.69 1.57 1.69 2.79V19H20v-6Z" fill="currentColor" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

const homeHref = (hash: string, onHome: boolean) => onHome ? hash : `/${hash}`;

const SiteHeader = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const onHome = location.pathname === '/';
  const onExperience = location.pathname.startsWith('/experience');

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <div className="site-rail">
        <div className="nav__identity">
          <Link className="nav__brand" to="/" aria-label="Jake Yeo homepage">
            <span className="nav__logo-mark" aria-hidden="true">JY</span>
            <span className="nav__name">Jake Yeo</span>
          </Link>
          <p className="nav__role">Software developer</p>
        </div>

        <nav className="nav__links" aria-label="Primary navigation">
          <a className={`nav__link ${onHome ? 'is-active' : ''}`} href={homeHref('#about', onHome)}>About</a>
          <a className={`nav__link ${onExperience ? 'is-active' : ''}`} href={homeHref('#experience', onHome)}>Experience</a>
          <div className="nav__experience-links" aria-label="Experience case studies">
            {approvedExperiences.map((experience) => (
              <Link className="nav__experience-link" key={experience.slug} to={`/experience/${experience.slug}`}>
                <span>{experience.company}</span>
                <small>{experience.role}</small>
              </Link>
            ))}
          </div>
          <a className="nav__link" href={homeHref('#skills', onHome)}>Skills</a>
          <a className="nav__link" href={homeHref('#projects', onHome)}>Projects</a>
          <a className="nav__link" href={homeHref('#contact', onHome)}>Contact</a>
        </nav>

        <div className="nav__rail-footer">
          <a className="nav__email" href="mailto:jakeyeozh@gmail.com">Email Jake</a>
          <div className="nav__socials">
            <a href="https://github.com/Jake-Yeo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          </div>
        </div>
      </div>

      <div className="nav__mobilebar">
        <Link className="nav__mobile-brand" to="/" aria-label="Jake Yeo homepage">Jake Yeo</Link>
        <button
          className="nav__toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        <nav className="nav__mobile-inner" aria-label="Mobile navigation">
          <a className="nav__mobile-link" href="/#about" onClick={closeMenu}>About</a>
          <a className={`nav__mobile-link ${onExperience ? 'is-active' : ''}`} href="/#experience" onClick={closeMenu}>Experience</a>
          {approvedExperiences.map((experience) => (
            <Link className="nav__mobile-link nav__mobile-link--sub" key={experience.slug} to={`/experience/${experience.slug}`} onClick={closeMenu}>
              {experience.company}
            </Link>
          ))}
          <a className="nav__mobile-link" href="/#skills" onClick={closeMenu}>Skills</a>
          <a className="nav__mobile-link" href="/#projects" onClick={closeMenu}>Projects</a>
          <a className="nav__mobile-link" href="/#contact" onClick={closeMenu}>Contact</a>
          <a className="nav__mobile-cta" href="mailto:jakeyeozh@gmail.com">Email Jake</a>
        </nav>
      </div>
    </header>
  );
};

export { Icon };
export default SiteHeader;
