import React from 'react';
import { screen, fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

describe('Test suite for Redux counter', () => {

  it('renders Redux Counter text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Redux counter/i);
    expect(textElement).toBeInTheDocument();
  });
  
  it('starting number should be 0', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/0/i);
    expect(textElement).toBeInTheDocument();
  });
  
  it('should increment by 1 on button press', () => {
    const { getByText } = render(<App />);
  
    const btn = getByText('+');
      fireEvent.click(btn);
  
      const updatedCount = parseInt(screen.getByTestId('count').textContent)
      expect(updatedCount).toBe(1);
    });
    
    it('should decrement by 1 on button press', () => {
      const { getByText } = render(<App />);
  
      const minusBtn = getByText('-');
      fireEvent.click(minusBtn);
  
      const updatedCount = parseInt(screen.getByTestId('count').textContent)
      expect(updatedCount).toBe(0);
  
  });
  
  it('should not go lower than 0', () => {
    const { getByText } = render(<App />);
  
    const minusBtn = getByText('-');
     fireEvent.click(minusBtn);
  
     const updatedCount = parseInt(screen.getByTestId('count').textContent)
     expect(updatedCount).toBe(0);
  });
})


