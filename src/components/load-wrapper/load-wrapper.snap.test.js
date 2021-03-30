import React from 'react';
import {render} from '@testing-library/react';
import LoadWrapper from './load-wrapper';

it(`Should load screen render correctly`, () => {
  const isDataLoading = true;

  const {container} = render(<LoadWrapper isDataLoading={isDataLoading} />);

  expect(container).toMatchSnapshot();
});
