import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

test('renders Redux Counter text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Redux counter/i);
  expect(textElement).toBeInTheDocument();
});

