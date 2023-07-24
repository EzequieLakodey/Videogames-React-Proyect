// React
import { useContext, useEffect } from 'react';

// React Router Dom
import { useNavigate } from 'react-router';

// Context
import { CartContext } from '../../context/Cart/CartContext';

// Components
import Cart from '../../components/Cart/Cart';

/* Imports */

function CartPage() {
    const { cart } = useContext(CartContext);
    const navigateToPage = useNavigate();

    useEffect(() => {
        if (cart.length === 0) {
            navigateToPage('/');
        }
    }, [cart, navigateToPage]);

    if (cart === 0) {
        return null;
    }

    return (
        <div>
            <Cart />
        </div>
    );
}

export default CartPage;
