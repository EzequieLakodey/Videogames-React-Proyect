// FireBase
import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// Tanstack Query
import { useQuery } from '@tanstack/react-query';

const useGetCategories = () => {
    const fetchData = async () => {
        const categoriesCollection = collection(db, 'Fake Store Api ');
        const querySnapshot = await getDocs(categoriesCollection);
        const categoriesData = [];

        querySnapshot.forEach((doc) => {
            categoriesData.push(doc.data().category);
        });

        return [...new Set(categoriesData)];
    };

    return useQuery(['categories'], fetchData);
};

export default useGetCategories;
