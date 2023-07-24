// FireBase
import {
    collection,
    getDocs,
    query,
    orderBy,
    limit,
    startAfter,
    where,
} from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// Tanstack Query
import { useQuery } from '@tanstack/react-query';

/* Imports */

const fetchProducts = async (itemsPerPage, pageNum, categoryId) => {
    let productsQuery;
    let baseQuery = collection(db, 'Fake Store Api ');
    const cursorIndex = (pageNum - 1) * itemsPerPage;

    if (categoryId) {
        baseQuery = query(baseQuery, where('category', '==', categoryId));
    }

    if (cursorIndex > 0) {
        const cursorQuery = query(
            baseQuery,
            orderBy('title'),
            limit(cursorIndex)
        );
        const cursorSnapshot = await getDocs(cursorQuery);
        const cursor = cursorSnapshot.docs[cursorSnapshot.docs.length - 1];
        console.log('Cursor:', cursor.data());
        productsQuery = query(
            baseQuery,
            orderBy('title'),
            startAfter(cursor),
            limit(itemsPerPage)
        );
    } else {
        productsQuery = query(baseQuery, orderBy('title'), limit(itemsPerPage));
    }

    const querySnapshot = await getDocs(productsQuery);
    const productsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    const productsLoaderLimiter = productsData.length === itemsPerPage;
    return { productsData, productsLoaderLimiter };
};

const useGetProducts = (itemsPerPage, pageNum, categoryId) => {
    const { data, isLoading, error } = useQuery(
        ['products', itemsPerPage, pageNum, categoryId],
        () => fetchProducts(itemsPerPage, pageNum, categoryId)
    );

    if (error) {
        `${error}`;
    }

    return {
        data: data?.productsData,
        isLoading,
        error,
        productsLoaderLimiter: data?.productsLoaderLimiter,
    };
};

export default useGetProducts;
