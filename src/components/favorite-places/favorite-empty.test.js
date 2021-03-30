import React from 'react';
import {render} from '@testing-library/react';
import FavoritesEmpty from './favorite-empty';

it(`Should empty favorites list render correctly`, () => {
  const {getByText} = render(<FavoritesEmpty />);

  const status = getByText(`Nothing yet saved.`);
  const description = getByText(`Save properties to narrow down search or plan your future trips.`);

  expect(status).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
