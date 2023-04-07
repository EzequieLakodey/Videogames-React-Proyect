import React from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const NavbarCategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setCategories(res.data.filter((c) => c.category === parseInt(id)))
    );
  }, [id]);

  console.log(categories);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return /*
    <div>
      <label for="category">Category:</label>
      <select name="category" id="category" form="category">
        {categories.map((c) => (
          <div>
            <option>
              <Link key={id} to={`/category/men's cloth`}>
                {"men's cloth"}
              </Link>
            </option>

            <option>
              <Link key={id} to={`/category/women's cloth`}>
                {"women's cloth"}
              </Link>
            </option>

            <option>
              <Link key={id} to={`/category/jewelery`}>
                {"jewelery"}
              </Link>
            </option>

            <option>
              <Link key={id} to={`/category/electronics`}>
                {"electronics"}
              </Link>
            </option>
          </div>
        ))}
      </select>
    </div>
    
    <FormControl sx={{ width: "0.1" }}>
      <InputLabel>Category</InputLabel>
      <Select
        value={categories}
        label="Category"
        onChange={handleCategoryChange}>
        <MenuItem>
          <Link key={id} to={`/category/${categories}`}>
            {categories}
          </Link>
        </MenuItem>
      </Select>
    </FormControl>
    */;
};

export default NavbarCategoryFilter;
