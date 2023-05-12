// React
import { createContext, useState } from 'react'

// Router Dom
import { useNavigate } from 'react-router'

// Material Ui
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

/* Imports */

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const Redirect = useNavigate()

  const AddItemsToCart = (data, count) => {
    const existingItem = cart.find(item => item.id === data.id)

    if (existingItem) {
      setCart(
        cart.map(item => {
          if (item.id === data.id) {
            return { ...item, count: item.count + count }
          } else {
            return item
          }
        })
      )
    } else {
      setCart([...cart, { ...data, count }])
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart))

  const removeItems = data => {
    const refreshCart = cart.filter(i => i.id !== data.id)
    setCart(refreshCart)
    localStorage.removeItem('cart', cart)
  }

  const emptyCart = () => {
    setCart([])
    Redirect('/')
  }

  function GetItemsCount() {
    let total = 0
    cart.forEach(item => {
      total += item.count
    })

    return (
      <Badge badgeContent={total} color='info'>
        <ShoppingCartIcon fontSize='large' onClick={() => Redirect('/cart')} />
      </Badge>
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        AddItemsToCart,
        GetItemsCount,
        removeItems,
        emptyCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}
