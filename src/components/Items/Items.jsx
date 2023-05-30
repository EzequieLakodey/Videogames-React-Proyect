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
import { AspectRatio } from '@mui/icons-material'

/* Imports */

const Item = ({ product }) => {
  const { width, height, aspectRatio } = useResizeImage(20 * 16, 20 * 16, 4 / 3)
  const navigateToPage = useNavigate()
  const { id, title, price, image } = product

  return (
    <Grid xs={12} sm={6} xl={4}>
      <CardActionArea className='card-btn-item'>
        <Card
          onClick={() => navigateToPage(`/item/${id}`)}
          className='card-item'>
          <CardContent>
            <Typography component='h5'>{title}</Typography>

            <Typography component='h6' fontSize={'2em'}>
              {Math.ceil(price) + ' $'}
            </Typography>
          </CardContent>

          <Container className='items-img-container'>
            <CardContent className='item-img-card-content'>
              <CardMedia
                style={{ width, height, aspectRatio }}
                component='img'
                image={image}
                alt={title}
                objectFit='contain'
              />
            </CardContent>
          </Container>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default Item
