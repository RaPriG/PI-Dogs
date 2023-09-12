import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/home']}>
      <App />
    </MemoryRouter>
  );

  expect(getByText(/Welcome to my app!/i)).toBeInTheDocument();
});

test('renders new dog page', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/newdog']}>
      <App />
    </MemoryRouter>
  );

  expect(getByText(/Add a new dog/i)).toBeInTheDocument();
});

test('renders detail page', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/detail/1']}>
      <App />
    </MemoryRouter>
  );

  expect(getByText(/Dog Details/i)).toBeInTheDocument();
});



