import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render  } from '@testing-library/react';
import GridItem from '../components/GridItem';
import { BrowserRouter } from "react-router-dom";
import {product} from './test_utils';

test('renders content', () => {
  const component = render(
	<BrowserRouter>
		<GridItem product={product} />
	</BrowserRouter>
  );
  
  expect(component.container).toHaveTextContent(
    'Boieesen Art'
  );
});




