import React from "react";

import Items from "../Items/Item";

import Grid from "@mui/material/Unstable_Grid2";

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
