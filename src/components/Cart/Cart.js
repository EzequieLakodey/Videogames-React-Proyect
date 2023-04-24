// React
import React from "react";

// React Router Dom

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

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <article>
      <Grid maxWidth={1}>
        {cart.map((i) => (
          <Container key={i.id}>
            <Card>
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}>
                  <CardMedia
                    component="img"
                    image={i.image}
                    alt={i.title}
                    sx={{ width: "10rem" }}
                  />

                  <Typography variant="inherit" component="p">
                    {i.title}
                  </Typography>

                  <Typography variant="inherit" component="p">
                    Price per unit {i.price + " $"}
                  </Typography>

                  <Typography variant="inherit" component="p">
                    Total {i.price * i.count + " $"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Container>
        ))}
        <Button>Purchase</Button>
      </Grid>
    </article>
  );
};

export default Cart;
