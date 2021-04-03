import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render, screen} from '@testing-library/react';
import withAuth from './with-auth';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});

describe(`Should HOC withAuth work correctly`, () => {
  const BaseComponent = () => <h1>With authorization</h1>;
  const BaseComponentWrapped = withAuth(BaseComponent);

  it(`Should base component render when used with AuthorizationStatus is AUTH`, () => {
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

    render(<Provider store={store}>
      <BaseComponentWrapped />
    </Provider>);
    expect(screen.getByText(`With authorization`)).toBeInTheDocument();
  });

  it(`Shouldn't base component render when used with AuthorizationStatus is NO_AUTH`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: ``,
          id: 1,
          name: ``,
        },
      },
    });

    render(<Provider store={store}>
      <BaseComponentWrapped />
    </Provider>);
    expect(screen.queryByText(`With authorization`)).not.toBeInTheDocument();
  });
});
