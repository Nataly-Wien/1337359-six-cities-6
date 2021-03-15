export const ActionType = {
  SET_CITY: `offers/setCity`,
  SET_SORT: `offers/setSort`,
  LOAD_HOTELS: `data/loadHotels`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER: `user/setUser`,
  LOGOUT: `user/logout`,
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
  })
};
