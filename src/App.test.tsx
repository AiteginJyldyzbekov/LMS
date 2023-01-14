import React from 'react';
import App from './App';
import { render } from './test-utils';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);
    // expect(component.getByText(/Solid Academy/)).toBeInTheDocument();
  });
});
  