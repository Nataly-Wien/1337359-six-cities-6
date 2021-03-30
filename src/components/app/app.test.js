import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../const';
import App from './app';

const mockStore = configureStore({});
const store = mockStore({
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
    isHotelsLoading: true,
    isLoadingError: false,
  },
  OFFERS: {
    city: `Paris`,
    sort: 0,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {
      avatarUrl: `img/avatar.jpg`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    }
  }
});

describe(`Should routing work correctly`, () => {
  it(`Render main page when navigate to url "/"`, () => {
    const history = createMemoryHistory();
    render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);
  });

  expect(screen.getByText(/place[s]? to stay in/)).toBeInTheDocument();
});
