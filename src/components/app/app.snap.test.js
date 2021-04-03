import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import thunk from 'redux-thunk';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import * as APIActions from '../../store/api-actions';
import App from './app';
import {Routes, AuthorizationStatus} from '../../const';

jest.mock(`../../store/api-actions.js`);
APIActions.fetchHotels = () => (dispatch) => dispatch(jest.fn());
APIActions.fetchHotel = () => (dispatch) => dispatch(jest.fn());
APIActions.fetchNear = () => (dispatch) => dispatch(jest.fn());
APIActions.fetchComments = () => (dispatch) => dispatch(jest.fn());
APIActions.fetchFavorites = () => (dispatch) => dispatch(jest.fn());

const middleware = [thunk];

const mockStore = configureStore(middleware);

describe(`Should routing work correctly`, () => {
  it(`Render main page when navigate to url "/"`, () => {

    const history = createMemoryHistory();
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
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: ``,
          id: 1,
          name: ``,
        },
        isLoginError: false,
      },
    });
    const {container} = render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(container).toMatchSnapshot();
  });

  it(`Render SignIn page when navigate to url "/login with "NO_AUTH" status"`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {
        isLoadingError: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: ``,
          id: 1,
          name: ``,
        },
        isLoginError: false,
      }
    });

    history.push(Routes.LOGIN);

    const {container} = render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(container).toMatchSnapshot();
  });

  it(`Render SignIn page when navigate to url "/login" with "AUTH" status`, () => {
    const history = createMemoryHistory();
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
        },
        isLoginError: false,
      },
    });

    history.push(Routes.LOGIN);

    const {container} = render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(container).toMatchSnapshot();
  });

  it(`Render room page when navigate to url "/offer/:id"`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {
        currentHotel: {
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
        },
        nearHotels: [],
        comments: [],
        favorites: [],
        isCurrentLoading: false,
        isNearLoading: false,
        isCommentsLoading: false,
        isCommentPosting: false,
        isPostCommentError: false,
        isLoadingError: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: `Oliver.conner@gmail.com`,
          id: 1,
          name: `Oliver.conner`,
        },
        isLoginError: false,
      }
    });

    history.push(Routes.ROOM);

    const {container} = render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(container).toMatchSnapshot();
  });

  it(`Render room page when navigate to url "/favorite" with "AUTH" status`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {
        favorites: [{
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
        isFavoritesLoading: false,
        isLoadingError: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: `Oliver.conner@gmail.com`,
          id: 1,
          name: `Oliver.conner`,
        },
        isLoginError: false,
      }
    });

    history.push(Routes.FAVORITES);

    const {container} = render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(container).toMatchSnapshot();
  });

  it(`Render room page when navigate to url "/favorite" with "AUTH" status`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      DATA: {
        isLoadingError: false,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: ``,
          id: 1,
          name: ``,
        },
        isLoginError: false,
      }
    });

    history.push(Routes.FAVORITES);

    const {container} = render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(container).toMatchSnapshot();
  });

  it(`Render NotFound page when navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: {
          avatarUrl: `img/avatar.jpg`,
          email: ``,
          id: 1,
          name: ``,
        },
        isLoginError: false,
      }
    });

    history.push(Routes.NOT_FOUND);

    render(<Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>);

    expect(screen.getByText(/404/)).toBeInTheDocument();
    expect(screen.getByText(/Not Found/)).toBeInTheDocument();
  });
});
