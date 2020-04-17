import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { itemsFunc, itemsFuncHasErrored, itemsFuncIsLoading } from './itemsFunc';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  itemsFunc,
  itemsFuncHasErrored,
  itemsFuncIsLoading,
});