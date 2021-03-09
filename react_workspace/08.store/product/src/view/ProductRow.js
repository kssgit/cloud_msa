import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const {name, price , stocked} = this.props.product;
        //const name = 
            // stocked ? this.props.product.name :
            // <span style={{color:'red'}}>
            //     {this.props.product.name}
            //     </span> 
        return (
            <tr>
               { stocked ?  
               (<td>{name}</td>) : 
               //color를 jsx로 쓴이유는 다른 오브젝트를 이용해서 사용가능하기 때문에 
               (<td><span style={{color:'red'}}>{name}</span></td>)
                }
                <td>{price}</td>
            </tr>
        );
    }
}

export default ProductRow;