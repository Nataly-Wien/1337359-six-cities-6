import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import LogoutButton from './logout-button';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.AUTH}
});

it(`Should logout button render correctly`, () => {
  const onLogoutClick = () => { };
  const {container} = render(<Provider store={store}>
    <LogoutButton onLogoutClick={onLogoutClick} />
  </Provider>);

  expect(container).toMatchSnapshot();
});
