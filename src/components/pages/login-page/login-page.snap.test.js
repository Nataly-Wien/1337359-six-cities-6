import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import thunk from 'redux-thunk';
import * as APIActions from '../../../store/api-actions';
import LoginPage from './login-page';
import {AuthorizationStatus} from '../../../const';

const history = createMemoryHistory();

jest.mock(`../../../store/api-actions.js`);
APIActions.login = () => (dispatch) => dispatch(jest.fn());

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({
  DATA: {isLoadingError: false},
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {
      avatarUrl: `img/avatar.jpg`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    },
    isLoginError: false,
  },
});

it(`Should Favorites page render correctly`, () => {
  const {container} = render(<Provider store={store}>
    <Router history={history}>
      <LoginPage />
    </Router>
  </Provider>);

  expect(container).toMatchSnapshot();
});
