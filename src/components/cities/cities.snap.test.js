import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import Cities from './cities';

const mockStore = configureStore({});
const store = mockStore({
  OFFERS: {city: `Paris`}
});

it(`Should cities render correctly`, () => {
  const {container} = render(<Provider store={store}>
    <Cities />
  </Provider>);

  expect(container).toMatchSnapshot();
});
