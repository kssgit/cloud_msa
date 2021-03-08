
import React from 'react';
import { Table} from 'semantic-ui-react'

function ProductCategoryRow(props) {
    const {category} = props;
    return (
        <Table.Row celled>
            <Table.HeaderCell  textAlign='center' colSpan="2">
                {category}
            </Table.HeaderCell> 
        </Table.Row>
    );
}

export default ProductCategoryRow;