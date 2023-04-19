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
    <Grid xs={12} sm={6} xl={3}>
      <CardActionArea sx={{ width: 1, height: 1 }}>
        <Card
          onClick={() => Redirect(`/item/${id}`)}
          sx={{
            maxWidth: "345px",

            height: "1",

            display: "flex",

            flexDirection: "column",

            justifyContent: "space-between",

            alignContent: "center",
          }}>
          <CardContent sx={{ maxWidth: 1 }}>
            <CardMedia
              component="img"
              image={image}
              alt={"image" + title + id}
            />
          </CardContent>

          <CardContent>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>

            <Typography variant="h5" component="h5">
              {price + " U$D"}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default Item;
