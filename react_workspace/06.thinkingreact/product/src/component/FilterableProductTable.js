import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state={
            inStockOnly : false,
            filterText : '',
        }
    }
    handleFilterTextChange=(e)=>{
        this.setState({
            filterText: e.target.value,
        });
    }
    handleInStockChange=(stocked)=>{
        this.setState({
            inStockOnly: stocked,
        });
    }
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}
                           handleFilterTextChange={this.handleFilterTextChange}
                           handleInStockChange={this.handleInStockChange}/>
                <ProductTable products={this.props.products}
                              filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}
                              />
            </div>
        );
    }
}

export default FilterableProductTable;