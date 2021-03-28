import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {user} from './user';
import {ActionType, ActionCreator} from '../action';
import {checkAuth, login, logout} from '../api-actions';
import {AuthorizationStatus, emptyUser, EMPTY_AVATAR_URL, Url} from '../../const';

const api = createAPI(() => { });

describe(`User reducers work correctly`, () => {

  it(`Reducer with empty params  returns initial state`, () => {
    expect(user(undefined, {})).toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, user: emptyUser});
  });


  it(`Reducer sets user correctly`, () => {
    const state = {
      authorizationStatus: ``,
      user: emptyUser,
    };

    const receivedUser = {
      avatarUrl: EMPTY_AVATAR_URL,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      isPro: false,
      name: `Oliver.conner`,
    };

    expect(user(state, ActionCreator.setUser(receivedUser))).toEqual({
      authorizationStatus: ``,
      user: {
        avatarUrl: EMPTY_AVATAR_URL,
        email: `Oliver.conner@gmail.com`,
        id: 1,
        isPro: false,
        name: `Oliver.conner`,
      },
    });

    const setUserAction = {
      type: ActionType.SET_USER,
      payload: receivedUser,
    };

    expect(user(state, setUserAction)).toEqual({
      authorizationStatus: ``,
      user: {
        avatarUrl: EMPTY_AVATAR_URL,
        email: `Oliver.conner@gmail.com`,
        id: 1,
        isPro: false,
        name: `Oliver.conner`,
      },
    });
  });


  it(`Reducer sets authorization status correctly`, () => {
    const state = {
      authorizationStatus: ``,
      user: {},
    };

    expect(user(state, ActionCreator.requiredAuthorization(AuthorizationStatus.AUTH))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {},
    });

    const setAuthAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, setAuthAction)).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {},
    });
  });


  it(`Reducer makes logout correctly`, () => {
    const stateAuth = {
      authorizationStatus: AuthorizationStatus.AUTH,
      user: {
        name: `Oliver.conner`,
        email: `Oliver.conner@gmail.com`,
        id: 1,
        avatarUrl: EMPTY_AVATAR_URL,
        isPro: false,
      },
    };

    expect(user(stateAuth, ActionCreator.logout())).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {
        name: ``,
        email: ``,
        id: -1,
        avatarUrl: EMPTY_AVATAR_URL,
        isPro: false,
      },
    });

    const stateNoAuth = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: emptyUser,
    };

    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(stateNoAuth, logoutAction)).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      user: {
        id: -1,
        email: ``,
        name: ``,
        avatarUrl: EMPTY_AVATAR_URL,
        isPro: false,
      },
    });
  });
});

describe(`User async operations work correctly`, () => {
  it(`API check login works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    const receivedUser = {
      avatarUrl: EMPTY_AVATAR_URL,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    };

    apiMock.onGet(Url.LOGIN)
      .reply(200, receivedUser);

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: receivedUser,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`API call to /login works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const testUser = {
      email: `Oliver.conner@gmail.com`,
      password: `12345678`,
    };

    const loginLoader = login(testUser);

    const receivedUser = {
      avatarUrl: EMPTY_AVATAR_URL,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      name: `Oliver.conner`,
    };

    apiMock.onPost(Url.LOGIN)
      .reply(200, receivedUser);

    return loginLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER,
          payload: receivedUser,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`API logout call to /logout works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock.onGet(Url.LOGOUT)
      .reply(200);

    return logoutLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOGOUT,
        });
      });
  });
});
