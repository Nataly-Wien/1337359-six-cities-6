import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CITIES_COUNT: 5,
};

ReactDOM.render(<App citiesCount={Setting.CITIES_COUNT} isAuthorized={Setting.IS_AUTHORIZED}
  userName={Setting.USERNAME} />, document.querySelector(`#root`));
