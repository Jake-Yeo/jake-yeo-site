import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

const bannedPresentationPhrases = [
  'Hi, I’m Jake',
  'Where I’ve worked',
  'Selected work',
  'Let’s build something together',
  'On this page',
  ['By the', 'numbers'].join(' '),
  'Work I’m proudest of',
  'What went out the door',
  'What I built it with',
  'Things I learned',
  'milestone by milestone',
  'Frameworks & libraries',
  'Tools & platforms',
  'Front end',
  'Skip to content',
];

const expectReferencePhrasesAbsent = () => {
  const bodyText = document.body.textContent?.toLocaleLowerCase() || '';
  bannedPresentationPhrases.forEach((phrase) => {
    expect(bodyText).not.toContain(phrase.toLocaleLowerCase());
  });
};

describe('portfolio routes and interactions', () => {
  it('opens with Jake’s name, portrait-first composition, and direct hero copy', () => {
    const { container } = renderAt('/');
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Jake Yeo', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/i study computer science at ubc/i)).toBeInTheDocument();

    const heroInner = container.querySelector('.hero__inner');
    const heroVisual = container.querySelector('.hero__visual');
    const heroCopy = container.querySelector('.hero__copy');
    expect(heroInner && heroVisual && heroCopy).toBeTruthy();
    const heroChildren = Array.from(heroInner?.children || []);
    expect(heroChildren.indexOf(heroVisual as Element)).toBeLessThan(heroChildren.indexOf(heroCopy as Element));

    const actions = container.querySelector('.hero__actions');
    const status = container.querySelector('.hero__status');
    expect(status).toHaveTextContent(/^software developer$/i);
    expect(actions && status && actions.compareDocumentPosition(status) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(screen.getByRole('link', { name: /view experience/i })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: /browse projects/i })).toHaveAttribute('href', '#projects');
    expectReferencePhrasesAbsent();
  });

  it('uses a desktop rail, row-based work sections, and education after projects', () => {
    const { container } = renderAt('/');
    expect(container.querySelector('.site-rail')).toBeInTheDocument();
    const caseStudies = screen.getByLabelText(/experience case studies/i);
    const caseStudyLinks = within(caseStudies).getAllByRole('link');
    expect(caseStudyLinks).toHaveLength(2);
    expect(caseStudyLinks[0]).toHaveAttribute('href', '/experience/ubc-faculty-of-medicine');
    expect(caseStudyLinks[1]).toHaveAttribute('href', '/experience/invoke-media');
    expect(container.querySelectorAll('.experience__row')).toHaveLength(2);
    expect(container.querySelectorAll('.skills__band-row')).toHaveLength(3);
    expect(container.querySelectorAll('.project')).toHaveLength(5);
    expect(screen.getByRole('heading', { name: 'Application building blocks' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Infrastructure and workflow' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sum-Up Sundae', exact: true })).toBeInTheDocument();

    const projects = container.querySelector('#projects');
    const education = container.querySelector('#education');
    expect(projects && education && projects.compareDocumentPosition(education) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('renders a structurally distinct experience case study', () => {
    const { container } = renderAt('/experience/invoke-media');
    const heading = screen.getByRole('heading', { name: /web developer intern at invoke media/i, level: 1 });
    expect(heading).toHaveFocus();
    expect(screen.getByRole('link', { name: /all experience/i })).toHaveAttribute('href', '/#experience');

    const sectionNav = screen.getByRole('navigation', { name: /case study sections/i });
    const sectionLinks = within(sectionNav).getAllByRole('link');
    expect(sectionLinks.map((link) => link.textContent?.trim())).toEqual(['Core work', 'Progression', 'Takeaways']);
    expect(sectionLinks.map((link) => link.getAttribute('href'))).toEqual(['#story-work', '#story-progression', '#story-takeaways']);

    const workbench = container.querySelector('.story-workbench');
    expect(workbench?.querySelector('.story-narrative')).toBeInTheDocument();
    expect(workbench?.querySelector('.story-stack-panel')).toBeInTheDocument();
    expect(container.querySelector('.story-toc')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /core systems/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /supporting releases/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /the stack/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Client interfaces' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /how the work progressed/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /engineering takeaways/i })).toBeInTheDocument();
    expect(document.title).toBe('Web Developer Intern at Invoke Media — Jake Yeo');
    expectReferencePhrasesAbsent();
  });

  it('omits the standalone metric strip while retaining supported UBC scope facts', () => {
    renderAt('/experience/ubc-faculty-of-medicine');
    expect(screen.getByRole('heading', { name: /software developer intern at ubc faculty of medicine/i, level: 1 })).toBeInTheDocument();
    expect(screen.queryByText('353')).not.toBeInTheDocument();
    expect(screen.queryByText(/non-merge commits/i)).not.toBeInTheDocument();
    expect(screen.getByText(/20–50-page academic documents/i)).toBeInTheDocument();
    expect(screen.getByText(/three-developer team/i)).toBeInTheDocument();
    expectReferencePhrasesAbsent();
  });

  it('keeps every branded skill icon and uses the rectangular portrait asset', () => {
    const { container } = renderAt('/');
    const skillChips = container.querySelectorAll('#skills .skills__chip');
    expect(skillChips).toHaveLength(27);
    skillChips.forEach((chip) => {
      expect(chip.querySelector('.tech-logo')).toBeInTheDocument();
    });
    const portrait = container.querySelector('.hero__portrait');
    expect(portrait).toBeInTheDocument();
    expect(portrait).toHaveAttribute('src', '/pics/jakePhotoWithBg.JPG');
  });

  it('opens, traps focus within, navigates, and closes the project image viewer', async () => {
    renderAt('/');
    const opener = screen.getByRole('button', { name: /browse sum-up sundae images/i });
    fireEvent.click(opener);
    const dialog = screen.getByRole('dialog', { name: /sum-up sundae/i });
    const main = document.querySelector('main');
    expect(main).toHaveAttribute('inert');
    expect(main).toHaveAttribute('aria-hidden', 'true');
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true });
    expect(within(dialog).getByRole('button', { name: /show image 4/i })).toHaveFocus();
    expect(within(dialog).getByText('1 / 4')).toBeInTheDocument();
    fireEvent.click(within(dialog).getByRole('button', { name: /next image/i }));
    expect(within(dialog).getByText('2 / 4')).toBeInTheDocument();
    fireEvent.click(within(dialog).getByRole('button', { name: /close image viewer/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(main).not.toHaveAttribute('inert');
    await waitFor(() => expect(opener).toHaveFocus());
  });

  it('exposes both case studies in the mobile menu and supports skip navigation', () => {
    renderAt('/');
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const mobile = screen.getByRole('navigation', { name: /mobile navigation/i });
    expect(within(mobile).getByRole('link', { name: /ubc faculty of medicine/i })).toHaveAttribute('href', '/experience/ubc-faculty-of-medicine');
    expect(within(mobile).getByRole('link', { name: /^invoke media$/i })).toHaveAttribute('href', '/experience/invoke-media');
    fireEvent.click(screen.getByRole('link', { name: /skip to main content/i }));
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it('redirects the experience index to the home experience anchor', async () => {
    renderAt('/experience');
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
      expect(window.location.hash).toBe('#experience');
    });
  });

  it('renders rewritten unknown-route states', () => {
    renderAt('/not-a-route');
    expect(screen.getByRole('heading', { name: /nothing at this url/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go to the home page/i })).toHaveAttribute('href', '/');
    expect(screen.queryByText(/page not found/i)).not.toBeInTheDocument();
  });
});
