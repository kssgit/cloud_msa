
import React from 'react';
import ProducCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { Table} from 'semantic-ui-react'

function ProductTable(props) {
    const {products,filterText,inStockOnly} = props;
    const productList=[];
    // const productList=products.map((product)=>{
    //     if(product.name.indexOf(filterText) === -1){
    //                 return;
    //             }
    //             if(!product.stocked && inStockOnly ){
    //                 return;
    //             }
    //             if(product.category !== lastCategory){
                    
    //                     <ProducCategoryRow
    //                     category={product.category}
    //                     key={product.category}/>
                    
    //             }
               
                    
    //                 <ProductRow 
    //                 product={product}
    //                 key={product.name}/>
                
    //             lastCategory=product.category;  
    // });
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
       <Table celled>
           <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>
                        Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                        Price
                    </Table.HeaderCell>
                </Table.Row>
           </Table.Header>
           <Table.Body>
                {productList}
           </Table.Body>
       </Table>
    );
}

export default ProductTable;