import { ITEMS_FUNC_HAS_ERRORED, ITEMS_FUNC_IS_LOADING, ITEMS_FUNC_FETCH_DATA_SUCCESS } from '../actions/itemsFunc';

export function itemsFuncHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS_FUNC_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsFuncIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS_FUNC_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function itemsFunc(state = [], action) {
  switch (action.type) {
    case ITEMS_FUNC_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
}