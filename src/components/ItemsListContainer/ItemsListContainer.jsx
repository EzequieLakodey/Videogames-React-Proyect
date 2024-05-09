// Components
import ItemsList from '../ItemsList/ItemsList';

import useGetProducts from '../../utils/hooks/useGetProducts';

/* Imports */

const ItemsListContainer = () => {
    const { data, isLoading } = useGetProducts();
    console.log('🚀 ~ ItemsListContainer ~ data:', data);

    return (
        <>
            <ItemsList
                isLoading={isLoading}
                data={data}
            />
        </>
    );
};
export default ItemsListContainer;
