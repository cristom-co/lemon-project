import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

test('Nav renders logo with alt text and navigation links', () => {
  render(<BrowserRouter><Nav /></BrowserRouter>);
  const logo = screen.getByAltText(/Little Lemon Logo/i);
  expect(logo).toBeInTheDocument();

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  expect(homeLink.closest('a')).toHaveAttribute('href', '/');
  expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
});
