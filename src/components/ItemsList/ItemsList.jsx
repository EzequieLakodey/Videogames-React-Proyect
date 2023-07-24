// Components
import Items from '../Items/Items';

// Hook
import usePagination from '../../context/Pagination/usePagination';

// Material Ui
import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

/* Imports */

const ItemsList = () => {
    const { data, isLoading } = usePagination();

    const items = data?.map((i, index) => (
        <Items
            key={`ìtem-${i.id}-${index}`}
            product={i}
        />
    ));

    return (
        <>
            {isLoading ? (
                <div className='spinner-container'>
                    <CircularProgress color='success' />
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
