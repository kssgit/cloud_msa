import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const {filterText, isStockOnly,handleFilterTextChange,handleInStockChange} =this.props;
        return (
            <form>
                <input type='text' placeholder='Search...'
                value={filterText}
                onChange={(e)=>handleFilterTextChange(e)}/>
                <p>
                    <input type='checkbox' 
                    checked={isStockOnly} 
                    onChange={(event)=>handleInStockChange(event.target.checked)}/> &nbsp;
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;