import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
/Users/tarunrohithkodi/Desktop/ACS/IOTIQ/WEBSITE/home-page/src/App.test.js