// Components
import Items from '../Items/Items';

// Material Ui
import Grid from '@mui/material/Unstable_Grid2';

// Data Hook
import useGetProducts from '../../utils/hooks/useGetProductsCategories';

/* Imports */

const ItemsList = () => {
    const { data: productsData } = useGetProducts();

    return (
        <Grid
            container
            spacing={3}>
            {productsData?.map((i, index) => (
                <Items
                    key={`item-${i.id}-${index}`}
                    product={i}
                />
            ))}
        </Grid>
    );
};

export default ItemsList;
