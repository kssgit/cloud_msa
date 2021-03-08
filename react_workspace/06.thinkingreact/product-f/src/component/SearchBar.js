import React from "react";
import { Form, Input, Checkbox } from "semantic-ui-react";

function SearchBar(props) {
  const {
    filterText,
    isStockOnly,
    handleFilterTextChange,
    handleInStockChange,
  } = props;
  return (
    <Form>
      <Form.Field>
        <Input
          value={filterText}
          onChange={(e, data) => handleFilterTextChange(e, data)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label=" Only show products in stock"
          checked={isStockOnly}
          onChange={(e, data) => handleInStockChange(e, data)}
        />
      </Form.Field>
    </Form>
  );
}

export default SearchBar;
