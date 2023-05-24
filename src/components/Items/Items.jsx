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
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

/* Imports */

const Item = ({ product }) => {
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

          <CardContent className='item-img-card-content'>
            <CardMedia component='img' image={image} alt={title} />
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default Item
