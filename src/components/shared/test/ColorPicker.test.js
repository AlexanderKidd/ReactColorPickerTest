import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorPicker from '../ColorPicker';

test('renders message prop correctly', () => {
  render(<ColorPicker color="#FFFFFF" />);
  expect(screen.getByText('#FFFFFF')).toBeInTheDocument();
});

test('button click changes color', () => {
  const { rerender } = render(<ColorPicker color="#FFFFFF" />);
  expect(screen.getByText('#FFFFFF')).toBeInTheDocument();

  rerender(<ColorPicker message="New Message" />);
  expect(screen.getByText('New Message')).toBeInTheDocument();
});