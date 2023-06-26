// Components
import ItemsList from '../ItemsList/ItemsList';

/* Imports */

const ItemsListContainer = () => {
    const itemsPerPage = 12;

    return <ItemsList itemsPerPage={itemsPerPage} />;
};

export default ItemsListContainer;
