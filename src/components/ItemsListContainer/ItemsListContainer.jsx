// Components
import ItemsList from '../ItemsList/ItemsList';

// Material Ui
import CircularProgress from '@mui/material/CircularProgress';

// Data
import useGetProducts from '../../utils/hooks/useGetProductsCategories';
import Grid from '@mui/material/Unstable_Grid2';

/* Imports */

const ItemsListContainer = () => {
    const { isLoading } = useGetProducts();

    return (
        <>
            {isLoading ? (
                <div className='spinner-container'>
                    <CircularProgress color='success' />
                </div>
            ) : (
                <ItemsList />
            )}
        </>
    );
};

export default ItemsListContainer;
