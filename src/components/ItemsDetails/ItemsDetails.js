// React

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

// Components
import ItemsCounter from "../ItemsCounter/ItemsCounter";

// Router Dom

// Axios

// Material Ui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

const ItemsDetails = ({ data }) => {
  const { AddItemsToCart } = useContext(CartContext);
  const { title, description, price, category, image } = data;

  const OnAdd = (count) => {
    AddItemsToCart(data, count);
  };

  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 1, marginTop: 5 }}>
        <CardContent>
          <Container>
            <Typography
              gutterBottom
              variant="overline"
              component="h6"
              fontSize={"100%"}>
              {title}
            </Typography>

            <Typography
              gutterBottom
              variant="overline"
              component="h5"
              fontSize={"100%"}>
              {category}
            </Typography>
          </Container>
        </CardContent>
        <Container sx={{ width: 0.25 }}>
          <CardMedia
            component="img"
            image={image}
            alt={"image" + data.title + data.id}
          />
        </Container>

        <CardContent>
          <Container>
            <Typography gutterBottom variant="h6" component="div">
              {price} $
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
