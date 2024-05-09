// Components
import CategorySelector from "../CategorySelector/CategorySelector";

// Material Ui
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useState } from "react";

const Shop = () => {
  const [filteredCategory, setFilteredCategory] = useState("");

  // Función para filtrar productos por categoría
  const handlerCategorySelect = (category) => {
    setFilteredCategory(category);
    // Aquí puedes realizar cualquier lógica adicional para filtrar los productos
  };

  return (
    <Grid container className="shop-grid-container">
      <Grid justifyContent={"flex-start"}>
        <Typography sx={{ fontSize: "2rem" }} component="h2" variant="inherit">
          SHOP
        </Typography>
      </Grid>

      <Grid justifyContent={"flex-end"}>
        <CategorySelector onSelectCategory={handlerCategorySelect} />
      </Grid>
    </Grid>
  );
};

export default Shop;
