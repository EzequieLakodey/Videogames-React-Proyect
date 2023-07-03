// React
import { useEffect, useState } from 'react';

// Components
import ItemsList from '../ItemsList/ItemsList';

// React Router
import { useParams, useNavigate } from 'react-router';

// Material Ui
import { Pagination } from '@mui/material';

/* Imports */

const ItemsListContainer = () => {
    const navigateToPage = useNavigate();
    const params = useParams();
    const initialPage = Number(params.pageNum) || 1;
    const [page, setPage] = useState(initialPage);
    const itemsPerPage = page === 1 ? 12 : 8;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <>
            <ItemsList
                itemsPerPage={itemsPerPage}
                pageNum={page}
            />

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
                    navigateToPage(`/page/${v}`);
                }}
            />
        </>
    );
};

export default ItemsListContainer;
