import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

describe('portfolio routes and accessibility semantics', () => {
  it('renders the portfolio introduction, experience summaries, and an explore CTA', () => {
    renderAt('/');

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /software developer working across web/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /ubc faculty of medicine/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore experience/i })).toHaveAttribute('href', '/experience');
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('renders an accessible experience listing with whole-item links', () => {
    renderAt('/experience');

    expect(screen.getByRole('heading', { name: /experience/i, level: 1 })).toBeInTheDocument();
    const experienceList = screen.getByRole('list', { name: /experience case studies/i });
    const experienceItems = within(experienceList).getAllByRole('listitem');
    expect(experienceItems).toHaveLength(2);
    expect(screen.getByRole('link', { name: /ubc faculty of medicine.*software developer intern/i })).toHaveAttribute(
      'href',
      '/experience/ubc-faculty-of-medicine',
    );
    expect(document.title).toBe('Experience | Jake Yeo');
  });

  it('renders an experience detail page, manages focus, and provides a portfolio return path', () => {
    renderAt('/experience/invoke-media');

    const heading = screen.getByRole('heading', { name: 'Invoke Media', level: 1 });
    expect(heading).toHaveFocus();
    expect(screen.getByRole('link', { name: /back to portfolio/i })).toHaveAttribute('href', '/#experience');
    expect(screen.getByText(/worked across frontend, backend, and aws infrastructure/i)).toBeInTheDocument();
    expect(screen.getByText(/visual media is not available/i)).toBeInTheDocument();
    expect(document.title).toBe('Invoke Media | Experience | Jake Yeo');
  });

  it('renders portfolio-native unknown-route states', () => {
    renderAt('/not-a-route');

    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /return to portfolio/i })).toHaveAttribute('href', '/');
    expect(document.title).toBe('Page not found | Jake Yeo');
  });

  it('distinguishes an unknown experience from a generic unknown route', () => {
    renderAt('/experience/not-approved');

    expect(screen.getByRole('heading', { name: /experience not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /return to portfolio/i })).toBeInTheDocument();
    expect(document.title).toBe('Experience not found | Jake Yeo');
  });

  it('lets keyboard users skip directly to main content', () => {
    renderAt('/experience');

    const skipLink = screen.getByRole('link', { name: /skip to main content/i });
    fireEvent.click(skipLink);
    expect(screen.getByRole('main')).toHaveFocus();
  });
});
