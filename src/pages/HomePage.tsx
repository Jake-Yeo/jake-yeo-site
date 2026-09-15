import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import { approvedExperiences } from '../experience';
import { portfolioProjects, skillGroups, type PortfolioProject } from '../portfolioData';

const ExternalArrow = () => <span aria-hidden="true">↗</span>;

const ProjectVisual = ({ project, priority }: { project: PortfolioProject; priority: boolean }) => {
  if (project.images?.length) {
    return (
      <div className={`project-gallery project-gallery-${Math.min(project.images.length, 3)}`}>
        {project.images.map((image, index) => (
          <img key={image.src} src={image.src} alt={image.alt} loading={priority && index === 0 ? 'eager' : 'lazy'} />
        ))}
      </div>
    );
  }

  return (
    <div className="project-art" aria-label={`${project.name} project preview`} role="img">
      <div className="project-art-window">
        <div className="project-art-bar"><i /><i /><i /></div>
        <div className="project-art-content">
          <span>{project.name}</span>
          <strong>{project.visualLabel}</strong>
          <div className="project-art-lines"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Jake Yeo | Software Developer';
    const hash = location.hash.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';
        window.scrollTo(0, Math.max(0, target.offsetTop - 80));
        window.requestAnimationFrame(() => { root.style.scrollBehavior = previousScrollBehavior; });
      }
      return;
    }
    if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
    document.querySelector<HTMLElement>('main h1')?.focus();
  }, [location.pathname, location.hash]);

  return (
    <div id="top" className="site-shell">
      <a className="skip-link" href="#main-content" onClick={() => document.getElementById('main-content')?.focus()}>
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="about" aria-labelledby="hero-title">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="hero-portrait-wrap" data-reveal>
            <div className="portrait-glow" aria-hidden="true" />
            <img className="hero-portrait" src="/pics/jake-portrait.jpg" alt="Jake Yeo" />
          </div>
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Hello, I&apos;m Jake.</p>
            <h1 id="hero-title" tabIndex={-1}>
              I build dependable<br />
              <span>digital products.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m a Vancouver-based computer science student and full-stack developer working across web,
              cloud, data, and product engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:jakeyeozh@gmail.com">Let&apos;s talk <ExternalArrow /></a>
              <a className="text-link" href="https://github.com/Jake-Yeo/" target="_blank" rel="noopener noreferrer">GitHub <ExternalArrow /></a>
              <a className="text-link" href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalArrow /></a>
            </div>
          </div>
          <p className="hero-scroll" aria-hidden="true">Scroll to explore <span>↓</span></p>
        </section>

        <section className="section experience" id="experience" aria-labelledby="experience-title">
          <div className="section-kicker" data-reveal>
            <span>01</span>
            <p>Experience</p>
          </div>
          <div className="section-heading" data-reveal>
            <h2 id="experience-title">Production work,<br /><em>from interface to infrastructure.</em></h2>
            <p>I build systems that stay clear for users and reliable behind the scenes.</p>
          </div>
          <div className="experience-list">
            {approvedExperiences.map((job, index) => (
              <article className="experience-card" key={job.company} data-reveal>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-company">
                  <p>{job.period}</p>
                  <h3>{job.company}</h3>
                  <span>{job.role}</span>
                </div>
                <div className="experience-copy">
                  <p>{job.summary}</p>
                  <ul>
                    {job.highlights.slice(0, 2).map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <ul className="tag-list" aria-label={`${job.company} technologies`}>
                    {job.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <Link className="button button-secondary experience-cta" to="/experience">Explore full experience <ExternalArrow /></Link>
        </section>

        <section className="section skills" id="skills" aria-labelledby="skills-title">
          <div className="section-kicker" data-reveal>
            <span>02</span>
            <p>Toolkit</p>
          </div>
          <div className="skills-layout">
            <div className="section-heading" data-reveal>
              <h2 id="skills-title">Tools for turning<br /><em>ideas into shipped work.</em></h2>
              <p>Practical experience across frontend, backend, cloud infrastructure, databases, and testing.</p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <article className="skill-group" key={group.label} data-reveal>
                  <div><span>0{index + 1}</span><h3>{group.label}</h3></div>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="projects" aria-labelledby="projects-title">
          <div className="section-kicker" data-reveal>
            <span>03</span>
            <p>Selected projects</p>
          </div>
          <div className="section-heading projects-heading" data-reveal>
            <h2 id="projects-title">Built with curiosity,<br /><em>finished with care.</em></h2>
            <p>A mix of independent products, team builds, hackathons, and earlier full-stack work.</p>
          </div>
          <div className="project-list">
            {portfolioProjects.map((project, index) => (
              <article className="project-card" key={project.name} data-reveal>
                <ProjectVisual project={project} priority={index === 0} />
                <div className="project-copy">
                  <div className="project-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.period}</span></div>
                  <p className="eyebrow">{project.context}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-contribution">{project.contribution}</p>
                  <ul className="tag-list" aria-label={`${project.name} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  {(project.demo || project.source) && (
                    <div className="project-links">
                      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live site <ExternalArrow /></a>}
                      {project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">Source <ExternalArrow /></a>}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" data-reveal>
        <p className="eyebrow">Have an opportunity or idea?</p>
        <h2>Let&apos;s build something<br /><em>worth using.</em></h2>
        <a className="footer-email" href="mailto:jakeyeozh@gmail.com">jakeyeozh@gmail.com <ExternalArrow /></a>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Jake Yeo</p>
          <div><a href="https://github.com/Jake-Yeo/" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://ca.linkedin.com/in/jake-yeo" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
