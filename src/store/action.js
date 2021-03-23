export const ActionType = {
  SET_CITY: `offers/setCity`,
  SET_SORT: `offers/setSort`,

  REQUEST_HOTELS: `data/requestHotels`,
  LOAD_HOTELS: `data/loadHotels`,
  FAILURE_LOAD_HOTELS: `data/failureLoadHotels`,

  REQUEST_CURRENT_HOTEL: `data/requestCurrentHotel`,
  LOAD_CURRENT_HOTEL: `data/loadCurrentHotel`,
  FAILURE_CURRENT_HOTEL: `data/failureCurrentHotel`,

  REQUEST_NEAR_HOTELS: `data/requestNearHotel`,
  LOAD_NEAR_HOTELS: `data/loadNearHotels`,
  FAILURE_NEAR_HOTELS: `data/failureNearHotels`,

  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
  LOGOUT: `user/logout`,

  REQUEST_COMMENTS: `data/requestComments`,
  LOAD_COMMENTS: `data/loadComments`,
  FAILURE_COMMENTS: `data/failureComments`,

  REQUEST_POSTING_COMMENT: `data/requestPostingComment`,
  POST_COMMENT: `data/postComment`,
  FAILURE_POSTING_COMMENT: `data/failurePostingComment`,

  REQUEST_FAVORITES: `data/requestFavorites`,
  LOAD_FAVORITES: `data/loadFavorites`,
  FAILURE_FAVORITES: `data/failureFavorites`,

  REPLACE_HOTEL: `data/replaceHotel`,

  REDIRECT_TO_ROUTE: `offers/redirectToRoute`,
};

export const ActionCreator = {
  setCity: (payload) => ({
    type: ActionType.SET_CITY,
    payload,
  }),
  setSort: (payload) => ({
    type: ActionType.SET_SORT,
    payload,
  }),

  requestHotels: () => ({
    type: ActionType.REQUEST_HOTELS,
  }),
  loadHotels: (payload) => ({
    type: ActionType.LOAD_HOTELS,
    payload,
  }),
  failureLoadHotels: () => ({
    type: ActionType.FAILURE_LOAD_HOTELS,
  }),

  requestCurrentHotel: () => ({
    type: ActionType.REQUEST_CURRENT_HOTEL,
  }),
  loadCurrentHotel: (payload) => ({
    type: ActionType.LOAD_CURRENT_HOTEL,
    payload,
  }),
  failureCurrentHotel: () => ({
    type: ActionType.FAILURE_CURRENT_HOTEL,
  }),

  requestNearHotels: () => ({
    type: ActionType.REQUEST_NEAR_HOTELS,
  }),
  loadNearHotels: (payload) => ({
    type: ActionType.LOAD_NEAR_HOTELS,
    payload,
  }),
  failureNearHotels: () => ({
    type: ActionType.FAILURE_NEAR_HOTELS,
  }),

  requestComments: () => ({
    type: ActionType.REQUEST_COMMENTS,
  }),
  loadComments: (payload) => ({
    type: ActionType.LOAD_COMMENTS,
    payload,
  }),
  failureComments: () => ({
    type: ActionType.FAILURE_COMMENTS,
  }),
  requestPostingComment: () => ({
    type: ActionType.REQUEST_POSTING_COMMENT,
  }),
  postComment: () => ({
    type: ActionType.POST_COMMENT,
  }),
  failurePostingComment: () => ({
    type: ActionType.FAILURE_POSTING_COMMENT,
  }),

  requestFavorites: () => ({
    type: ActionType.REQUEST_FAVORITES,
  }),
  loadFavorites: (payload) => ({
    type: ActionType.LOAD_FAVORITES,
    payload,
  }),
  failureFavorites: () => ({
    type: ActionType.FAILURE_FAVORITES,
  }),
  replaceHotel: (payload) => ({
    type: ActionType.REPLACE_HOTEL,
    payload,
  }),

  requiredAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
