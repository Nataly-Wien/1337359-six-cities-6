import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {citiesCount} = props;

  return (
    <MainPage citiesCount={citiesCount} />
  );
};

App.propTypes = {
  citiesCount: PropTypes.number.isRequired,
};

export default App;
