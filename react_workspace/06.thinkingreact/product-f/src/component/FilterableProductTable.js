import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { Grid } from "semantic-ui-react";

function FilterableProductTable(props) {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterText, setFilterText] = useState("");
  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };
  const handleInStockChange = (e, data) => {
    console.log(data);
    setInStockOnly(data.checked);
  };

  return (
    <Grid>
      <div>
        <Grid.Row>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            handleFilterTextChange={handleFilterTextChange}
            handleInStockChange={handleInStockChange}
          />
        </Grid.Row>
        <Grid.Row>
          <ProductTable
            products={props.products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </Grid.Row>
      </div>
    </Grid>
  );
}

export default FilterableProductTable;
