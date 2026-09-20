import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { approvedExperiences, getExperienceBySlug } from './experience';
import HomePage from './pages/HomePage';

const SiteHeader = () => (
  <header className="site-header">
    <Link className="wordmark" to="/#top" aria-label="Jake Yeo, back to top">Jake Yeo</Link>
    <nav aria-label="Primary navigation">
      <Link to="/#about">about</Link>
      <Link to="/#experience">experience</Link>
      <Link to="/#projects">projects</Link>
      <Link to="/#contact">contact</Link>
    </nav>
  </header>
);

const RouteEffects = ({ title }: { title: string }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
    const heading = document.querySelector<HTMLElement>('main h1');
    heading?.focus();
  }, [location.pathname, title]);

  return null;
};

const SkipLink = () => (
  <a className="skip-link" href="#main-content" onClick={() => document.getElementById('main-content')?.focus()}>
    Skip to main content
  </a>
);

const ExperienceMeta = ({ period, product }: { period: string; product: string }) => (
  <div className="experience-meta"><span>{period}</span><span>{product}</span></div>
);

const ExperienceListPage = () => (
  <div className="site-shell">
    <RouteEffects title="Experience | Jake Yeo" />
    <SkipLink />
    <SiteHeader />
    <main id="main-content" tabIndex={-1} className="route-main">
      <p className="eyebrow">Experience</p>
      <h1 tabIndex={-1}>Experience</h1>
      <p className="route-intro">Production software experience across web, cloud, and data.</p>
      {approvedExperiences.length ? (
        <ul className="experience-route-list" aria-label="Experience case studies">
          {approvedExperiences.map((experience) => (
            <li className="experience-route-card" key={experience.slug}>
              <Link className="experience-card-link" to={`/experience/${experience.slug}`} aria-label={`${experience.company}, ${experience.role}`}>
                <ExperienceMeta period={experience.period} product={experience.product} />
                <h2>{experience.company}</h2>
                <p className="experience-role">{experience.role}</p>
                <p>{experience.summary}</p>
                <span className="card-action" aria-hidden="true">Read experience ↗</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : <p className="empty-state">Experience details are not available right now.</p>}
    </main>
  </div>
);

const ExperienceDetailPage = () => {
  const experience = getExperienceBySlug(useParams().slug);
  if (!experience) return <UnknownRoutePage isExperienceRoute />;

  return (
    <div className="site-shell">
      <RouteEffects title={`${experience.company} | Experience | Jake Yeo`} />
      <SkipLink />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="route-main">
        <Link className="back-link" to="/#experience">← Back to portfolio</Link>
        <article className="experience-detail-page">
          <ExperienceMeta period={experience.period} product={experience.product} />
          <p className="eyebrow">Experience</p>
          <h1 tabIndex={-1}>{experience.company}</h1>
          <p className="experience-role">{experience.role}</p>
          <p className="detail-summary">{experience.summary}</p>
          {experience.media ? (
            <img className="experience-media" src={experience.media.src} alt={experience.media.alt} />
          ) : <p className="optional-media-state">Visual media is not available for this experience.</p>}
          <section aria-labelledby="highlights-title">
            <h2 id="highlights-title">Highlights</h2>
            <ul className="experience-highlights">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </section>
          <section aria-labelledby="technologies-title">
            <h2 id="technologies-title">Technologies</h2>
            <ul className="tech-list" aria-label={`${experience.company} technologies`}>
              {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
};

const UnknownRoutePage = ({ isExperienceRoute = false }: { isExperienceRoute?: boolean }) => (
  <div className="site-shell">
    <RouteEffects title={isExperienceRoute ? 'Experience not found | Jake Yeo' : 'Page not found | Jake Yeo'} />
    <SkipLink />
    <SiteHeader />
    <main id="main-content" tabIndex={-1} className="route-main route-not-found">
      <p className="eyebrow">404</p>
      <h1 tabIndex={-1}>{isExperienceRoute ? 'Experience not found' : 'Page not found'}</h1>
      <p>{isExperienceRoute ? 'This experience page is not available.' : 'This page is not available.'}</p>
      <Link className="back-link" to="/">Return to portfolio</Link>
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperienceListPage />} />
        <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
        <Route path="*" element={<UnknownRoutePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
