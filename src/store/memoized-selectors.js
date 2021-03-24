import {createSelector} from 'reselect';
import {getCity, getSort} from './offers/selectors';
import {getHotels} from './data/selectors';
import {SORTS} from '../const';

export const getFilteredSortedHotels = createSelector([getHotels, getCity, getSort], (hotels, city, sort) =>
  hotels.filter((item) => item.city.name === city).sort(SORTS[sort].rule)
);
