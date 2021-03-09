import React, { Component } from 'react';

class ProductSearch extends Component {
    render() {
        const {
            filterText, 
            inStockOnly,
            handleFilterTextChange,
            handleInStockChange
            } =this.props;
        return (
            <form>
                <input type='text' placeholder='Search...'
                value={filterText}
                onChange={(e)=>handleFilterTextChange(e)}/>
                <p>
                    <input type='checkbox' 
                    checked={inStockOnly} 
                    onChange={(event)=>handleInStockChange(event.target.checked)}/> &nbsp;
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default ProductSearch;