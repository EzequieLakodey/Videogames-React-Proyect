// Components
import Items from '../Items/Items';

// Data Hook
import useGetProducts from '../../utils/hooks/useGetProducts';

// Material Ui
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Unstable_Grid2';

// React Paginate
import ReactPaginate from 'react-paginate';

// PropTypes
import PropTypes from 'prop-types';

/* Imports */

const ItemsList = ({ itemsPerPage }) => {
    const { data, isLoading, fetchNextPage, hasNextPage } =
        useGetProducts(itemsPerPage);

    const items = data?.pages.map((page) =>
        page.map((i, index) => (
            <Items
                key={`ìtem-${i.id}-${index}`}
                product={i}
            />
        ))
    );

    const handlePageChange = () => {
        fetchNextPage();
    };

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
            <ReactPaginate
                pageCount={
                    hasNextPage ? data?.pages.length + 1 : data?.pages.length
                }
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
                initialPage={0}
            />
        </>
    );
};

ItemsList.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
};

export default ItemsList;
