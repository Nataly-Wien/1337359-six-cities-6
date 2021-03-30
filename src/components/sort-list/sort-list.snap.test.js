import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import SortList from './sort-list';

const mockStore = configureStore({});
const store = mockStore({
  OFFERS: {sort: 0}
});

it(`Should sorts render correctly`, () => {
  const {container} = render(<Provider store={store}>
    <SortList />
  </Provider>);

  expect(container).toMatchSnapshot();
});
