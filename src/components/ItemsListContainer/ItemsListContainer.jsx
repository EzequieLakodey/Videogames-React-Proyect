// Components
import ItemsList from '../ItemsList/ItemsList';

// Material Ui
import { Pagination } from '@mui/material';

// Hook
import usePagination from '../../context/Pagination/usePagination';

/* Imports */

const ItemsListContainer = () => {
    const { data, page, setPage, itemsPerPage, navigateToPage } =
        usePagination();

    return (
        <>
            <ItemsList />
            {data && data.length >= itemsPerPage ? (
                <Pagination
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        mt: '1rem',
                    }}
                    page={page}
                    count={2}
                    variant='outlined'
                    color='secondary'
                    shape='rounded'
                    onChange={(e, v) => {
                        setPage(v);
                        navigateToPage(v);
                    }}
                />
            ) : null}
        </>
    );
};
export default ItemsListContainer;
