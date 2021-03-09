import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import ProducCategoryRow from '../view/ProductCategoryRow';
import ProductRow from '../view/ProductRow';

@inject('ProductStore')
@observer
class ProductTableContainer extends Component {
    render() {
        const {products} = this.props;
        const {filterText,inStockOnly} =this.props.ProductStore;
        const productList=[];
        let lastCategory=null;

        products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(!product.stocked && inStockOnly ){
                return;
            }
            if(product.category !== lastCategory){
                productList.push(
                    <ProducCategoryRow
                    category={product.category}
                    key={product.category}/>
                );
            }
            productList.push(
                <ProductRow 
                product={product}
                key={product.name}/>
            );
            lastCategory=product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList}
                </tbody>
            </table>
        );
    }
}

export default ProductTableContainer;