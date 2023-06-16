// FireBase
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/FireBaseConfig';

// TanStack Query
import { useQuery } from '@tanstack/react-query';

// Router Dom
import { useParams } from 'react-router';

const useGetProductDetails = () => {
    const { id } = useParams();

    const getDetails = async () => {
        const docReference = doc(db, 'Fake Store Api ', id);

        const result = await getDoc(docReference);

        return { ...result.data(), id: result.id };
    };
    return useQuery(['products', id], getDetails);
};

export default useGetProductDetails;
