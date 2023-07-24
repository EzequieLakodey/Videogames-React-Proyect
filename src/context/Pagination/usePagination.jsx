// Context
import { useContext } from 'react';
import { PaginationContext } from './PaginationContext';

const usePagination = () => {
    const context = useContext(PaginationContext);
    if (context === undefined) {
        throw new Error('pagination undefined');
    }
    return context;
};

export default usePagination;
