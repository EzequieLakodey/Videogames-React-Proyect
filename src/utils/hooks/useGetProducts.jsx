// FireBase
import {
    collection,
    getDocs,
    query,
    orderBy,
    limit,
    startAfter,
} from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// Tanstack Query
import { useQuery } from '@tanstack/react-query';

/* Imports */

const fetchProducts = async (itemsPerPage, pageNum) => {
    let productsQuery;
    let baseQuery = collection(db, 'Fake Store Api ');
    if (pageNum == 1) {
        productsQuery = query(baseQuery, orderBy('title'), limit(itemsPerPage));
    } else {
        const cursor = await getCursor(itemsPerPage, pageNum);
        if (cursor !== null) {
            productsQuery = query(
                baseQuery,
                orderBy('title'),
                startAfter(cursor),
                limit(itemsPerPage)
            );
        } else {
            productsQuery = query(
                baseQuery,
                orderBy('title'),
                limit(itemsPerPage)
            );
        }
    }
    const querySnapshot = await getDocs(productsQuery);

    const productsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log(
        '🚀 ~ file: useGetProducts.jsx:47 ~ productsData ~ productsData:',
        productsData
    );
    const productsLoaderLimiter = productsData.length === itemsPerPage;
    return { productsData, productsLoaderLimiter };
};
const getCursor = async (itemsPerPage, pageNum) => {
    const baseQuery = collection(db, 'Fake Store Api ');
    const cursorQuery = query(
        baseQuery,
        orderBy('title'),
        limit(pageNum === 1 ? itemsPerPage : itemsPerPage + 4)
    );
    const cursorSnapshot = await getDocs(cursorQuery);
    console.log(cursorSnapshot.docs[cursorSnapshot.docs.length - 1]);

    if (cursorSnapshot.docs.length > 0) {
        return cursorSnapshot.docs[cursorSnapshot.docs.length - 1];
    } else {
        return null;
    }
};
const useGetProducts = (itemsPerPage, pageNum) => {
    const { data, isLoading, error } = useQuery(
        ['products', itemsPerPage, pageNum],
        () => fetchProducts(itemsPerPage, pageNum)
    );
    if (error) {
        console.log`${error}`;
    }
    return {
        data: data?.productsData,
        isLoading,
        error,
        productsLoaderLimiter: data?.productsLoaderLimiter,
    };
};
export default useGetProducts;
