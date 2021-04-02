import React from 'react';
import {Provider} from 'react-redux';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import LoginForm from './login-form';

const mockStore = configureStore({});
const store = mockStore({
  USER: {isLoginError: false}
});

it(`Should login form render correctly`, () => {
  const signIn = () => { };
  const {container} = render(<Provider store={store}>
    <LoginForm signIn={signIn} />
  </Provider>);

  expect(container).toMatchSnapshot();
});
