import {ActionType} from '../action';

const initialState = {
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
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_HOTELS:
      return {
        ...state,
        isHotelsLoading: true,
        isLoadingError: false,
      };

    case ActionType.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        isHotelsLoading: false,
      };

    case ActionType.FAILURE_LOAD_HOTELS:
      return {
        ...state,
        isHotelsLoading: false,
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
        favorites: state.favorites.filter((item) => item.id !== action.payload.id),
        nearHotels: state.nearHotels.map((item) => item.id === action.payload.id ? action.payload : item),
      };
  }

  return state;
};

export {data};
