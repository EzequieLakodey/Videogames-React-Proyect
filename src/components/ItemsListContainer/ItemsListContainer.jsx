// Components
import ItemsList from "../ItemsList/ItemsList";
import { useGetProducts } from "../../utils/hooks/useGetProducts";
import { useParams } from "react-router";
/* Imports */

const ItemsListContainer = () => {
    const { categoryId } = useParams();
    const { data, isLoading, error } = useGetProducts(categoryId);

    console.log("🚀 ~ ItemsListContainer ~ data:", data);

    return (
        <>
            <ItemsList
                isLoading={isLoading}
                data={data}
                error={error}
            />
        </>
    );
};
export default ItemsListContainer;
