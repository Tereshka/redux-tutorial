import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/itemsFunc';

function ItemListReduxFunctional(props) {
  const { hasErrored, isLoading, items, fetchData } = props;

  useEffect(() => {
    fetchData('https://5826ed963900d612000138bd.mockapi.io/items');
  }, []);


  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <p>Loading…</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.itemsFunc,
    hasErrored: state.itemsFuncHasErrored,
    isLoading: state.itemsFuncIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemListReduxFunctional);