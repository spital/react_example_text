import React from 'react';
import { act } from 'react';
import { it } from 'vitest';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  await act(async () => {
    root.render(<App />);
  });
  await act(async () => {
    root.unmount();
  });
});
