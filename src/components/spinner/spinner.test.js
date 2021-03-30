import React from 'react';
import {render} from '@testing-library/react';
import Spinner from './spinner';

it(`Should spinner render correctly`, () => {
  const {getByText} = render(<Spinner />);
  const text = getByText(`Loading...`);
  expect(text).toBeInTheDocument();
});
