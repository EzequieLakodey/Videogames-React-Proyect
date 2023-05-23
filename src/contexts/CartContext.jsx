// React
import { createContext, useEffect, useState } from 'react'

// Router Dom
import { useNavigate } from 'react-router'

// Material Ui
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

/* Imports */

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const navigateToPage = useNavigate()
  const CartItemCount = () => {
    let total = 0
    cart.forEach((item) => {
      total += item.count
    })

    return (
      <Badge badgeContent={total} color='info'>
        <ShoppingCartIcon
          fontSize='large'
          onClick={() => navigateToPage('/cart')}
        />
      </Badge>
    )
  }
  const AddItemsToCart = (data, count) => {
    const existingItem = cart.find((item) => item.id === data.id)

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) => {
          if (item.id === data.id) {
            return { ...item, count: item.count + count }
          } else {
            return item
          }
        })
      )
    } else {
      setCart((prevCart) => [...prevCart, { ...data, count }])
    }
  }

  const removeItemFromCart = (data) => {
    const refreshCart = cart.filter((i) => i.id !== data.id)
    setCart(refreshCart)
    localStorage.removeItem('cart')
  }

  const clearCart = () => {
    setCart([])
    navigateToPage('/')
  }

  useEffect(() => {
    const getStoredCart = localStorage.getItem('cart')
    if (getStoredCart) {
      setCart(JSON.parse(getStoredCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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
  )
}
