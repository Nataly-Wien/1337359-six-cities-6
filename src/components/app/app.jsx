import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import {Routes} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME}>
          <MainPage />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={Routes.ROOM} component={RoomPage} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
