import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import {hotelTypesValidation, reviewTypesValidation} from '../../types-validation/';
import {Routes} from '../../const';

const App = (props) => {
  const {hotels, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.HOME}>
          <MainPage hotels={hotels} />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesPage hotels={hotels.filter((item) => item.isFavorite)} />
        </Route>
        <Route exact path={Routes.ROOM} render={({match}) =>
          <RoomPage hotel={hotels.find((item) => item.id.toString() === match.params.id)} hotels={hotels} reviews={reviews} />} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  reviews: PropTypes.arrayOf(reviewTypesValidation),
};

export default App;
