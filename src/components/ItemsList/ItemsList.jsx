// Components
import Items from '../Items/Items';

// Data Hook
import useGetProducts from '../../utils/hooks/useGetProducts';

// Material Ui
import { Button, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// PropTypes
import PropTypes from 'prop-types';

// React Router
import { useNavigate } from 'react-router';

/* Imports */

const ItemsList = ({ itemsPerPage, pageNum }) => {
    const navigateToPage = useNavigate();
    const { data, isLoading, productsLoaderLimiter } = useGetProducts(
        itemsPerPage,
        pageNum
    );

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

ItemsList.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    pageNum: PropTypes.number.isRequired,
};

export default ItemsList;
