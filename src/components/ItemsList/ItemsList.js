// React
import React from "react";

// Components
import Items from "../Items/Item";

// Router Dom

// Axios

// Material Ui
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

export const ItemsList = ({ data }) => {
  return (
    <div>
      <Grid container spacing={5} sx={{ marginTop: 5 }}>
        {data.map((product) => (
          <Items key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};
