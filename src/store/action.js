export const ActionType = {
  SET_CITY: `offers/setCity`,
  SET_SORT: `offers/setSort`,
  LOAD_HOTELS: `data/loadHotels`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
