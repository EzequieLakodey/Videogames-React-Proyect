// React
import { useContext, useEffect, useState } from 'react'

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
  const [accessGranted, setAccessGranted] = useState(true)

  useEffect(() => {
    if (cart.length === 0) {
      setAccessGranted(false)
    } else {
      setAccessGranted(true)
    }
  }, [cart])

  if (!accessGranted) {
    Redirect('/')
    return null
  }

  return (
    <div>
      <Cart />
    </div>
  )
}

export default CartPage
