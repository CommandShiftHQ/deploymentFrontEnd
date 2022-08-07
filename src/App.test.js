import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/This is my deployment demo!/i);
  expect(titleElement).toBeInTheDocument();
});
