import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio introduction and projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /software developer working across web/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /building production software/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /ubc faculty of medicine/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /sum-up sundae/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /pullup/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projects, newest first/i })).toBeInTheDocument();
});
