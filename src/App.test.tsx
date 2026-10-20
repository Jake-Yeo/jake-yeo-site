import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

describe('portfolio routes and interactions', () => {
  it('renders Jake’s landing page, two jobs, projects, and safe external links', () => {
    renderAt('/');
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /skip to content/i })).toBeInTheDocument();
    expect(screen.getByText(/^Hi, I’m Jake\.$/)).toBeInTheDocument();
    expect(screen.getByText(/eight-month full-stack internship/i)).toBeInTheDocument();
    expect(screen.getByText(/four-month internship/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /sum-up sundae/i })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /github/i })[0]).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('renders the new identity-led hero, rail navigation, skill icons, and portrait', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { name: 'Jake Yeo', level: 1 })).toBeInTheDocument();
    expect(document.querySelector('.site-rail')).toBeInTheDocument();
    const skillChips = document.querySelectorAll('#skills .skills__chip');
    expect(skillChips).toHaveLength(27);
    skillChips.forEach((chip) => {
      expect(chip.querySelector('.tech-logo')).toBeInTheDocument();
    });
    expect(document.querySelector('.hero__portrait-frame')).toBeInTheDocument();
    const portrait = document.querySelector('.hero__portrait');
    expect(portrait).toBeInTheDocument();
    expect(portrait).toHaveAttribute('src', '/pics/jakePhotoWithBg.JPG');
  });

  it('offers exactly two detailed jobs in the experience rail', () => {
    renderAt('/');
    const menu = screen.getByLabelText(/experience pages/i);
    const links = within(menu).getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/experience/ubc-faculty-of-medicine');
    expect(links[1]).toHaveAttribute('href', '/experience/invoke-media');
  });

  it('labels the top hero status as software developer', () => {
    renderAt('/');
    const heroStatus = document.querySelector('.hero__status');
    expect(heroStatus).toHaveTextContent(/^software developer$/i);
    expect(heroStatus).not.toHaveTextContent(/vancouver|full-stack/i);
  });

  it('renders the four-month Invoke detail page with all case-study sections', () => {
    renderAt('/experience/invoke-media');
    const heading = screen.getByRole('heading', { name: /four months at invoke media/i, level: 1 });
    expect(heading).toHaveFocus();
    expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/#experience');
    expect(screen.getByRole('heading', { name: /work i’m proudest of/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what went out the door/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /things i learned/i })).toBeInTheDocument();
    expect(document.title).toBe('Four months at Invoke Media — Jake Yeo');
  });

  it('keeps UBC scope facts in prose without a by-the-numbers strip', () => {
    renderAt('/experience/ubc-faculty-of-medicine');
    expect(screen.getByRole('heading', { name: /eight months at ubc faculty of medicine/i, level: 1 })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /by the numbers/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /by the numbers/i })).not.toBeInTheDocument();
    expect(document.querySelector('#story-numbers')).not.toBeInTheDocument();
    expect(screen.queryByText('353')).not.toBeInTheDocument();
    expect(screen.queryByText(/non-merge commits/i)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /configurable document builder/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /pdf and docx generation/i })).toBeInTheDocument();
  });

  it('opens, traps focus within, navigates, and closes a project screenshot gallery', async () => {
    renderAt('/');
    const opener = screen.getByRole('button', { name: /open sum-up sundae screenshots/i });
    fireEvent.click(opener);
    const dialog = screen.getByRole('dialog', { name: /sum-up sundae/i });
    const main = document.querySelector('main');
    expect(main).toHaveAttribute('inert');
    expect(main).toHaveAttribute('aria-hidden', 'true');
    fireEvent.keyDown(dialog, { key: 'Tab', shiftKey: true });
    expect(within(dialog).getByRole('button', { name: /show screenshot 4/i })).toHaveFocus();
    expect(within(dialog).getByText('1 / 4')).toBeInTheDocument();
    fireEvent.click(within(dialog).getByRole('button', { name: /next screenshot/i }));
    expect(within(dialog).getByText('2 / 4')).toBeInTheDocument();
    fireEvent.click(within(dialog).getByRole('button', { name: /close screenshots/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(main).not.toHaveAttribute('inert');
    await waitFor(() => expect(opener).toHaveFocus());
  });

  it('exposes both job links in the mobile menu and supports skip navigation', () => {
    renderAt('/');
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const mobile = screen.getByRole('navigation', { name: /mobile navigation/i });
    expect(within(mobile).getByRole('link', { name: /eight months at ubc/i })).toBeInTheDocument();
    expect(within(mobile).getByRole('link', { name: /four months at invoke/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: /skip to content/i }));
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it('renders portfolio-native unknown-route states', () => {
    renderAt('/not-a-route');
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /return to portfolio/i })).toHaveAttribute('href', '/');
  });
});
