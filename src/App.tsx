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

const colors = ['purple', 'turquoise', 'carmine', 'mustard', 'spring'] as const;

const SectionHeading = ({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) => (
  <header className="section-head"><p className="eyebrow">{eyebrow}</p><h2 className="section-title" id={id}>{title}</h2></header>
);

const ExperienceDetailPage = () => {
  const experience = getExperienceBySlug(useParams().slug);
  if (!experience) return <UnknownRoutePage experienceRoute />;
  const toc = [
    ['story-numbers', 'By the numbers'], ['story-features', 'Work I’m proudest of'], ['story-shipped', 'What went out the door'],
    ['story-stack', 'Tech stack'], ['story-timeline', 'Timeline'], ['story-lessons', 'Things I learned'],
  ];

  return (
    <div className="story-page">
      <RouteEffects title={`${experience.duration} at ${experience.company} — Jake Yeo`} />
      <a className="skip-link" href="#main" onClick={() => document.getElementById('main')?.focus()}>Skip to content</a><SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="story-hero container">
          <div className="story-hero__top"><Link className="story-back" to="/#experience">‹ Back to home</Link><a className="story-company" href={experience.companyUrl} target="_blank" rel="noopener noreferrer">{experience.company} ↗</a></div>
          <div className="story-hero__grid">
            <div className="story-hero__copy">
              <p className="eyebrow">{experience.period}</p>
              <h1 className="story-hero__title" tabIndex={-1}>{experience.duration} at <span className="gradient-text">{experience.company}</span></h1>
              <p className="story-hero__blurb">{experience.summary}</p>
              <div className="story-hero__meta"><span>{experience.role}</span><span>·</span><span>{experience.location}</span><span>·</span><span>{experience.product}</span></div>
              <ul className="story-tags">{experience.technologies.map((technology, index) => <li className={`story-tag story-tag--${(index % 5) + 1}`} key={technology}>{technology}</li>)}</ul>
            </div>
            <aside className="story-toc card"><div className="story-toc__head"><span className="nav__logo-mark" aria-hidden="true">JY</span><p className="eyebrow">On this page</p></div><ol>{toc.map(([href, label], index) => <li key={href}><a className="story-toc__link" href={`#${href}`}><span className="story-toc__num">{String(index + 1).padStart(2, '0')}</span><span>{label}</span><span>→</span></a></li>)}</ol></aside>
          </div>
        </section>

        <section className="story-section container" id="story-numbers"><SectionHeading eyebrow="By the numbers" title={`What ${experience.duration.toLowerCase()} adds up to`} id="numbers-title" /><div className="story-stats">{experience.stats.map((stat, index) => <article className={`story-stat card accent-${colors[index % colors.length]}`} key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p></article>)}</div></section>

        <section className="story-section container" id="story-features"><SectionHeading eyebrow="The big ones" title="Work I’m proudest of" id="features-title" /><div className="story-features">{experience.features.map((feature, index) => <article className={`story-feature card accent-${colors[index % colors.length]}`} key={feature.title}><div><h3>{feature.title}</h3><p>{feature.text}</p><ul>{feature.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul></div><div className="story-feature__index">0{index + 1}</div></article>)}</div></section>

        <section className="story-section container" id="story-shipped"><SectionHeading eyebrow="Shipped" title="What went out the door" id="shipped-title" /><div className="story-launches">{experience.launches.map((launch, index) => <article className={`story-launch card accent-${colors[index % colors.length]}`} key={launch.title}><span>{launch.category}</span><h3>{launch.title}</h3><p>{launch.description}</p></article>)}</div></section>

        <section className="story-section container" id="story-stack"><SectionHeading eyebrow="Tech stack" title="What I built it with" id="stack-title" /><div className="story-stack">{experience.layers.map((layer, index) => <article className={`story-layer card accent-${colors[index % colors.length]}`} key={layer.name}><div><span>0{index + 1}</span><h3>{layer.name}</h3><p>{layer.description}</p></div><ul>{layer.technologies.map((technology) => <li className="chip" key={technology}>{technology}</li>)}</ul></article>)}</div></section>

        <section className="story-section container" id="story-timeline"><SectionHeading eyebrow="Timeline" title={`${experience.duration}, milestone by milestone`} id="timeline-title" /><ol className="story-timeline">{experience.milestones.map((milestone, index) => <li className={`story-milestone accent-${colors[index % colors.length]}`} key={milestone.title}><span>{milestone.when}</span><h3>{milestone.title}</h3><p>{milestone.description}</p></li>)}</ol></section>

        <section className="story-section container" id="story-lessons"><SectionHeading eyebrow="Reflection" title="Things I learned" id="lessons-title" /><div className="story-lessons">{experience.lessons.map((lesson, index) => <article className="story-lesson card" key={lesson.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{lesson.title}</h3><p>{lesson.description}</p></article>)}</div></section>

        <section className="story-closing container"><div className="story-closing__actions"><Link className="btn btn-primary" to="/#projects">See my projects</Link><a className="btn btn-ghost" href="mailto:jakeyeozh@gmail.com">Get in touch</a></div></section>
      </main>
      <Footer />
    </div>
  );
};

const UnknownRoutePage = ({ experienceRoute = false }: { experienceRoute?: boolean }) => (
  <div><RouteEffects title={experienceRoute ? 'Experience not found — Jake Yeo' : 'Page not found — Jake Yeo'} /><SiteHeader /><main id="main" className="not-found container"><div className="not-found__card card"><p className="eyebrow">404</p><h1 tabIndex={-1}>{experienceRoute ? 'Experience not found' : 'Page not found'}</h1><p>{experienceRoute ? 'This experience page is not available.' : 'This page is not available.'}</p><Link className="btn btn-primary" to="/">Return to portfolio</Link></div></main></div>
);

function App() {
  return <BrowserRouter><Routes><Route path="/" element={<HomePage />} /><Route path="/experience" element={<Navigate to="/#experience" replace />} /><Route path="/experience/:slug" element={<ExperienceDetailPage />} /><Route path="*" element={<UnknownRoutePage />} /></Routes></BrowserRouter>;
}

export default App;
