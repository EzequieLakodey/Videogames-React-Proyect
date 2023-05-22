// React
import { useContext, useEffect } from 'react'

// React Router Dom
import { useNavigate } from 'react-router'

// Context
import { CartContext } from '../../contexts/CartContext'

// Components
import Cart from '../../components/Cart/Cart'

/* Imports */

function CartPage() {
  const { cart } = useContext(CartContext)
  const Redirect = useNavigate()

  useEffect(() => {
    if (cart.length === 0) {
      Redirect('/')
    }
  }, [cart, Redirect])

  if (cart === 0) {
    return null
  }

  return (
    <div>
      <Cart />
    </div>
  )
}

export default CartPage
