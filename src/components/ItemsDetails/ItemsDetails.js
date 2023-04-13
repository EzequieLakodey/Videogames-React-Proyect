// React
import React, { useState } from "react";

// Components
import ItemsCounter from "../ItemsCounter/ItemsCounter";

// Context
import { CartContext } from "../../contexts/CartContext";

// Router Dom

// Axios

// Material Ui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

const ItemsDetails = ({ ItemsInfo }) => {
  const { id, title, description, price, image, category } = ItemsInfo;

  console.log(ItemsInfo);

  const AddItemsToCart = (count) => {
    alert(`${count} units added to cart`);
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

        <ItemsCounter initial={1} onAdd={AddItemsToCart}></ItemsCounter>

        <Container
          sx={{
            display: "flex",

            justifyContent: "center",
          }}>
          <CardActions>
            <Button variant="contained" onClick={AddItemsToCart}>
              Add to cart
            </Button>
          </CardActions>
        </Container>
      </Card>
    </Grid>
  );
};
export default ItemsDetails;
