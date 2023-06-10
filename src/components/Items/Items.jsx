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
  Container,
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
    <Grid
      xs={12}
      sm={4}
      xl={3}
      direction={'column'}
      className='items-card-container'>
      <CardActionArea className='card-btn-item'>
        <Card
          onClick={() => navigateToPage(`/item/${id}`)}
          className='card-item'>
          <Grid justifyContent={'flex-start'} alignContent={'center'}>
            <CardContent className='item-img-card-content '>
              <CardMedia
                style={{ width, height }}
                component='img'
                image={image}
                alt={title}
              />
            </CardContent>
          </Grid>

          <Grid justifyContent={'flex-end'} alignContent={'center'}>
            <CardContent>
              <Typography className='card-item-title' component='h3'>
                {title}
              </Typography>

              <Typography className='card-item-price' component='h4'>
                {'$' + price}
              </Typography>
            </CardContent>
          </Grid>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default Item
