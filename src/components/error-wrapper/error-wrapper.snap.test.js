import React from 'react';
import {render} from '@testing-library/react';
import ErrorWrapper from './error-wrapper';

it(`Should errors render correctly`, () => {
  const isLoadingError = true;

  const {container} = render(<ErrorWrapper isLoadingError={isLoadingError} />);

  expect(container).toMatchSnapshot();
});
