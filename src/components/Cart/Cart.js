// React
import React from "react";

// React Router Dom
import { useNavigate } from "react-router";

// Material ui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  Button,

} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RemoveIcon from "@mui/icons-material/Remove";

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart, removeItems } = useContext(CartContext);

  const Redirect = useNavigate();

  return (
    <article sx={{ marginTop: "5em" }}>
      <Grid mt={"5rem"} maxWidth={1}>
        {cart.map((i) => (
          <Container key={i.id}>
            <Card>
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}>
                  <CardMedia
                    component="img"
                    image={i.image}
                    alt={i.title}
                    sx={{ maxWidth: "100px" }}
                  />
                  <Container sx={{ lineHeight: "2rem" }}>
                    <Typography variant="inherit" component="p">
                      {i.title}
                    </Typography>

                    <Typography variant="inherit" component="p">
                      Qty {i.count} ({i.price}$)
                    </Typography>

                    <Typography variant="inherit" component="p">
                      Total {i.price * i.count + " $"}
                    </Typography>
                  </Container>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      removeItems(i);
                    }}>
                    <RemoveIcon fontSize="large" />
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        ))}
        <Container sx={{ marginTop: "2em" }}>
          <Button
            variant="contained"
            onClick={() => {
              Redirect("/order");
            }}>
            Proceed
          </Button>
        </Container>
      </Grid>
    </article>
  );
};

export default Cart;
