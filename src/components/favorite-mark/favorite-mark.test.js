import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import FavoriteMark from './favorite-mark';
import {Types} from '../../const';

const mockStore = configureStore({});

it(`Should favorite mark render correctly`, () => {
  const isFavorite = true;
  const setFavorite = () => { };

  const container = render(<Provider store={mockStore({})}>
    <FavoriteMark isFavorite={isFavorite} type={Types.CARD} setFavorite={setFavorite} />
  </Provider>);

  expect(container).toMatchSnapshot();
});
