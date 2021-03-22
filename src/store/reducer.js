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
  isCommentPosting: false,
  isFavoritesLoading: false,
  isLoadingError: false,
  isPostCommentError: false,
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
        isLoadingError: true
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
        isLoadingError: true
      };

    case ActionType.REQUEST_POSTING_COMMENT:
      return {
        ...state,
        isCommentPosting: true,
        isPostCommentError: false,
      };

    case ActionType.POST_COMMENT:
      return {
        ...state,
        isCommentPosting: false,
        isPostCommentError: false,
      };

    case ActionType.FAILURE_POSTING_COMMENT:
      return {
        ...state,
        isCommentPosting: false,
        isPostCommentError: true,
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
        nearHotels: state.nearHotels.map((item) => item.id === action.payload.id ? action.payload : item),
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

    case ActionType.RESET_FAVORITES:
      return {
        ...state,
        hotels: state.hotels.map((item) => ({
          ...item,
          isFavorite: false,
        })),
        currentHotel: {
          ...state.currentHotel,
          isFavorite: false,
        },
        nearHotels: state.nearHotels.map((item) => ({
          ...item,
          isFavorite: false,
        })),
      };

    case ActionType.SET_ERROR_STATUS:
      return {
        ...state,
        errorStatus: action.payload,
      };
  }

  return state;
};

export {reducer};
