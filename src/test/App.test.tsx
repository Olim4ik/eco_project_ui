import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';

test('renders home page hero section', () => {
  render(<Home />);
  const heroElement = screen.getByText(/Building a Sustainable Future/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders header with EcoProject branding', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const headerElement = screen.getByText(/EcoProject/i);
  expect(headerElement).toBeInTheDocument();
});