
// FILE: /mnt/data/ai-ide/test/frontend/Sidebar.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../../src/components/Sidebar/Sidebar';

test('renders Sidebar with correct heading', () => {
  const { getByText } = render(<Sidebar />);
  const headingElement = getByText(/Project Navigation/i);
  expect(headingElement).toBeInTheDocument();
});
