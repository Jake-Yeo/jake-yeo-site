import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Gallery from '../components/Gallery';
import SiteHeader, { Icon } from '../components/SiteHeader';
import { approvedExperiences } from '../experience';
import { portfolioProjects, skillGroups, type PortfolioProject } from '../portfolioData';

const Footer = () => (
  <>
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__card card">
          <span className="contact__glow" aria-hidden="true" />
          <p className="eyebrow">Contact</p>
          <h2 className="contact__title" id="contact-title">Let’s build something together.</h2>
          <p className="contact__lede">Whether it’s a role, a project, or a question about something I’ve made, my inbox is open.</p>
          <div className="contact__actions">
            <a className="btn btn-primary" href="mailto:jakeyeozh@gmail.com">jakeyeozh@gmail.com</a>
            <a className="btn btn-ghost" href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
    <footer className="container footer__bar">
      <p className="footer__copy">© {new Date().getFullYear()} Jake Yeo. Built with React.</p>
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
    document.title = 'Jake Yeo — Full-Stack Developer';
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
    <div>
      <a className="skip-link" href="#main" onClick={() => document.getElementById('main')?.focus()}>Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="hero" id="about">
          <div className="container hero__inner">
            <div className="hero__copy reveal is-visible">
              <span className="hero__status"><span className="hero__dot" /> Full-stack developer in Vancouver</span>
              <h1 className="hero__title">Hi, I’m <span className="gradient-text">Jake.</span></h1>
              <p className="hero__intro">I’m a Computer Science student at The University of British Columbia and a full-stack developer who enjoys building reliable products across web, cloud, data, and infrastructure.</p>
              <div className="hero__meta">
                <span className="hero__meta-item">⌖ Vancouver, BC</span><span>·</span><span>Full-Stack Developer · CS @ UBC</span>
              </div>
              <div className="hero__story">
                <a className="hero__story-link" href="#experience">
                  <span className="hero__story-link-text">What I’ve built and learned in industry</span>
                  <span className="hero__story-link-arrow"><Icon name="arrow" /></span>
                </a>
              </div>
              <div className="hero__actions">
                <a className="btn btn-ghost" href="#projects">See my projects</a>
                <a className="btn btn-ghost" href="mailto:jakeyeozh@gmail.com">Get in touch</a>
              </div>
              <div className="hero__socials">
                <a href="https://github.com/Jake-Yeo" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Icon name="github" /><span>GitHub</span></a>
                <a href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /><span>LinkedIn</span></a>
                <a href="mailto:jakeyeozh@gmail.com" aria-label="Email"><span>jakeyeozh@gmail.com</span></a>
              </div>
            </div>
            <div className="hero__visual reveal is-visible">
              <div className="hero__portrait-frame"><img className="hero__portrait" src="/pics/jake-portrait.jpg" alt="Portrait of Jake Yeo" /></div>
              <div className="hero__badge hero__badge--top"><span className="hero__badge-label">Previously</span><span className="hero__badge-value">Software Developer Intern @ UBC</span></div>
              <div className="hero__badge hero__badge--bottom"><span className="hero__badge-label">Hackathons</span><span className="hero__badge-value">nwHacks 2025 Sponsor Prize</span></div>
            </div>
          </div>
          <a className="hero__scroll" href="#experience" aria-label="Scroll to experience">↓</a>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <header className="section-head reveal"><p className="eyebrow">Where I’ve worked</p><h2 className="section-title" id="experience-title">Experience</h2><p className="section-lede">Shipping production software across product interfaces, APIs, cloud infrastructure, data, and document generation.</p></header>
            <div className="experience__grid">
              <div className="experience__jobs">
                {approvedExperiences.map((experience, index) => (
                  <article className="experience__item card reveal" style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties} key={experience.slug}>
                    <span className="experience__marker" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    <div className="experience__header">
                      <div><h3 className="experience__role">{experience.role}</h3><p className="experience__company"><a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">{experience.company} ↗</a><span className="experience__location">{experience.location}</span></p></div>
                      <span className="experience__period">{experience.period}</span>
                    </div>
                    <p className="experience__summary">{experience.summary}</p>
                    <ul className="experience__highlights">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    <ul className="experience__stack" aria-label={`${experience.company} technologies`}>{experience.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul>
                    <Link className="experience__story" to={`/experience/${experience.slug}`}>
                      <span className="experience__story-text"><span className="experience__story-title">Read about {experience.duration.toLowerCase()} at {experience.company}</span><span className="experience__story-sub">Projects, stack, milestones, and lessons</span></span>
                      <span className="experience__story-arrow"><Icon name="arrow" /></span>
                    </Link>
                  </article>
                ))}
              </div>
              <aside className="experience__side"><article className="experience__edu card reveal"><p className="eyebrow">Education</p><h3 className="experience__edu-degree">B.Sc. Computer Science</h3><p className="experience__edu-school">The University of British Columbia</p><span className="experience__location">Vancouver, BC</span></article></aside>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <header className="section-head reveal"><p className="eyebrow">Toolkit</p><h2 className="section-title" id="skills-title">Skills</h2><p className="section-lede">The languages, frameworks, platforms, and tools I reach for most across the stack.</p></header>
            <div className="skills__grid">{skillGroups.map((group, index) => <article className="skills__group card reveal" key={group.title} style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}><span className="skills__index">{String(index + 1).padStart(2, '0')}</span><h3 className="skills__title">{group.title}</h3><p className="skills__blurb">{group.blurb}</p><ul className="skills__list">{group.skills.map((skill) => <li className="chip skills__chip" key={skill}>{skill}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="container">
            <header className="section-head reveal"><p className="eyebrow">Selected work</p><h2 className="section-title" id="projects-title">Projects</h2><p className="section-lede">Things I’ve built with teams and independently. Click any cover to browse the screenshots.</p></header>
            <div className="projects__grid">
              {portfolioProjects.map((project, index) => (
                <article className={`project card reveal ${project.featured ? 'project--featured' : ''}`} key={project.name} style={{ '--reveal-delay': `${(index % 2) * 80}ms` } as CSSProperties}>
                  <button type="button" className="project__cover" aria-label={`Open ${project.name} screenshots`} onClick={(event) => openGallery(project, event.currentTarget)}>
                    <img src={project.images[0]} alt="" loading={index < 2 ? 'eager' : 'lazy'} style={{ objectPosition: project.coverPosition || 'top center' }} />
                    <span className="project__cover-hint">▧ {project.images.length} screenshots</span>
                  </button>
                  <div className="project__body">
                    <div className="project__top"><h3 className="project__name">{project.name}<span className="project__year">{project.year}</span></h3>{project.award && <span className="project__award">♜ {project.award}</span>}</div>
                    <p className="project__tagline">{project.tagline}</p><p className="project__description">{project.description}</p>
                    <ul className="project__stack" aria-label={`${project.name} technology stack`}>{project.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul>
                    <div className="project__links">{project.links.map((link) => <a className="btn btn-ghost btn-sm" key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}<button type="button" className="project__gallery-btn" onClick={(event) => openGallery(project, event.currentTarget)}>View screenshots →</button></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="projects__more reveal"><span>More course projects, experiments, and earlier work live on GitHub.</span><a className="btn btn-ghost btn-sm" href="https://github.com/Jake-Yeo" target="_blank" rel="noopener noreferrer">github.com/Jake-Yeo ↗</a></div>
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
