// Components
import ItemsList from '../ItemsList/ItemsList'

// Material Ui
import CircularProgress from '@mui/material/CircularProgress'

// Data
import useGetProducts from '../../utils/hooks/GetProductsCategories'

/* Imports */

const ItemsListContainer = (categoryId) => {
  const { isLoading } = useGetProducts()

  return (
    <main>
      {isLoading ? <CircularProgress color='success' /> : <ItemsList />}
    </main>
  )
}

export default ItemsListContainer
