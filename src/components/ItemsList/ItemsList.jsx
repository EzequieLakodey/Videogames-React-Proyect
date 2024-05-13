// Components
import Items from "../Items/Items";

// Material Ui
import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

/* Imports */

const ItemsList = ({ data, isLoading }) => {
    const items = data?.map((producto, indice, categoria) => (
        <Items
            key={`item-${producto.id}-${indice}`}
            producto={producto}
            categoria={categoria}
        />
    ));

    return (
        <>
            {isLoading ? (
                <div className="spinner-container">
                    <CircularProgress color="success" />
                </div>
            ) : (
                <Grid
                    container
                    spacing={3}>
                    {items}
                </Grid>
            )}
        </>
    );
};

export default ItemsList;
