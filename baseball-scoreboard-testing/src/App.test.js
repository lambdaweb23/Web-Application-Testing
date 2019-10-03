import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

import Dashboard from './components/Dashboard';

it('renders without crashing', () => {
  render(<App />);
});

// test('Dashboard renders without crashing', () => {
//   render(<Dashboard />);
// });

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });

  it('strike exists and onclick', () => {
    let clicked = false;
    const { getByText } = render(<Dashboard strikeCount={() => clicked = true} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });

  it('ball exists and onclick', () => {
    let clicked = false;
    const { getByText } = render(<Dashboard ballCount={() => clicked = true} />);
    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton);
    expect(clicked).toBe(true);
  });

  it('foul exists and onclick', () => {
    let clicked = false;
    const { getByText } = render(<Dashboard foulCount={() => clicked = true} />);
    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);
    expect(clicked).toBe(true);
  });

  it('hit exists and onclick', () => {
    let clicked = false;
    const { getByText } = render(<Dashboard hitCount={() => clicked = true} />);
    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);
    expect(clicked).toBe(true);
  });
});
