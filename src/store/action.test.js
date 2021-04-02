import {ActionType, ActionCreator} from './action';
import {AuthorizationStatus, Routes} from '../const';

const hotel = {
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 12
    },
  },
  previewImage: `img/img1.jpg`,
  images: [
    `img/img2.jpg`,
    `img/img3.jpg`,
  ],
  title: `City Residences Museum Square`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  location: {
    latitude: 52.3909553943508,
    longitude: 4.8530966640619,
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
    `Dishwasher`,
    `Coffee machine`,
  ],
  host: {
    id: 10,
    name: `Mick`,
    isPro: false,
    avatarUrl: `img/avatar.jpg`
  },
};

const hotels = [
  {
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
  {
    id: 4,
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 12
      },
    }, previewImage: `img/img10.jpg`,
    images: [
      `img/img11.jpg`,
      `img/img12.jpg`,
      `img/img13.jpg`,
    ],
    title: `Mercure Hotel Brussels Centre Midi`,
    description: `The elegantly designed Mercure Hotel Brussels Center Midi is conveniently located in the heart of city, a 5-minute walk from the Brussels-South Train Station with Eurostar and Thalys terminals. A metro stop with direct connections to the city center is 300 m away. This hotel offers free access to wellness facilities, a garden with a terrace and free wireless internet.`,
    location: {
      latitude: 50.846456456,
      longitude: 4.351456456,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.1,
    type: `superior dDouble room`,
    bedrooms: 1,
    maxAdults: 3,
    price: 98,
    goods: [
      `Minibar`,
      `Free WiFi`,
      `Room service`,
    ],
    host: {
      id: 2,
      name: `Petra`,
      isPro: false,
      avatarUrl: `img/av2.jpg`
    },
  },
];

const reviews = [
  {
    id: 1,
    user: {
      id: 6,
      isPro: false,
      name: `Carlo`,
      avatarUrl: `img/av3.jpg`
    },
    rating: 5,
    comment: `Cannot fault the hotel for cleanliness and friendliness of staff, who attended to anything we asked. The hotel facilities were great and the breakfast was really good value and lots of choice.`,
    date: `2020-11-27T09:09:35.123Z`
  },
  {
    id: 2,
    user: {
      id: 11,
      isPro: false,
      name: `Liz`,
      avatarUrl: `img/av4.jpg`
    },
    rating: 3,
    comment: `Excellent location, just across the river from the Louvre and couple of minutes away from dozens of cafes and restaurants.`,
    date: `2021-02-23T11:17:25.810Z`
  }
];

describe(`Action Creators work correctly`, () => {
  it(`Action Creator for setting current city works correctly`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: `Amsterdam`,
    };

    const currentCity = `Amsterdam`;

    expect(ActionCreator.setCity(currentCity)).toEqual(expectedAction);
  });

  it(`Action Creator for setting current sort type works correctly`, () => {
    const expectedAction = {
      type: ActionType.SET_SORT,
      payload: 0,
    };

    expect(ActionCreator.setSort(0)).toEqual(expectedAction);
  });

  it(`Action Creator for setting flags before loading hotels works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REQUEST_HOTELS,
    };

    expect(ActionCreator.requestHotels()).toEqual(expectedAction);
  });

  it(`Action Creator for loading hotels works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOAD_HOTELS,
      payload: [
        {
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
        {
          id: 4,
          city: {
            name: `Brussels`,
            location: {
              latitude: 50.846557,
              longitude: 4.351697,
              zoom: 12
            },
          }, previewImage: `img/img10.jpg`,
          images: [
            `img/img11.jpg`,
            `img/img12.jpg`,
            `img/img13.jpg`,
          ],
          title: `Mercure Hotel Brussels Centre Midi`,
          description: `The elegantly designed Mercure Hotel Brussels Center Midi is conveniently located in the heart of city, a 5-minute walk from the Brussels-South Train Station with Eurostar and Thalys terminals. A metro stop with direct connections to the city center is 300 m away. This hotel offers free access to wellness facilities, a garden with a terrace and free wireless internet.`,
          location: {
            latitude: 50.846456456,
            longitude: 4.351456456,
            zoom: 16
          },
          isFavorite: true,
          isPremium: false,
          rating: 4.1,
          type: `superior dDouble room`,
          bedrooms: 1,
          maxAdults: 3,
          price: 98,
          goods: [
            `Minibar`,
            `Free WiFi`,
            `Room service`,
          ],
          host: {
            id: 2,
            name: `Petra`,
            isPro: false,
            avatarUrl: `img/av2.jpg`
          },
        },
      ],
    };

    expect(ActionCreator.loadHotels(hotels)).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after error loading hotels works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.FAILURE_LOAD_HOTELS,
    };

    expect(ActionCreator.failureLoadHotels()).toEqual(expectedAction);
  });

  it(`Action Creator for setting flags before loading current hotel works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REQUEST_CURRENT_HOTEL,
    };

    expect(ActionCreator.requestCurrentHotel()).toEqual(expectedAction);
  });

  it(`Action Creator for loading current hotel works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOAD_CURRENT_HOTEL,
      payload: {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 12
          },
        },
        previewImage: `img/img1.jpg`,
        images: [
          `img/img2.jpg`,
          `img/img3.jpg`,
        ],
        title: `City Residences Museum Square`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        location: {
          latitude: 52.3909553943508,
          longitude: 4.8530966640619,
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
          `Dishwasher`,
          `Coffee machine`,
        ],
        host: {
          id: 10,
          name: `Mick`,
          isPro: false,
          avatarUrl: `img/avatar.jpg`
        },
      }
    };

    expect(ActionCreator.loadCurrentHotel(hotel)).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after error loading current hotel works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.FAILURE_CURRENT_HOTEL,
    };

    expect(ActionCreator.failureCurrentHotel()).toEqual(expectedAction);
  });

  it(`Action Creator for setting flags before loading nearby hotels works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REQUEST_NEAR_HOTELS,
    };

    expect(ActionCreator.requestNearHotels()).toEqual(expectedAction);
  });

  it(`Action Creator for loading nearby hotels works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEAR_HOTELS,
      payload: [
        {
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
        {
          id: 4,
          city: {
            name: `Brussels`,
            location: {
              latitude: 50.846557,
              longitude: 4.351697,
              zoom: 12
            },
          }, previewImage: `img/img10.jpg`,
          images: [
            `img/img11.jpg`,
            `img/img12.jpg`,
            `img/img13.jpg`,
          ],
          title: `Mercure Hotel Brussels Centre Midi`,
          description: `The elegantly designed Mercure Hotel Brussels Center Midi is conveniently located in the heart of city, a 5-minute walk from the Brussels-South Train Station with Eurostar and Thalys terminals. A metro stop with direct connections to the city center is 300 m away. This hotel offers free access to wellness facilities, a garden with a terrace and free wireless internet.`,
          location: {
            latitude: 50.846456456,
            longitude: 4.351456456,
            zoom: 16
          },
          isFavorite: true,
          isPremium: false,
          rating: 4.1,
          type: `superior dDouble room`,
          bedrooms: 1,
          maxAdults: 3,
          price: 98,
          goods: [
            `Minibar`,
            `Free WiFi`,
            `Room service`,
          ],
          host: {
            id: 2,
            name: `Petra`,
            isPro: false,
            avatarUrl: `img/av2.jpg`
          },
        },
      ],
    };

    expect(ActionCreator.loadNearHotels(hotels)).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after error loading nearby hotels works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.FAILURE_NEAR_HOTELS,
    };

    expect(ActionCreator.failureNearHotels()).toEqual(expectedAction);
  });

  it(`Action Creator for setting flags before loading reviews works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REQUEST_COMMENTS,
    };

    expect(ActionCreator.requestComments()).toEqual(expectedAction);
  });

  it(`Action Creator for loading reviews works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [{
        id: 1,
        user: {
          id: 6,
          isPro: false,
          name: `Carlo`,
          avatarUrl: `img/av3.jpg`
        },
        rating: 5,
        comment: `Cannot fault the hotel for cleanliness and friendliness of staff, who attended to anything we asked. The hotel facilities were great and the breakfast was really good value and lots of choice.`,
        date: `2020-11-27T09:09:35.123Z`
      },
      {
        id: 2,
        user: {
          id: 11,
          isPro: false,
          name: `Liz`,
          avatarUrl: `img/av4.jpg`
        },
        rating: 3,
        comment: `Excellent location, just across the river from the Louvre and couple of minutes away from dozens of cafes and restaurants.`,
        date: `2021-02-23T11:17:25.810Z`
      }],
    };

    expect(ActionCreator.loadComments(reviews)).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after error loading reviews works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.FAILURE_COMMENTS,
    };

    expect(ActionCreator.failureComments()).toEqual(expectedAction);
  });

  it(`Action Creator for setting flags before posting reviews works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REQUEST_POSTING_COMMENT,
    };

    expect(ActionCreator.requestPostingComment()).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after posting reviews works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.POST_COMMENT,
    };

    expect(ActionCreator.postComment()).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after error posting reviews works correctly (without payload)`, () => {

    const expectedAction = {
      type: ActionType.FAILURE_POSTING_COMMENT,
    };

    expect(ActionCreator.failurePostingComment()).toEqual(expectedAction);
  });

  it(`Action Creator for setting flags before loading favorites works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REQUEST_FAVORITES,
    };

    expect(ActionCreator.requestFavorites()).toEqual(expectedAction);
  });

  it(`Action Creator for loading favorites works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [
        {
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
        {
          id: 4,
          city: {
            name: `Brussels`,
            location: {
              latitude: 50.846557,
              longitude: 4.351697,
              zoom: 12
            },
          }, previewImage: `img/img10.jpg`,
          images: [
            `img/img11.jpg`,
            `img/img12.jpg`,
            `img/img13.jpg`,
          ],
          title: `Mercure Hotel Brussels Centre Midi`,
          description: `The elegantly designed Mercure Hotel Brussels Center Midi is conveniently located in the heart of city, a 5-minute walk from the Brussels-South Train Station with Eurostar and Thalys terminals. A metro stop with direct connections to the city center is 300 m away. This hotel offers free access to wellness facilities, a garden with a terrace and free wireless internet.`,
          location: {
            latitude: 50.846456456,
            longitude: 4.351456456,
            zoom: 16
          },
          isFavorite: true,
          isPremium: false,
          rating: 4.1,
          type: `superior dDouble room`,
          bedrooms: 1,
          maxAdults: 3,
          price: 98,
          goods: [
            `Minibar`,
            `Free WiFi`,
            `Room service`,
          ],
          host: {
            id: 2,
            name: `Petra`,
            isPro: false,
            avatarUrl: `img/av2.jpg`
          },
        },
      ],
    };

    expect(ActionCreator.loadFavorites(hotels)).toEqual(expectedAction);
  });

  it(`Action Creator for resetting flags after error loading favorites works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.FAILURE_FAVORITES,
    };

    expect(ActionCreator.failureFavorites()).toEqual(expectedAction);
  });

  it(`Action Creator for replacing data after receiving data`, () => {
    const expectedAction = {
      type: ActionType.REPLACE_HOTEL,
      payload: {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 12
          },
        },
        previewImage: `img/img1.jpg`,
        images: [
          `img/img2.jpg`,
          `img/img3.jpg`,
        ],
        title: `City Residences Museum Square`,
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        location: {
          latitude: 52.3909553943508,
          longitude: 4.8530966640619,
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
          `Dishwasher`,
          `Coffee machine`,
        ],
        host: {
          id: 10,
          name: `Mick`,
          isPro: false,
          avatarUrl: `img/avatar.jpg`
        },
      },
    };

    expect(ActionCreator.replaceHotel(hotel)).toEqual(expectedAction);
  });

  it(`Action Creator for setting authorization status works correctly`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH)).toEqual(expectedAction);
  });

  it(`Action Creator for setting current user data works correctly`, () => {
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: {
        login: `Oliver.conner@gmail.com`,
        password: `12345678`,
      },
    };

    const user = {
      login: `Oliver.conner@gmail.com`,
      password: `12345678`,
    };

    expect(ActionCreator.setUser(user)).toEqual(expectedAction);
  });

  it(`Action Creator for setting login error status works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOGIN_FAILURE,
    };

    expect(ActionCreator.loginFailure()).toEqual(expectedAction);
  });

  it(`Action Creator for resetting login error status works correctly`, () => {
    const expectedAction = {
      type: ActionType.RESET_LOGIN_ERROR,
    };

    expect(ActionCreator.resetLoginError()).toEqual(expectedAction);
  });

  it(`Action Creator for logout works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(ActionCreator.logout()).toEqual(expectedAction);
  });

  it(`Action Creator for redirecting works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: Routes.LOGIN,
    };

    expect(ActionCreator.redirectToRoute(Routes.LOGIN)).toEqual(expectedAction);
  });

  it(`Action Creator for "go back" in history works correctly (without payload)`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_BACK,
    };

    expect(ActionCreator.redirectToBack()).toEqual(expectedAction);
  });
});
