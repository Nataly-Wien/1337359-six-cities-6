import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react';
import Room from './room';
import {AuthorizationStatus} from '../../const';

const mockStore = configureStore({});
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    user: {
      avatarUrl: `img/avatar.jpg`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    },
  },
  DATA: {
    currentHotel: {
      id: 3,
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 12
        },
      }, previewImage: `img/img1.jpg`,
      images: [
        `img/img2.jpg`,
      ],
      title: `Citadines Saint-Germain-des-Prés Paris`,
      description: `Along the beautiful Prinsengracht canal in the heart of Amsterdam, you will find Dikker en Thijs Fenice Hotel. Experience a luxurious ambiance and walk to almost all famous sights. The hotel is set in a 18th century warehouse.`,
      location: {
        latitude: 48.85661345345,
        longitude: 2.3514993453,
        zoom: 16
      },
      isFavorite: false,
      isPremium: false,
      rating: 3.3,
      type: `studio`,
      bedrooms: 1,
      maxAdults: 2,
      price: 65,
      goods: [
        `Air conditioning`,
        `Private Bathroom`,
        `Dishwasher`,
      ],
      host: {
        id: 7,
        name: `Nino`,
        isPro: false,
        avatarUrl: `img/av1.jpg`
      },
    },
    isCommentPosting: false,
    isPostCommentError: false,
  },
});

it(`Should current offer render correctly`, () => {

  const addReview = () => { };
  const nearPlacesHotels = [];
  const reviews = [];

  const {container} = render(<Provider store={store}>
    <Room nearPlacesHotels={nearPlacesHotels} reviews={reviews} addReview={addReview} />
  </Provider>);

  expect(container).toMatchSnapshot();
});
