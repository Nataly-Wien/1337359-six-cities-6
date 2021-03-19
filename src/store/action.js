export const ActionType = {
  SET_CITY: `offers/setCity`,
  SET_SORT: `offers/setSort`,

  LOAD_HOTELS: `data/loadHotels`,
  FAILURE_LOAD_HOTELS: `data/failureLoadHotels`,

  REQUEST_CURRENT_HOTEL: `data/requestCurrentHotel`,
  LOAD_CURRENT_HOTEL: `data/loadCurrentHotel`,
  FAILURE_CURRENT_HOTEL: `data/failureCurrentHotel`,

  REQUEST_NEAR_HOTELS: `data/requestNearHotel`,
  LOAD_NEAR_HOTELS: `data/loadNearHotels`,
  FAILURE_NEAR_HOTELS: `data/failureNearHotels`,

  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  FAILURE_AUTHORIZATION: `user/failureAuthorization`,
  SET_USER: `user/setUser`,
  LOGOUT: `user/logout`,

  REQUEST_COMMENTS: `data/requestComments`,
  LOAD_COMMENTS: `data/loadComments`,
  FAILURE_COMMENTS: `data/failureComments`,

  REQUEST_FAVORITES: `data/requestFavorites`,
  LOAD_FAVORITES: `data/loadFavorites`,
  FAILURE_FAVORITES: `data/failureFavorites`,
  REPLACE_HOTEL: `data/replaceHotel`,

  RESET_CURRENT_OFFER: `data/resetCurrentOffer`,

  // SET_ERROR_STATUS: `data/setErrorStatus`,
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

  resetCurrentOffer: () => ({
    type: ActionType.RESET_CURRENT_OFFER,
  }),

  requiredAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  setUser: (payload) => ({
    type: ActionType.SET_USER,
    payload,
  }),

  setErrorStatus: (payload) => ({
    type: ActionType.SET_ERROR_STATUS,
    payload,
  }),
  // failureAuthorization: () => ({
  //   type: ActionType.FAILURE_AUTHORIZATION,
  // }),
};
