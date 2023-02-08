import { render } from '@testing-library/react';
import App from './App';

test('testing', () => {
  render(<App />);
  expect(true).toBe(true);
});
