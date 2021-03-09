import React, { Component } from 'react';
import SearchBarContainer from './SearchBarContainer';
import ProductTableContainer from './ProductTableContainer';



class FilterableProductTable extends Component {
   
    render() {
        return (
            <div>
                <SearchBarContainer/>
                <ProductTableContainer products={this.props.products}/>
            </div>
        );
    }
}

export default FilterableProductTable;