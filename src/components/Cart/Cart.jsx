/* eslint-disable react/react-in-jsx-scope */
// React
import { useContext } from 'react'

// React Router Dom
import { useNavigate } from 'react-router'

// Material ui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  Button,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import RemoveIcon from '@mui/icons-material/Remove'

// Context
import { CartContext } from '../../contexts/CartContext'

/* Imports */

const Cart = () => {
  const { cart, removeItemFromCart, emptyCart } = useContext(CartContext)
  const navigateToPage = useNavigate()
  const hasItems = cart.length > 0

  return (
    <article className='cart-container'>
      <Grid mt={'5rem'} maxWidth={1}>
        {cart.map((i, index) => (
          <Card>
            <CardActionArea>
              <CardContent className='cart-cards'>
                <CardMedia
                  component='img'
                  image={i.image}
                  alt={i.title}
                  className='cart-img'
                />

                <Container className='cart-typography-container'>
                  <Typography variant='inherit' component='p'>
                    {i.title}
                  </Typography>

                  <Typography variant='inherit' component='p'>
                    Qty {i.count} ({Math.ceil(i.price)}$)
                  </Typography>

                  <Typography variant='inherit' component='p'>
                    Total {Math.ceil(i.price) * i.count + ' $'}
                  </Typography>
                </Container>

                <RemoveIcon
                  fontSize='large'
                  onClick={() => {
                    removeItemFromCart(i)
                  }}
                />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}

        <Container className='cart-btns-container'>
          {hasItems && (
            <Button
              className='cart-proceed-btn'
              variant='outlined'
              onClick={() => {
                navigateToPage('/order')
              }}>
              Proceed
            </Button>
          )}

          {hasItems && (
            <Button
              variant='outlined'
              onClick={emptyCart}
              className='cart-clear-btn'>
              Clear cart
            </Button>
          )}
        </Container>
      </Grid>
    </article>
  )
}

export default Cart
