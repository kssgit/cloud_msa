import React from 'react';
import PRODUCTS from './Product';
import FilterableProductTable from './container/FilterableProductTable';

function App(props) {
  
  return (
    <div>
        <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
