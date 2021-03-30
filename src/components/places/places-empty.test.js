import React from 'react';
import {render} from '@testing-library/react';
import PlacesEmpty from './places-empty';

it(`Should empty hotels list render correctly`, () => {
  const city = `Paris`;
  const isLoadingError = false;

  const {getByText} = render(<PlacesEmpty city={city} isLoadingError={isLoadingError} />);
  const text = getByText(`We could not find any property available at the moment in ${city}`);

  expect(text).toBeInTheDocument();
});
