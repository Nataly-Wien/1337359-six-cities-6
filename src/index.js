import React from 'react';
import ReactDOM from 'react-dom';
import hotels from './mocks/hotels';
import reviews from './mocks/reviews';
import App from './components/app/app';

// const Setting = {
//   CITIES_COUNT: 5,
// };
ReactDOM.render(<App hotels={hotels} reviews={reviews} />, document.querySelector(`#root`));
