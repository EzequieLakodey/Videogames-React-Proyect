// REACT
import { useState, useContext, React } from "react";

// CONTEXT
import { CartContext } from "../../contexts/CartContext";

// MUI
import {
  IconButton,
  TextField,
  Button,
  CardActions,
  Container,
} from "@mui/material";

// MUI ICONS
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

/* Imports */

const ItemsCounter = ({ initial, OnAdd }) => {
  const [count, setCount] = useState(initial);
  const { cart, setCart, AddItemsToCart } = useContext(CartContext);

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count >= 1) {
      setCount(count + 1);
    }
  };

  return (
    <div>
      <div>
        <IconButton onClick={remove}>
          <RemoveIcon fontSize="large" />
        </IconButton>

        <TextField
          id="filled-basic"
          label="Quantity"
          variant="filled"
          value={count}
          sx={{ width: 0.1 }}
        />

        <IconButton onClick={add}>
          <AddIcon fontSize="large" />
        </IconButton>

        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <CardActions>
            <Button variant="contained" onClick={() => OnAdd(count)}>
              Add to cart
            </Button>
          </CardActions>
        </Container>
      </div>
    </div>
  );
};

export default ItemsCounter;
