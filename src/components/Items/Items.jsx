// Router Dom
import { useNavigate } from "react-router";

// Material Ui
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Hooks
import useResizeImage from "../../utils/hooks/useResizeImage";

// PropTypes
import PropTypes from "prop-types";

/* Imports */

const Item = ({ producto }) => {
    const { width, height } = useResizeImage(13 * 16, 13 * 16);
    const navigateToPage = useNavigate();
    const { id, title, price, image } = producto;

    return (
        <Grid
            className="items-card-container"
            xs={12}
            sm={4}
            xl={3}>
            <Card
                onClick={() => navigateToPage(`/item/${id}`)}
                className="card-item"
                sx={{ m: 0, p: 0 }}>
                <Grid
                    container
                    direction={"column"}
                    className="card-content-container">
                    <CardActionArea className="item-action-area">
                        <CardContent
                            className="item-card-img"
                            sx={{ m: 0, p: 0 }}>
                            <CardMedia
                                style={{ width, height }}
                                component="img"
                                image={image}
                                alt={title}
                            />
                        </CardContent>

                        <CardContent sx={{ m: 0, p: 0 }}>
                            <Typography
                                className="card-item-title"
                                variant="inherit"
                                component="h4">
                                {title}
                            </Typography>

                            <Typography
                                className="card-item-rating"
                                variant="inherit"
                                component="p">
                                NOT RATED
                            </Typography>

                            <Typography
                                className="card-item-price"
                                variant="inherit"
                                component="h4">
                                {"$" + price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ height: "2rem" }}
                        fullWidth>
                        Add to cart
                    </Button>
                </Grid>
            </Card>
        </Grid>
    );
};

Item.propTypes = {
    producto: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
