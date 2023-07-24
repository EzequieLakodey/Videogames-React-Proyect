// React
import { createContext, useEffect, useState } from 'react';

// Router Dom
import { useNavigate } from 'react-router';

// Material Ui
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// PropTypes
import PropTypes from 'prop-types';

/* Imports */

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigateToPage = useNavigate();

    const CartItemCount = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.count;
        });

        return (
            <Badge
                badgeContent={total}
                sx={{ color: 'rgba(255,255,255,0.5)' }}>
                <ShoppingCartIcon
                    onClick={() => navigateToPage('/cart')}
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                    className='cart-icon'
                />
            </Badge>
        );
    };
    const AddItemsToCart = (data, count) => {
        const existingItem = cart.find((item) => item.id === data.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) => {
                    if (item.id === data.id) {
                        return { ...item, count: item.count + count };
                    } else {
                        return item;
                    }
                })
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...data, count }]);
        }
    };

    const removeItemFromCart = (data) => {
        const refreshCart = cart.filter((i) => i.id !== data.id);
        setCart(refreshCart);
        localStorage.removeItem('cart');
    };

    const clearCart = () => {
        setCart([]);
        navigateToPage('/');
    };

    useEffect(() => {
        const getStoredCart = localStorage.getItem('cart');
        if (getStoredCart) {
            setCart(JSON.parse(getStoredCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                AddItemsToCart,
                CartItemCount,
                removeItemFromCart,
                clearCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
