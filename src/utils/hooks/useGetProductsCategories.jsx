/* eslint-disable indent */
// FireBase
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// Tanstack Query
import { useQuery } from '@tanstack/react-query';

// Router Dom
import { useParams } from 'react-router-dom';

/* Imports */

const useGetProducts = () => {
    const { categoryId } = useParams();

    const productsData = [];

    const fetchData = async () => {
        const productsCollection = !categoryId
            ? collection(db, 'Fake Store Api ')
            : query(
                  collection(db, 'Fake Store Api '),
                  where('category', '==', categoryId)
              );

        const querySnapshot = await getDocs(productsCollection);

        querySnapshot.forEach((doc) => {
            productsData.push({ ...doc.data(), id: doc.id });
        });

        return productsData;
    };

    return useQuery(['products', categoryId], fetchData);
};

export default useGetProducts;
