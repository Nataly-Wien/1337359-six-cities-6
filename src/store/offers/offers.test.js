import {offers} from './offers';
import {ActionType, ActionCreator} from '../action';
import {CITIES} from '../../const';

describe(`Offers reducers work correctly`, () => {

  it(`Reducer with empty params  returns initial state`, () => {
    expect(offers(undefined, {})).toEqual({city: CITIES[0], sort: 0});
  });


  it(`Reducer sets city correctly`, () => {
    const state = {
      city: ``,
      sort: 0,
    };

    expect(offers(state, ActionCreator.setCity(CITIES[1]))).toEqual({city: CITIES[1], sort: 0});

    const setCityAction = {
      type: ActionType.SET_CITY,
      payload: CITIES[2],
    };

    expect(offers(state, setCityAction)).toEqual({city: CITIES[2], sort: 0});
  });


  it(`Reducer sets sort type correctly`, () => {
    const state = {
      city: ``,
      sort: 0,
    };

    expect(offers(state, ActionCreator.setSort(1))).toEqual({city: ``, sort: 1});

    const setSortAction = {
      type: ActionType.SET_SORT,
      payload: 2,
    };

    expect(offers(state, setSortAction)).toEqual({city: ``, sort: 2});
  });
});
