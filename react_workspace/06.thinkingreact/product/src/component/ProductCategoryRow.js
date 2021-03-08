import React, { Component } from 'react';

class ProductCategoryRow extends Component {
    render() {
        const {category}=this.props; 
        // 변수명이 같아야 한다
        // const c = this.props.category; 변수명이 같지 않아도 된다
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

export default ProductCategoryRow;