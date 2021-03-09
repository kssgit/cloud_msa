import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import ProductSearch from '../view/ProductSearch'

@inject('ProductStore')
@observer
class SearchBarContainer extends Component {
    render() {
        const {
            filterText, 
            inStockOnly,
            handleFilterTextChange,
            handleInStockChange
            } =this.props.ProductStore;
        return (
            <ProductSearch
            filterText={filterText}
            inStockOnly={inStockOnly}
            handleFilterTextChange={handleFilterTextChange}
            handleInStockChange ={handleInStockChange}
            />
        );
    }
}

export default SearchBarContainer;