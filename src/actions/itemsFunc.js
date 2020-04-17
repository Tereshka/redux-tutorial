export const ITEMS_FUNC_HAS_ERRORED = 'ITEMS_FUNC_HAS_ERRORED';
export const ITEMS_FUNC_IS_LOADING = 'ITEMS_FUNC_IS_LOADING';
export const ITEMS_FUNC_FETCH_DATA_SUCCESS = 'ITEMS_FUNC_FETCH_DATA_SUCCESS';


export function itemsHasErrored(bool) {
  return {
    type: ITEMS_FUNC_HAS_ERRORED,
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: ITEMS_FUNC_IS_LOADING,
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FUNC_FETCH_DATA_SUCCESS,
    items
  };
}

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
