import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {data} from './data';
import {ActionType, ActionCreator} from '../action';
import {
  fetchHotels, fetchHotel, fetchNear, fetchComments, postComment, fetchFavorites, postFavorite
} from '../api-actions';
import {Routes, Url} from '../../const';
import {adaptHotelToClient, adaptCommentToClient} from '../../common';

const api = createAPI(() => { });

describe(`Data reducers work correctly`, () => {

  it(`Reducer with empty params  returns initial state`, () => {
    expect(data(undefined, {})).toEqual({
      hotels: [],
      currentHotel: {},
      nearHotels: [],
      comments: [],
      favorites: [],
      isHotelsLoading: false,
      isCurrentLoading: false,
      isNearLoading: false,
      isCommentsLoading: false,
      isCommentPosting: false,
      isFavoritesLoading: false,
      isLoadingError: false,
      isPostCommentError: false,
    });
  });


  it(`Reducer sets flags for hotels loading correctly`, () => {
    const state = {
      hotels: [],
      isHotelsLoading: false,
      isLoadingError: true,
    };

    expect(data(state, ActionCreator.requestHotels())).toEqual({
      hotels: [],
      isHotelsLoading: true,
      isLoadingError: false,
    });

    expect(data(state, {type: ActionType.REQUEST_HOTELS})).toEqual({
      hotels: [],
      isHotelsLoading: true,
      isLoadingError: false,
    });
  });

  it(`Reducer sets received hotels correctly`, () => {
    const state = {
      hotels: [],
      isHotelsLoading: true,
      isLoadingError: false,
    };

    const receivedHotels = [
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

    expect(data(state, ActionCreator.loadHotels(receivedHotels))).toEqual({
      hotels: receivedHotels,
      isHotelsLoading: false,
      isLoadingError: false,
    });

    expect(data(state, {
      type: ActionType.LOAD_HOTELS,
      payload: receivedHotels,
    })).toEqual({
      hotels: receivedHotels,
      isHotelsLoading: false,
      isLoadingError: false,
    });
  });


  it(`Reducer sets hotels failure flags correctly`, () => {
    const state = {
      hotels: [],
      isHotelsLoading: true,
      isLoadingError: false,
    };

    expect(data(state, ActionCreator.failureLoadHotels())).toEqual({
      hotels: [],
      isHotelsLoading: false,
      isLoadingError: true,
    });

    expect(data(state, {type: ActionType.FAILURE_LOAD_HOTELS})).toEqual({
      hotels: [],
      isHotelsLoading: false,
      isLoadingError: true,
    });
  });


  it(`Reducer sets flags for current hotel loading correctly`, () => {
    const state = {
      currentHotel: {},
      isCurrentLoading: false,
      isLoadingError: true,
    };

    expect(data(state, ActionCreator.requestCurrentHotel())).toEqual({
      currentHotel: {},
      isCurrentLoading: true,
      isLoadingError: false,
    });

    expect(data(state, {type: ActionType.REQUEST_CURRENT_HOTEL})).toEqual({
      currentHotel: {},
      isCurrentLoading: true,
      isLoadingError: false,
    });
  });


  it(`Reducer sets current hotel failure flags correctly`, () => {
    const state = {
      currentHotel: {},
      isCurrentLoading: true,
      isLoadingError: false,
    };

    expect(data(state, ActionCreator.failureCurrentHotel())).toEqual({
      currentHotel: {},
      isCurrentLoading: false,
      isLoadingError: true,
    });

    expect(data(state, {type: ActionType.FAILURE_CURRENT_HOTEL})).toEqual({
      currentHotel: {},
      isCurrentLoading: false,
      isLoadingError: true,
    });
  });

  it(`Reducer sets flags for nearby hotels loading correctly`, () => {
    const state = {
      nearHotels: [],
      isNearLoading: false,
      isLoadingError: false,
    };

    expect(data(state, ActionCreator.requestNearHotels())).toEqual({
      nearHotels: [],
      isNearLoading: true,
      isLoadingError: false,
    });

    expect(data(state, {type: ActionType.REQUEST_NEAR_HOTELS})).toEqual({
      nearHotels: [],
      isNearLoading: true,
      isLoadingError: false,
    });
  });


  it(`Reducer sets nearby hotels failure flags correctly`, () => {
    const state = {
      nearHotels: [],
      isNearLoading: true,
      isLoadingError: false,
    };

    expect(data(state, ActionCreator.failureNearHotels())).toEqual({
      nearHotels: [],
      isNearLoading: false,
      isLoadingError: false,
    });

    expect(data(state, {type: ActionType.FAILURE_NEAR_HOTELS})).toEqual({
      nearHotels: [],
      isNearLoading: false,
      isLoadingError: false,
    });
  });

  it(`Reducer sets flags for reviews loading correctly`, () => {
    const state = {
      comments: [],
      isCommentsLoading: false,
    };

    expect(data(state, ActionCreator.requestComments())).toEqual({
      comments: [],
      isCommentsLoading: true,
    });

    expect(data(state, {type: ActionType.REQUEST_COMMENTS})).toEqual({
      comments: [],
      isCommentsLoading: true,
    });
  });


  it(`Reducer sets reviews failure flags correctly`, () => {
    const state = {
      comments: [],
      isCommentsLoading: true,
    };

    expect(data(state, ActionCreator.failureComments())).toEqual({
      comments: [],
      isCommentsLoading: false,
    });

    expect(data(state, {type: ActionType.FAILURE_COMMENTS})).toEqual({
      comments: [],
      isCommentsLoading: false,
    });
  });

  it(`Reducer sets flags for reviews posting request correctly`, () => {
    const state = {
      comments: [],
      isCommentPosting: false,
      isPostCommentError: true,
    };

    expect(data(state, ActionCreator.requestPostingComment())).toEqual({
      comments: [],
      isCommentPosting: true,
      isPostCommentError: false,
    });

    expect(data(state, {type: ActionType.REQUEST_POSTING_COMMENT})).toEqual({
      comments: [],
      isCommentPosting: true,
      isPostCommentError: false,
    });
  });


  it(`Reducer sets reviews posting flags correctly`, () => {
    const state = {
      comments: [],
      isCommentPosting: true,
      isPostCommentError: false,
    };

    expect(data(state, ActionCreator.postComment())).toEqual({
      comments: [],
      isCommentPosting: false,
      isPostCommentError: false,
    });

    expect(data(state, {type: ActionType.POST_COMMENT})).toEqual({
      comments: [],
      isCommentPosting: false,
      isPostCommentError: false,
    });
  });


  it(`Reducer sets reviews posting failure flags correctly`, () => {
    const state = {
      comments: [],
      isCommentPosting: true,
      isPostCommentError: false,
    };

    expect(data(state, ActionCreator.failurePostingComment())).toEqual({
      comments: [],
      isCommentPosting: false,
      isPostCommentError: true,
    });

    expect(data(state, {type: ActionType.FAILURE_POSTING_COMMENT})).toEqual({
      comments: [],
      isCommentPosting: false,
      isPostCommentError: true,
    });
  });


  it(`Reducer sets flags for favorites loading correctly`, () => {
    const state = {
      favorites: [],
      isFavoritesLoading: false,
      isLoadingError: false,
    };

    expect(data(state, ActionCreator.requestFavorites())).toEqual({
      favorites: [],
      isFavoritesLoading: true,
      isLoadingError: false,
    });

    expect(data(state, {type: ActionType.REQUEST_FAVORITES})).toEqual({
      favorites: [],
      isFavoritesLoading: true,
      isLoadingError: false,
    });
  });


  it(`Reducer sets favorites failure flags correctly`, () => {
    const state = {
      favorites: [],
      isFavoritesLoading: true,
      isLoadingError: false,
    };

    expect(data(state, ActionCreator.failureFavorites())).toEqual({
      favorites: [],
      isFavoritesLoading: false,
      isLoadingError: true,
    });

    expect(data(state, {type: ActionType.FAILURE_FAVORITES})).toEqual({
      favorites: [],
      isFavoritesLoading: false,
      isLoadingError: true,
    });
  });
});

describe(`Data async reducers work correctly`, () => {
  const receivedHotels = [
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

  const receivedHotel = {
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

  it(`API call for fetching hotels works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const hotelsLoader = fetchHotels();

    apiMock.onGet(Url.HOTELS)
      .reply(200, receivedHotels);

    return hotelsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestHotels());
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_HOTELS,
          payload: receivedHotels.map(adaptHotelToClient),
        });
      });
  });

  it(`API call for fetching hotels with error data loading works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const hotelsLoader = fetchHotels();

    apiMock.onGet()
      .reply(404);

    return hotelsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestHotels());
        expect(dispatch).toHaveBeenNthCalledWith(2, ActionCreator.failureLoadHotels());
      });
  });

  it(`API call for fetching current hotel works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;

    const currentHotelLoader = fetchHotel(fakeId);

    apiMock.onGet(Url.HOTELS + `/${fakeId}`)
      .reply(200, receivedHotel);

    return currentHotelLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestCurrentHotel());
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_CURRENT_HOTEL,
          payload: adaptHotelToClient(receivedHotel),
        });
      });
  });

  it(`API call for fetching current hotel with redirect works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const notFoundId = 777;

    const currentHotelLoader = fetchHotel(notFoundId);

    apiMock.onGet(Url.HOTELS + `/${notFoundId}`)
      .reply(404);

    return currentHotelLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestCurrentHotel());
        expect(dispatch).toHaveBeenNthCalledWith(2, ActionCreator.failureCurrentHotel());
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Routes.NOT_FOUND,
        });
      });
  });

  it(`API call for fetching nearby hotels works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;

    const nearHotelsLoader = fetchNear(fakeId);

    apiMock.onGet(Url.HOTELS + `/${fakeId}` + Url.NEAR)
      .reply(200, receivedHotels);

    return nearHotelsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestNearHotels());
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_NEAR_HOTELS,
          payload: receivedHotels.map(adaptHotelToClient),
        });
      });
  });

  it(`API call for fetching reviews works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;

    const commentsLoader = fetchComments(fakeId);

    apiMock.onGet(Url.COMMENTS + `/${fakeId}`)
      .reply(200, reviews);

    return commentsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestComments());
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: reviews.map(adaptCommentToClient),
        });
      });
  });

  it(`API call for posting review works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;
    const fakeComment = {rating: 4, comment: `Excellent location, just across the river from the Louvre and couple of minutes away from dozens of cafes and restaurants.`};

    const postCommentLoader = postComment(fakeId, fakeComment);

    apiMock.onPost(Url.COMMENTS + `/${fakeId}`, fakeComment)
      .reply(200, reviews);

    return postCommentLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestPostingComment());
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_COMMENTS,
          payload: reviews.map(adaptCommentToClient),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.POST_COMMENT,
        });
      });
  });

  it(`API call for fetching favorites works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const favoritesLoader = fetchFavorites();

    apiMock.onGet(Url.FAVORITES)
      .reply(200, receivedHotels);

    return favoritesLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.requestFavorites());
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITES,
          payload: receivedHotels.map(adaptHotelToClient),
        });
      });
  });

  it(`API call for posting favorites works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const fakeId = 1;
    const fakeStatus = 1;

    const postFavoriteLoader = postFavorite(fakeId, fakeStatus);

    apiMock.onPost(Url.FAVORITES + `/${fakeId}/${fakeStatus}`)
      .reply(200, receivedHotel);

    return postFavoriteLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REPLACE_HOTEL,
          payload: adaptHotelToClient(receivedHotel),
        });
      });
  });
});
