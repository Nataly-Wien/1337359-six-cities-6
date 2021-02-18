import React from 'react';
import ReactDOM from 'react-dom';
import hotels from './mocks/hotels';
import App from './components/app/app';

// const Setting = {
//   CITIES_COUNT: 5,
// };
ReactDOM.render(<App hotels={hotels} />, document.querySelector(`#root`));
