/* eslint-disable indent */
// FireBase
import {
    collection,
    getDocs,
    query,
    where,
    orderBy,
    startAfter,
    limit,
} from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// Tanstack Query
import { useInfiniteQuery } from '@tanstack/react-query';

// Router Dom
import { useParams } from 'react-router-dom';

/* Imports */

const fetchProducts = async (categoryId, itemsPerPage, pageParam) => {
    let baseQuery = collection(db, 'Fake Store Api ');

    let productsQuery;

    if (categoryId) {
        productsQuery = query(
            baseQuery,
            where('category', '==', categoryId),
            orderBy('title'),
            ...(pageParam ? [startAfter(pageParam)] : []),
            limit(itemsPerPage)
        );
    } else {
        productsQuery = query(
            baseQuery,
            orderBy('title'),
            ...(pageParam ? [startAfter(pageParam)] : []),
            limit(itemsPerPage)
        );
    }

    const querySnapshot = await getDocs(productsQuery);
    const productsData = [];
    querySnapshot.forEach((doc) => {
        productsData.push({ ...doc.data(), id: doc.id });
    });

    return productsData;
};

const useGetProducts = (itemsPerPage) => {
    const params = useParams();
    const { categoryId = '' } = params;

    const fetchData = async ({ pageParam = null }) => {
        const productsData = await fetchProducts(
            categoryId,
            itemsPerPage,
            pageParam
        );

        return productsData;
    };

    const { data, fetchNextPage, isLoading, isFetchingNextPage } =
        useInfiniteQuery(['products', categoryId, itemsPerPage], fetchData, {
            staleTime: 300000,
            cacheTime: 300000,
            getNextPageParam: (lastPage, allPages) => {
                const lastDocument = lastPage[lastPage.length - 1]?.doc;
                return lastDocument || false;
            },
        });

    const hasNextPage =
        data?.pages[data.pages.length - 1]?.length === itemsPerPage;

    return { data, isLoading, fetchNextPage, hasNextPage };
};

export default useGetProducts;
