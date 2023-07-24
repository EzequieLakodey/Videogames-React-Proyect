/* eslint-disable indent */
// React
import { createContext, useState, useEffect, useReducer } from 'react';

// React Router
import { useNavigate, useParams } from 'react-router';

// Hooks
import useGetProducts from '../../utils/hooks/useGetProducts';

export const PaginationContext = createContext();

const PaginationProvider = ({ children, initialCategoryId }) => {
    const params = useParams();
    const initialPage = Number(params.pageNum) || 1;

    const [state, dispatch] = useReducer(paginationReducer, {
        page: initialPage,
        categoryId: initialCategoryId,
    });

    const { page, categoryId } = state;

    const { data, isLoading } = useGetProducts(
        getItemsPerPage(page),
        page,
        categoryId
    );
    const navigateToPage = useNavigate();

    useEffect(() => {
        dispatch({ type: 'SET_CATEGORY_ID', categoryId: params.category });
        dispatch({ type: 'SET_PAGE', page: Number(params.pageNum || 1) });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const changeProductPage = (pageNum) => {
        const url = categoryId
            ? `/category/${categoryId}/page/${pageNum}`
            : `/page/${pageNum}`;
        navigateToPage(url);
    };

    const paginationContextValue = {
        data,
        isLoading,
        page,
        setPage: (pageNum) => dispatch({ type: 'SET_PAGE', page: pageNum }),
        itemsPerPage: getItemsPerPage(page),
        changeProductPage,
    };

    return (
        <PaginationContext.Provider value={paginationContextValue}>
            {children}
        </PaginationContext.Provider>
    );
};

const paginationReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, page: action.page };
        case 'SET_CATEGORY_ID':
            return { ...state, categoryId: action.categoryId };
        default:
            return state;
    }
};

const getItemsPerPage = (page) => {
    return page === 1 ? 12 : 8;
};

export default PaginationProvider;
