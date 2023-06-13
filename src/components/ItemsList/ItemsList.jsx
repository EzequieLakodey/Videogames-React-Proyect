// Components
import Items from '../Items/Items'

// Material Ui
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from '@mui/material'

// Data Hook
import useGetProducts from '../../utils/hooks/GetProductsCategories'

/* Imports */

const ItemsList = () => {
  const { data: productsData } = useGetProducts()

  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={2}>
        {productsData?.map((i, index) => (
          <Items key={`item-${i.id}-${index}`} product={i} />
        ))}
      </Grid>
    </Container>
  )
}

export default ItemsList
