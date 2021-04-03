import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import PrivateRoute from './private-route';
import Error from '../error/error';
import {AuthorizationStatus, Routes} from '../../const';

describe(`Should PrivateRouter work correctly`, () => {
  const mockStore = configureStore({});

  it(`Should component for public route render correctly with "NO_AUTH" status`, () => {
    const history = createMemoryHistory();
    history.push(`/private`);

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.NO_AUTH}
    });

    render(<Provider store={store}>
      <Router history={history}>
        <Route exact path={Routes.LOGIN}><h1>Public Route. Login page</h1></Route>
        <PrivateRoute exact path="/private" component={<h1>Private route. Favorites Page</h1>} permittedAuthStatus={AuthorizationStatus.AUTH}
          permittedPath={Routes.LOGIN} />
      </Router>
    </Provider>);

    expect(screen.getByText(`Public Route. Login page`)).toBeInTheDocument();
    expect(screen.queryByText(`Private route. Favorites Page`)).not.toBeInTheDocument();
  });

  it(`Should component for private route render correctly with "AUTH" status`, () => {
    const history = createMemoryHistory();
    history.push(`/private`);

    const store = mockStore({
      USER: {authorizationStatus: AuthorizationStatus.AUTH}
    });

    render(<Provider store={store}>
      <Router history={history}>
        <Route exact path={Routes.LOGIN}><h1>Public Route. Login page</h1></Route>
        <PrivateRoute exact path="/private" component={Error} permittedAuthStatus={AuthorizationStatus.AUTH}
          permittedPath={Routes.LOGIN} />
      </Router>
    </Provider>);

    expect(screen.getByText(`Data loading error`)).toBeInTheDocument();
    expect(screen.queryByText(`Public Route. Login page`)).not.toBeInTheDocument();
  });
});
