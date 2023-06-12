/* eslint-disable react/prop-types */
// Router Dom
import { useNavigate } from 'react-router'

// Material Ui
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

// Hooks
import useResizeImage from '../../utils/hooks/useResizeImage'

/* Imports */

const Item = ({ product }) => {
  const { width, height } = useResizeImage(13 * 16, 13 * 16)
  const navigateToPage = useNavigate()
  const { id, title, price, image } = product

  return (
    <Grid className='items-card-container' xs={12} sm={4} xl={3}>
      <Card onClick={() => navigateToPage(`/item/${id}`)} className='card-item'>
        <Grid container direction={'column'} className='card-content-container'>
          <CardActionArea>
            <CardContent className='item-card-img'>
              <CardMedia
                style={{ width, height }}
                component='img'
                image={image}
                alt={title}
              />
            </CardContent>

            <CardContent>
              <Typography className='card-item-title' component='h3'>
                {title}
              </Typography>

              <Typography className='card-item-rating' component='p'>
                NOT RATED
              </Typography>

              <Typography className='card-item-price' component='h4'>
                {'$' + price}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardContent className='item-btn'>
            <Button variant='contained' color='secondary' fullWidth>
              Add to cart
            </Button>
          </CardContent>
        </Grid>
      </Card>
    </Grid>
  )
}

export default Item
