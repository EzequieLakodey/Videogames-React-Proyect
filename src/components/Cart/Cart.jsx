// React
import { useContext } from "react";

// React Router Dom
import { useNavigate } from "react-router";

// Material ui
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Container,
    Button,
    IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RemoveIcon from "@mui/icons-material/Remove";

// Context
import { CartContext } from "../../context/Cart/CartContext";

/* Imports */

const Cart = () => {
    const { cart, removeItemFromCart, clearCart } = useContext(CartContext);
    const navigateToPage = useNavigate();
    const hasItems = cart.length > 0;

    return (
        <article>
            <Container maxWidth={"lg"}>
                <Grid>
                    <Container className="card-box-container">
                        {cart.map((i, index) => (
                            <Card
                                className="card-container"
                                key={index}>
                                <CardContent className="cart-cards-content">
                                    <CardMedia
                                        style={{ maxWidth: 50 }}
                                        component="img"
                                        image={i.image}
                                        alt={i.title}
                                    />

                                    <Container className="cart-typography-container">
                                        <Typography
                                            component="p"
                                            variant="inherit">
                                            {i.title}
                                        </Typography>

                                        <Typography
                                            variant="inherit"
                                            component="p">
                                            Qty {i.count} ({Math.ceil(i.price)}
                                            $)
                                        </Typography>

                                        <Typography
                                            variant="inherit"
                                            component="p">
                                            Total{" "}
                                            {Math.ceil(i.price) * i.count +
                                                " $"}
                                        </Typography>
                                    </Container>

                                    <IconButton
                                        onClick={() => {
                                            removeItemFromCart(i);
                                        }}>
                                        <RemoveIcon fontSize="large" />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        ))}

                        <Container className="cart-btns-container">
                            {hasItems && (
                                <Button
                                    className="cart-proceed-btn"
                                    variant="outlined"
                                    onClick={() => {
                                        navigateToPage("/order");
                                    }}>
                                    Proceed
                                </Button>
                            )}

                            {hasItems && (
                                <Button
                                    variant="outlined"
                                    onClick={clearCart}
                                    className="cart-clear-btn">
                                    Clear cart
                                </Button>
                            )}
                        </Container>
                    </Container>
                </Grid>
            </Container>
        </article>
    );
};

export default Cart;
