// Components
import CategorySelector from "../CategorySelector/CategorySelector";

// Material Ui
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Shop = () => {
    return (
        <Grid
            container
            className="shop-grid-container">
            <Grid justifyContent={"flex-start"}>
                <Typography
                    sx={{ fontSize: "2rem" }}
                    component="h2"
                    variant="inherit">
                    SHOP
                </Typography>
            </Grid>

            <Grid justifyContent={"flex-end"}>
                <CategorySelector />
            </Grid>
        </Grid>
    );
};

export default Shop;
