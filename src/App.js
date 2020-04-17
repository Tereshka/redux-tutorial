import React from 'react';
import ItemList from './components/ItemList';
import ItemListRedux from './components/ItemListRedux';
import ItemListReduxFunctional from './components/ItemListReduxFunctional';

function App() {
  return (
    <div className="app">
      <div>
        <h2>Simple list</h2>
        <ItemList />
      </div>
      <div>
        <h2>Redux list</h2>
        <ItemListRedux />
      </div>
      <div>
        <h2>Redux list Functional</h2>
        <ItemListReduxFunctional />
      </div>
    </div>
  );
}

export default App;
