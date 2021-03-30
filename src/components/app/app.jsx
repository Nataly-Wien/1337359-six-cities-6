import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {Routes, AuthorizationStatus} from '../../const';

const App = () => {
  return (
    <Switch>
      <Route exact path={Routes.HOME}>
        <MainPage />
      </Route>
      <PrivateRoute exact path={Routes.LOGIN} component={LoginPage} permittedAuthStatus={AuthorizationStatus.NO_AUTH}
        permittedPath={Routes.HOME} />
      <PrivateRoute exact path={Routes.FAVORITES} component={FavoritesPage} permittedAuthStatus={AuthorizationStatus.AUTH}
        permittedPath={Routes.LOGIN} />
      <Route exact path={Routes.ROOM} component={RoomPage} />
      <Route exact path={Routes.NOT_FOUND}>
        <NotFoundPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default App;
