// Components
import ItemsDetails from '../ItemsDetails/ItemsDetails'

// Material Ui
import CircularProgress from '@mui/material/CircularProgress'

// Data Hook
import useGetProductDetails from '../../utils/hooks/GetProductsCategories'

/* Imports */

export const ItemsDetailsContainer = () => {
  const { isLoading } = useGetProductDetails()

  return <div>{isLoading ? <CircularProgress color='success' /> : <ItemsDetails />}</div>
}

export default ItemsDetailsContainer
