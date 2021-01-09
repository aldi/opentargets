import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/genes associated with lung carcinoma/i)).toBeInTheDocument();
});
