import {ActionType} from './action';
import {CITIES, AuthorizationStatus, emptyUser} from '../const';

const initialState = {
  city: CITIES[0],
  sort: 0,
  hotels: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: emptyUser,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isDataLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        user: emptyUser,
      };
  }

  return state;
};

export {reducer};
