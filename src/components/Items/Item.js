// React
import * as React from "react";

// Components

// Router Dom
import { useNavigate } from "react-router";

// Axios

// Material Ui
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

/* Imports */

const Item = ({ product }) => {
  const Redirect = useNavigate();

  const { id, title, price, image } = product;

  return (
    <Grid xs={12} sm={6} xl={3}>
      <Card
        sx={{
          height: 1,
        }}>
        <CardActionArea sx={{ height: "0.9" }}>
          <Container sx={{ width: "1", flexGrow: 1 }}>
            <CardMedia
              component="img"
              image={image}
              alt={"image" + title + id}
            />
          </Container>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              {price + " U$D"}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
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
