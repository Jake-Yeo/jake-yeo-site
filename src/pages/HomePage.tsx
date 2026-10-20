import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Gallery from '../components/Gallery';
import SiteHeader, { Icon } from '../components/SiteHeader';
import TechIcon from '../components/TechIcon';
import { approvedExperiences } from '../experience';
import { portfolioProjects, skillGroups, type PortfolioProject } from '../portfolioData';

const projectLinkLabel = (label: string) => {
  if (label === 'Live site') return 'Open app';
  if (label === 'Source') return 'Code';
  return label;
};

const Footer = () => (
  <>
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__card card">
          <div className="contact__copy">
            <p className="eyebrow">Contact</p>
            <h2 className="contact__title" id="contact-title">Want to talk about software?</h2>
            <p className="contact__lede">Email me about a role, a project, or anything on this site.</p>
          </div>
          <div className="contact__actions">
            <a className="btn btn-primary" href="mailto:jakeyeozh@gmail.com">Send an email</a>
            <a className="btn btn-ghost" href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer">Open LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    <footer className="container footer__bar">
      <p className="footer__copy">© {new Date().getFullYear()} Jake Yeo. Portfolio built in React and TypeScript.</p>
      <div className="footer__links">
        <a href="https://github.com/Jake-Yeo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /></a>
        <a href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
      </div>
    </footer>
  </>
);

const HomePage = () => {
  const location = useLocation();
  const [galleryProject, setGalleryProject] = useState<PortfolioProject | null>(null);
  const galleryTriggerRef = useRef<HTMLElement | null>(null);
  const openGallery = useCallback((project: PortfolioProject, trigger: HTMLElement) => {
    galleryTriggerRef.current = trigger;
    setGalleryProject(project);
  }, []);
  const closeGallery = useCallback(() => setGalleryProject(null), []);

  useEffect(() => {
    document.title = 'Jake Yeo — Software Developer';
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const timer = window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      target.scrollIntoView({ block: 'start' });
      document.documentElement.style.scrollBehavior = previousBehavior;
    }, 0);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="home-page">
      <a className="skip-link" href="#main" onClick={() => document.getElementById('main')?.focus()}>Skip to main content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="hero" id="about">
          <div className="container hero__inner">
            <figure className="hero__visual reveal is-visible">
              <div className="hero__portrait-frame">
                <img className="hero__portrait" src="/pics/jakePhotoWithBg.JPG" alt="Portrait of Jake Yeo" />
              </div>
              <figcaption className="hero__portrait-notes">
                <p><span>Recent role</span>Software Developer Intern, UBC Faculty of Medicine</p>
                <p><span>Hackathon</span>nwHacks 2025 Sponsor Prize</p>
              </figcaption>
            </figure>

            <div className="hero__copy reveal is-visible">
              <h1 className="hero__name">Jake Yeo</h1>
              <p className="hero__title">Software developer building useful systems end to end.</p>
              <p className="hero__intro">I study Computer Science at UBC and build reliable software across web interfaces, APIs, cloud infrastructure, and data systems.</p>
              <div className="hero__details">
                <span>Vancouver, BC</span>
                <span>Computer Science at UBC</span>
              </div>
              <div className="hero__actions">
                <a className="btn btn-primary" href="#experience">View experience</a>
                <a className="btn btn-ghost" href="#projects">Browse projects</a>
                <a className="btn btn-ghost" href="mailto:jakeyeozh@gmail.com">Email me</a>
              </div>
              <span className="hero__status"><span className="hero__dot" /> Software developer</span>
              <div className="hero__socials">
                <a href="https://github.com/Jake-Yeo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /><span>GitHub</span></a>
                <a href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /><span>LinkedIn</span></a>
                <a href="mailto:jakeyeozh@gmail.com" aria-label="Email Jake"><span>jakeyeozh@gmail.com</span></a>
              </div>
            </div>
          </div>
          <a className="hero__scroll" href="#experience" aria-label="Jump to experience">↓</a>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">Professional work</p>
              <h2 className="section-title" id="experience-title">Experience</h2>
              <p className="section-lede">Two internships spanning product interfaces, APIs, document generation, media processing, and AWS infrastructure.</p>
            </header>
            <div className="experience__list">
              {approvedExperiences.map((experience, index) => (
                <article className="experience__row card reveal" style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties} key={experience.slug}>
                  <div className="experience__main">
                    <p className="experience__company"><a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">{experience.company} ↗</a></p>
                    <h3 className="experience__role">{experience.role}</h3>
                    <p className="experience__summary">{experience.summary}</p>
                    <ul className="experience__highlights">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    <ul className="experience__stack" aria-label={`${experience.company} technologies`}>{experience.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul>
                    <Link className="experience__story" to={`/experience/${experience.slug}`}>
                      <span>Open {experience.company} case study</span><Icon name="arrow" />
                    </Link>
                  </div>
                  <dl className="experience__meta">
                    <div><dt>Period</dt><dd>{experience.period}</dd></div>
                    <div><dt>Location</dt><dd>{experience.location}</dd></div>
                    <div><dt>Product</dt><dd>{experience.product}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">Working set</p>
              <h2 className="section-title" id="skills-title">Tools I use</h2>
              <p className="section-lede">Languages, frameworks, platforms, and tools I have used to ship the work on this site.</p>
            </header>
            <div className="skills__bands">
              {skillGroups.map((group, index) => (
                <article className="skills__band-row card reveal" key={group.title} style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}>
                  <div className="skills__band-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><p>{group.blurb}</p></div>
                  <ul className="skills__list">{group.skills.map((skill) => <li className="chip skills__chip skills__chip--logo" key={skill}><TechIcon skill={skill} />{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <header className="section-head reveal">
              <p className="eyebrow">Project archive</p>
              <h2 className="section-title" id="projects-title">Selected projects</h2>
              <p className="section-lede">Hackathon, course, and independent builds, with screenshots from each product.</p>
            </header>
            <div className="projects__list">
              {portfolioProjects.map((project, index) => (
                <article className={`project card reveal ${project.featured ? 'project--featured' : ''}`} key={project.name} style={{ '--reveal-delay': `${(index % 2) * 80}ms` } as CSSProperties}>
                  <div className="project__body">
                    <div className="project__top">
                      <div className="project__heading"><h3 className="project__name">{project.name}</h3><span className="project__year">{project.year}</span></div>
                      {project.award && <span className="project__award">{project.award}</span>}
                    </div>
                    <p className="project__tagline">{project.tagline}</p>
                    <p className="project__description">{project.description}</p>
                    <ul className="project__stack" aria-label={`${project.name} technology stack`}>{project.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul>
                    <div className="project__links">
                      {project.links.map((link) => <a className="btn btn-ghost btn-sm" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{projectLinkLabel(link.label)} ↗</a>)}
                      <button type="button" className="project__gallery-btn" onClick={(event) => openGallery(project, event.currentTarget)}>Browse images →</button>
                    </div>
                  </div>
                  <button type="button" className="project__cover" aria-label={`Browse ${project.name} images`} onClick={(event) => openGallery(project, event.currentTarget)}>
                    <img src={project.images[0]} alt="" loading={index < 2 ? 'eager' : 'lazy'} style={{ objectPosition: project.coverPosition || 'top center' }} />
                    <span className="project__cover-hint">{project.images.length} images</span>
                  </button>
                </article>
              ))}
            </div>
            <div className="projects__more reveal"><span>The rest of my code is on GitHub.</span><a className="btn btn-ghost btn-sm" href="https://github.com/Jake-Yeo" target="_blank" rel="noopener noreferrer">Open GitHub profile ↗</a></div>
          </div>
        </section>

        <section className="education section" id="education" aria-labelledby="education-title">
          <div className="container">
            <div className="education__band card reveal">
              <div><p className="eyebrow">Formal education</p><h2 id="education-title">B.Sc. Computer Science</h2></div>
              <div><p>The University of British Columbia</p><span>Vancouver, BC</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {galleryProject && <Gallery project={galleryProject.name} images={galleryProject.images} onClose={closeGallery} returnFocusTo={galleryTriggerRef.current} />}
    </div>
  );
};

export { Footer };
export default HomePage;
