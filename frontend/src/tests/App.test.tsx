import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render  } from '@testing-library/react';
import App from '../components/App';


test('renders content', () => {

  const component = render(
    <App />
  );
  
  expect(component.container).toHaveTextContent(/My Website/);
});




