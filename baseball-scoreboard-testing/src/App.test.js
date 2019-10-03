import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

import Dashboard from './components/Dashboard';
import { ballCount, strikeCount, setBallCount, setStrikeCount } from './App';

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
});
