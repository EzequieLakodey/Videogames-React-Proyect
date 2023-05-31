// Components
import Items from '../Items/Items'

// Material Ui
import Grid from '@mui/material/Unstable_Grid2'

// Data Hook
import useGetProducts from '../../utils/hooks/GetProductsCategories'

/* Imports */

const ItemsList = () => {
  const { data: productsData } = useGetProducts()

  return (
    <article>
      <Grid container spacing={2} sx={{ mt: 2, mb: 2 }} maxWidth={'xl'}>
        {productsData?.map((i, index) => (
          <Items key={`item-${i.id}-${index}`} product={i} />
        ))}
      </Grid>
    </article>
  )
}

export default ItemsList
