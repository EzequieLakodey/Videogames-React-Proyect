// Components
import ItemsList from '../ItemsList/ItemsList'

// Material Ui
import CircularProgress from '@mui/material/CircularProgress'

// Data
import useGetProducts from '../../utils/hooks/GetProductsCategories'
import Grid from '@mui/material/Unstable_Grid2'

/* Imports */

const ItemsListContainer = () => {
  const { isLoading } = useGetProducts()

  return (
    <main>
      {isLoading ? (
        <div className='spinner-container'>
          <CircularProgress color='success' />
        </div>
      ) : (
        <ItemsList />
      )}
    </main>
  )
}

export default ItemsListContainer
