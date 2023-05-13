// Components
import Items from '../Items/Items'

// Material Ui
import Grid from '@mui/material/Unstable_Grid2'

// Data Hook
import useGetProducts from '../../utils/Hooks/GetProductsCategories'

/* Imports */

const ItemsList = () => {
  const { data: productsData } = useGetProducts()

  return (
    <article>
      <Grid container spacing={5} sx={{ marginTop: 5 }}>
        {productsData?.map(i => (
          <Items key={i.id} product={i} />
        ))}
      </Grid>
    </article>
  )
}

export default ItemsList
