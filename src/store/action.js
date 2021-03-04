export const ActionType = {
  SET_CITY: `offers/setCity`,
  SET_SORT: `offers/setSort`,
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
};
