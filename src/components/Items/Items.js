// React
import * as React from "react";

// Router Dom
import { useNavigate } from "react-router";

// Material Ui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

const Item = ({ product }) => {
  const Redirect = useNavigate();

  const { id, title, price, image } = product;

  return (
    <Grid xs={12} sm={6} xl={4}>
      <CardActionArea sx={{ width: "1", height: "50rem" }}>
        <Card
          onClick={() => Redirect(`/item/${id}`)}
          sx={{
            maxWidth: "1",
            height: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "center",
          }}>
          <CardContent>
            <Typography component="h5">{title}</Typography>
          </CardContent>

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}>
            <CardMedia
              component="img"
              image={image}
              alt={"image" + title + id}
              sx={{ width: "20rem" }}
            />
          </CardContent>

          <CardContent>
            <Typography component="h6" fontSize={"2em"}>
              {price + " $"}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Item;
