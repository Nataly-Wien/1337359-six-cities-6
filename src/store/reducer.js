import {ActionType} from './action';
import {CITIES, AuthorizationStatus, emptyUser} from '../const';

const initialState = {
  city: CITIES[0],
  sort: 0,
  hotels: [],
  currentHotel: {},
  nearHotels: [],
  comments: [],
  favorites: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: emptyUser,
  isHotelsLoaded: false,
  isCurrentLoading: false,
  isNearLoading: false,
  isCommentsLoading: false,
  isFavoritesLoading: false,
  isLoadingError: false,
  errorStatus: 0,
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
        isHotelsLoaded: true,
      };

    case ActionType.FAILURE_LOAD_HOTELS:
      return {
        ...state,
        isHotelsLoaded: true,
        isLoadingError: true,
      };

    case ActionType.REQUEST_CURRENT_HOTEL:
      return {
        ...state,
        isCurrentLoading: true,
        isLoadingError: false,
      };

    case ActionType.LOAD_CURRENT_HOTEL:
      return {
        ...state,
        currentHotel: action.payload,
        isCurrentLoading: false,
      };

    case ActionType.FAILURE_CURRENT_HOTEL:
      return {
        ...state,
        isCurrentLoading: false,
        isLoadingError: true
      };

    case ActionType.REQUEST_NEAR_HOTELS:
      return {
        ...state,
        isNearLoading: true,
      };

    case ActionType.LOAD_NEAR_HOTELS:
      return {
        ...state,
        nearHotels: action.payload,
        isNearLoading: false,
      };

    case ActionType.FAILURE_NEAR_HOTELS:
      return {
        ...state,
        isNearLoading: false,
        isLoadingError: false,
      };

    case ActionType.REQUEST_COMMENTS:
      return {
        ...state,
        isCommentsLoading: true,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isCommentsLoading: false,
      };

    case ActionType.FAILURE_COMMENTS:
      return {
        ...state,
        isCommentsLoading: false,
        isLoadingError: false,
      };

    case ActionType.REQUEST_FAVORITES:
      return {
        ...state,
        isFavoritesLoading: true,
        isLoadingError: false,
      };

    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoading: false,
      };

    case ActionType.FAILURE_FAVORITES:
      return {
        ...state,
        isFavoritesLoading: false,
        isLoadingError: true,
      };

    case ActionType.REPLACE_HOTEL:
      return {
        ...state,
        hotels: state.hotels.map((item) => item.id === action.payload.id ? action.payload : item),
        currentHotel: state.currentHotel.id === action.payload.id ? action.payload : state.currentHotel,
        favorites: state.favorites.map((item) => item.id === action.payload.id ? action.payload : item),
      };

    case ActionType.RESET_CURRENT_OFFER:
      return {
        ...state,
        currentHotel: {},
        nearHotels: [],
        comments: [],
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

    case ActionType.SET_ERROR_STATUS:
      return {
        ...state,
        errorStatus: action.payload,
      };
  }

  // case ActionType.FAILURE_AUTHORIZATION:
  //   return {
  //     ...state,
  //     isLoadingError: true,
  //   };

  return state;
};

export {reducer};
