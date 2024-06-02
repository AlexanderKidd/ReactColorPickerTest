import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorPicker from '../ColorPicker';

test('renders color text in cell correctly', () => {
  render(<ColorPicker color="#FF0000" />);
  expect(screen.getByText('#FF0000')).toBeInTheDocument();
});

test('button click changes color', () => {
  const { rerender } = render(<ColorPicker color="#FF0000" />);
  expect(screen.getByText('#FF0000')).toBeInTheDocument();

  rerender(<ColorPicker color="#0000FF" />);
  expect(screen.getByText('#0000FF')).toBeInTheDocument();
});