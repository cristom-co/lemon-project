import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

test('Nav renders logo with alt text and navigation links', () => {
  render(<Nav />);
  const logo = screen.getByAltText(/Little Lemon Logo/i);
  expect(logo).toBeInTheDocument();

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  expect(homeLink.closest('a')).toHaveAttribute('href', '#home');
  expect(aboutLink.closest('a')).toHaveAttribute('href', '#about');
});
