import * as React from "react";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Unstable_Grid2";

import { CardActionArea } from "@mui/material";

import CardActions from "@mui/material/CardActions";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import { useNavigate as Redirect, useNavigate } from "react-router";

const Item = ({ product }) => {
  const Redirect = useNavigate();

  const { id, title, price, image } = product;

  return (
    <Grid xs={12} sm={6} xl={3}>
      <Card
        sx={{
          height: 1,
          justifyContent: "space-between",
          alignContent: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}>
        <CardActionArea>
          <Container sx={{ width: "0.75" }}>
            <CardMedia
              component="img"
              image={image}
              alt={"image" + title + id}
            />
          </Container>

          <CardContent
            sx={{
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
              flexDirection: "column",
            }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {price + " U$D"}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignContent: "flex-end",
            flexWrap: "wrap",
            flexDirection: "column",
          }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => Redirect(`/item/${id}`)}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
