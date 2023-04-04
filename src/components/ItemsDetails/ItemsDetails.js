import React from "react";

import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";

import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import ItemsCounter from "../ItemsCounter/ItemsCounter";

import Container from "@mui/material/Container";

import Grid from "@mui/material/Unstable_Grid2";

const ItemsDetails = ({ ItemsInfo }) => {
  const { id, title, description, price, image, category } = ItemsInfo;

  console.log(ItemsInfo);

  const onAdd = (quantity) => {
    alert(`${quantity} ${title}, added to cart`);
  };
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 0.25, margin: 5 }}>
        <ItemsCounter initial={1} onAdd={onAdd}></ItemsCounter>

        <CardContent>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <CardActions>
              <Button variant="contained">Add to cart</Button>
            </CardActions>
          </Container>

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

        <Container sx={{ width: 1 }}>
          <CardMedia component="img" image={image} alt={"image" + title + id} />
        </Container>
      </Card>
    </Grid>
  );
};

export default ItemsDetails;
