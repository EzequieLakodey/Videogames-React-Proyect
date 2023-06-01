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
  const { width, height } = useResizeImage(15 * 16, 15 * 16)
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
                style={{ width, height }}
                component='img'
                image={image}
                alt={title}
              />
            </CardContent>
          </Container>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default Item
