import React from "react";
import { Table } from "semantic-ui-react";

function ProductRow(props) {
  const { name, price, stocked } = props.product;
  return (
    <Table.Row celled>
      {stocked ? (
        <Table.Cell>{name}</Table.Cell>
      ) : (
        <Table.Cell>
          <span style={{ color: "red" }}>{name}</span>
        </Table.Cell>
      )}
      <Table.Cell celled>{price}</Table.Cell>
    </Table.Row>
  );
}

export default ProductRow;
