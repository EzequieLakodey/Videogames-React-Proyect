// FireBase
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// Tanstack Query
import { useQuery } from '@tanstack/react-query';

/* Imports */

// useGetProducts.jsx

const fetchProducts = async () => {
    let consultaBaseFirestore = collection(db, 'Fake Store Api ');
    const capturaDeConsulta = await getDocs(consultaBaseFirestore);
    const productos = capturaDeConsulta.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log('🚀 ~ productos ~ productos:', productos);
    return { productos };
};

const useGetProducts = () => {
    const { data, isLoading, error } = useQuery(['products'], () =>
        fetchProducts()
    );
    return {
        data: data?.productos,
        isLoading,
        error,
    };
};

export default useGetProducts;
