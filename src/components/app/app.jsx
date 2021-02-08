import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../pages/main/main';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFound from '../pages/not-found/not-found';
import {NOT_AUTHORIZED_USERNAME} from '../../const';

const App = (props) => {
  const {citiesCount, isAuthorized, userName} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main citiesCount={citiesCount} isAuthorized={isAuthorized} userName={userName} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites isAuthorized={isAuthorized} userName={userName} />
        </Route>
        <Route exact path="/offer/:id">
          <Room isAuthorized={isAuthorized} userName={userName} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  citiesCount: PropTypes.number.isRequired,
  isAuthorized: PropTypes.bool,
  userName: PropTypes.string,
};

App.defaultProps = {
  isAuthorized: false,
  userName: NOT_AUTHORIZED_USERNAME,
};

export default App;
