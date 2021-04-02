import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import Header from './header';
import {AuthorizationStatus, Types} from '../../const';

const history = createMemoryHistory();
const mockStore = configureStore({});
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {
      avatarUrl: `img/avatar.jpg`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    },
  },
});

it(`Should header render correctly`, () => {
  const {container} = render(<Provider store={store}>
    <Router history={history}>
      <Header page={Types.MAIN_PAGE} />
    </Router>
  </Provider>);

  expect(container).toMatchSnapshot();
});
