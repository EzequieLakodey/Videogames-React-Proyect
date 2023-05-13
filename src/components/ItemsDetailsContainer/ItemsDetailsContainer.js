// Components
import ItemsDetails from '../ItemsDetails/ItemsDetails'

// Material Ui
import CircularProgress from '@mui/material/CircularProgress'

// Data Hook
import useGetProductDetails from '../../utils/Hooks/GetProductsCategories'

/* Imports */

export const ItemsDetailsContainer = () => {
  const { isLoading } = useGetProductDetails()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const docReference = doc(db, 'Fake Store Api ', id)

  //   getDoc(docReference).then(result => {
  //     setData({ ...result.data(), id: result.id })
  //   })
  // }, [id])

  return <div>{isLoading ? <CircularProgress color='success' /> : <ItemsDetails />}</div>
}

export default ItemsDetailsContainer
