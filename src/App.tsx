import { useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import { getExperienceBySlug } from './experience';
import HomePage, { Footer } from './pages/HomePage';

const RouteEffects = ({ title }: { title: string }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
    document.querySelector<HTMLElement>('main h1')?.focus();
  }, [location.pathname, title]);

  return null;
};

const SectionHeading = ({ eyebrow, title, id, lede }: { eyebrow: string; title: string; id: string; lede?: string }) => (
  <header className="section-head">
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title" id={id}>{title}</h2>
    {lede && <p className="section-lede">{lede}</p>}
  </header>
);

const ExperienceDetailPage = () => {
  const experience = getExperienceBySlug(useParams().slug);
  if (!experience) return <UnknownRoutePage experienceRoute />;

  const sectionLinks = [
    { href: '#story-work', label: 'Core work' },
    { href: '#story-progression', label: 'Progression' },
    { href: '#story-takeaways', label: 'Takeaways' },
  ];

  return (
    <div className="story-page">
      <RouteEffects title={`${experience.role} at ${experience.company} — Jake Yeo`} />
      <a className="skip-link" href="#main" onClick={() => document.getElementById('main')?.focus()}>
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="story-hero container">
          <div className="story-hero__top">
            <Link className="story-back" to="/#experience">← All experience</Link>
            <a className="story-company" href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
              Company site ↗
            </a>
          </div>
          <div className="story-hero__intro">
            <p className="eyebrow">Case study</p>
            <h1 className="story-hero__title" tabIndex={-1}>{experience.role} at {experience.company}</h1>
            <p className="story-hero__blurb">{experience.summary}</p>
            <dl className="story-hero__facts">
              <div><dt>Dates</dt><dd>{experience.period}</dd></div>
              <div><dt>Location</dt><dd>{experience.location}</dd></div>
              <div><dt>Product</dt><dd>{experience.product}</dd></div>
            </dl>
            <div className="story-hero__outcomes">
              <p className="eyebrow">Outcomes and scope</p>
              <ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          </div>
        </section>

        <nav className="story-subnav" aria-label="Case study sections">
          <div className="container story-subnav__inner">
            {sectionLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </div>
        </nav>

        <section className="story-section container" id="story-work" aria-labelledby="work-title">
          <div className="story-workbench">
            <div className="story-narrative">
              <SectionHeading
                eyebrow="Role scope"
                title="Core systems"
                id="work-title"
                lede="The main product and infrastructure work I owned during this role."
              />
              <div className="story-features">
                {experience.features.map((feature, index) => (
                  <article className="story-feature card" key={feature.title}>
                    <span className="story-feature__index">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                    <ul>{feature.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul>
                  </article>
                ))}
              </div>

              <section className="story-deliveries" aria-labelledby="deliveries-title">
                <SectionHeading
                  eyebrow="Additional delivery"
                  title="Supporting releases"
                  id="deliveries-title"
                  lede="Product, reliability, and infrastructure work that accompanied the core systems above."
                />
                <ul className="story-delivery-list">
                  {experience.launches.map((launch) => (
                    <li key={launch.title}>
                      <span>{launch.category}</span>
                      <div><h3>{launch.title}</h3><p>{launch.description}</p></div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="story-stack-panel card" aria-labelledby="stack-title">
              <p className="eyebrow">Technical scope</p>
              <h2 id="stack-title">The stack</h2>
              <div className="story-stack">
                {experience.layers.map((layer) => (
                  <section className="story-layer" key={layer.name}>
                    <h3>{layer.name}</h3>
                    <p>{layer.description}</p>
                    <ul>{layer.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul>
                  </section>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="story-section container" id="story-progression" aria-labelledby="progression-title">
          <SectionHeading eyebrow="Chronology" title="How the work progressed" id="progression-title" />
          <ol className="story-timeline">
            {experience.milestones.map((milestone) => (
              <li key={milestone.title}>
                <span className="story-milestone__date">{milestone.when}</span>
                <div><h3>{milestone.title}</h3><p>{milestone.description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="story-section container" id="story-takeaways" aria-labelledby="takeaways-title">
          <SectionHeading eyebrow="Closing notes" title="Engineering takeaways" id="takeaways-title" />
          <div className="story-reflection card">
            {experience.lessons.map((lesson) => (
              <p key={lesson.title}><strong>{lesson.title}</strong> {lesson.description}</p>
            ))}
          </div>
          <div className="story-closing__actions">
            <Link className="btn btn-primary" to="/#projects">Browse projects</Link>
            <a className="btn btn-ghost" href="mailto:jakeyeozh@gmail.com">Email Jake</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const UnknownRoutePage = ({ experienceRoute = false }: { experienceRoute?: boolean }) => {
  const heading = experienceRoute ? 'No case study at this URL' : 'Nothing at this URL';
  const title = experienceRoute ? 'Case study unavailable — Jake Yeo' : 'Route unavailable — Jake Yeo';

  return (
    <div>
      <RouteEffects title={title} />
      <SiteHeader />
      <main id="main" className="not-found container">
        <div className="not-found__card card">
          <p className="eyebrow">Route missing</p>
          <h1 tabIndex={-1}>{heading}</h1>
          <p>The link may be outdated. The portfolio is still available from the home page.</p>
          <Link className="btn btn-primary" to="/">Go to the home page</Link>
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
        <Route path="*" element={<UnknownRoutePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
