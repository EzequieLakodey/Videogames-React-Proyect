// React
import { useState } from 'react'

// Material Ui
import {
  IconButton,
  TextField,
  Button,
  CardActions,
  Container,
} from '@mui/material'

// Mui Icons
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

/* Imports */

const ItemsCounter = ({ initial, OnAdd }) => {
  const [count, setCount] = useState(initial)

  const remove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const add = () => {
    if (count >= 1) {
      setCount(count + 1)
    }
  }

  return (
    <section>
      <div>
        <IconButton onClick={remove}>
          <RemoveIcon fontSize='large' />
        </IconButton>

        <TextField
          id='filled-basic'
          label='Quantity'
          variant='filled'
          value={count}
          className='quantity-textfield'
        />

        <IconButton onClick={add}>
          <AddIcon fontSize='large' />
        </IconButton>

        <Container className='quantity-selector-container'>
          <CardActions>
            <Button variant='contained' onClick={() => OnAdd(count)}>
              Add to cart
            </Button>
          </CardActions>
        </Container>
      </div>
    </section>
  )
}

export default ItemsCounter
