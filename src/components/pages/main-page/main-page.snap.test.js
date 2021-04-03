import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import thunk from 'redux-thunk';
import * as APIActions from '../../../store/api-actions';
import MainPage from './main-page';
import {AuthorizationStatus} from '../../../const';

const history = createMemoryHistory();

jest.mock(`../../../store/api-actions.js`);
APIActions.fetchHotels = () => (dispatch) => dispatch(jest.fn());

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({
  OFFERS: {
    city: `Paris`,
    sort: 0,
  },
  DATA: {
    hotels: [{
      id: 5,
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 12
        },
      },
      previewImage: `img/img.jpg`,
      images: [
        `img/img1.jpg`,
        `img/img2.jpg`,
        `img/img3.jpg`,
        `img/img4.jpg`,
        `img/img5.jpg`,
        `img/img6.jpg`,
      ],
      title: `Cityden Residences Museum Square`,
      description: `In the center of Paris, Citadines Saint-Germain-des-Prés Paris is a 10-minute walk from Notre-Dame Cathedral and 293 m from Saint-Michel Metro Station. It features a fitness room and free Wi-Fi access.`,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 16
      },
      isFavorite: true,
      isPremium: true,
      rating: 4.1,
      type: `apartment`,
      bedrooms: 2,
      maxAdults: 4,
      price: 210,
      goods: [
        `Air conditioning`,
        `Private Bathroom`,
        `Dishwasher`,
        `Flat - screen TV`,
        `Coffee machine`,
        `Free WiFi`,
      ],
      host: {
        id: 10,
        name: `Mick`,
        isPro: true,
        avatarUrl: `img/avatar.jpg`,
      },
    }],
    isLoadingError: false,
    isHotelsLoading: false,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {
      avatarUrl: `img/avatar.jpg`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    },
  },
});

it(`Should favorites page render correctly`, () => {
  const {container} = render(<Provider store={store}>
    <Router history={history}>
      <MainPage />
    </Router>
  </Provider>);

  expect(container).toMatchSnapshot();
});
