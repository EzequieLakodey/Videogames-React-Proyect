// React
import React from "react";

// Components
import Items from "../Items/Items";

// Material Ui
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

export const ItemsList = ({ data }) => {
  return (
    <div>
      <Grid container spacing={5} sx={{ marginTop: 5 }}>
        {data.map((item) => (
          <Items key={item.id} product={item} />
        ))}
      </Grid>
    </div>
  );
};
