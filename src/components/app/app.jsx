import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import {hotelTypesValidation} from '../../types-validation/';

const App = (props) => {
  const {hotels} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage hotels={hotels} />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage hotels={hotels.filter((item) => item.isFavorite)} />
        </Route>
        <Route exact path="/offer/:id" render={({match}) =>
          <RoomPage hotel={hotels.find((item) => item.id.toString() === match.params.id)} />} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
};

export default App;
