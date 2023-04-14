// React
import React, { useState } from "react";

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Components
import ItemsCounter from "../ItemsCounter/ItemsCounter";

// Router Dom

// Axios

// Material Ui
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

const ItemsDetails = ({ ItemsInfo }) => {
  const { id, title, description, price, image, category } = ItemsInfo;

  const { cart, setCart, AddItemsToCart } = useContext(CartContext);

  const OnAdd = (count) => {
    AddItemsToCart(title, count);
  };

  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 1, marginTop: 5 }}>
        <Container sx={{ width: 0.25 }}>
          <CardMedia component="img" image={image} alt={"image" + title + id} />
        </Container>

        <CardContent>
          <Container>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Container>

          <Container>
            <Typography gutterBottom variant="h6" component="div">
              {price} $
            </Typography>
          </Container>

          <Container>
            <Typography variant="body" color="text.secondary">
              Type: {category}
            </Typography>
          </Container>

          <Container>
            <Typography variant="body" color="text.secondary">
              {description}
            </Typography>
          </Container>
        </CardContent>

        <ItemsCounter initial={1} OnAdd={OnAdd}></ItemsCounter>
      </Card>
    </Grid>
  );
};
export default ItemsDetails;
