// React
import React from "react";

// Router Dom
import { Link, useParams } from "react-router-dom";

// Material Ui
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

// Data Hook
import useGetProducts from "../../GetFireBaseData/GetFireBaseData";

const CategorySelector = () => {
  const { data: productsData } = useGetProducts();
  const { categoryId } = useParams();

  let categories = [];

  if (productsData) {
    categories = [...new Set(productsData.map((item) => item.category))];
  }
  return (
    <div>
      <FormControl sx={{ width: "10rem" }}>
        <InputLabel>Category</InputLabel>

        <Select label="Category" value={categoryId || ""}>
          {categories?.map((category) => (
            <Link to={`/category/${category}`} key={category}>
              <MenuItem>{category}</MenuItem>
            </Link>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CategorySelector;
