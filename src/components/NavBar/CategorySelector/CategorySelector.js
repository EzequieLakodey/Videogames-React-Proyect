// React
import { useEffect, useState } from 'react'

// Router Dom
import { Link, useParams } from 'react-router-dom'

// Material Ui
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material'

// Data Hook
import useGetProducts from '../../../utils/Hooks/GetProductsCategories'

const CategorySelector = () => {
  const { data: productsData } = useGetProducts()
  const { categoryId } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(categoryId || '')

  useEffect(() => {
    setSelectedCategory(categoryId || '')
  }, [categoryId])

  const refreshCategoryId = e => {
    setSelectedCategory(e.target.value)
  }

  let categories = []

  if (productsData) {
    categories = [...new Set(productsData.map(item => item.category))]
  }
  return (
    <div>
      <FormControl
        sx={{
          width: '11rem',
        }}>
        <InputLabel>Category</InputLabel>

        <Select label='Category' value={selectedCategory} onChange={refreshCategoryId}>
          <MenuItem
            value={'All'}
            key={''}
            sx={{
              display: 'flex',
              flex: '1',
              justifyContent: 'space-around',
              margin: 0,
              padding: 0,
              height: '2.5rem',
            }}>
            <Link
              to={`/`}
              style={{
                display: 'flex',
                flex: '1',
                fontSize: '1rem',
                justifyContent: 'space-around',
                textAlign: 'center',
                margin: 0,
                padding: 0,
              }}>
              All
            </Link>
          </MenuItem>

          {categories?.map(category => (
            <MenuItem
              value={category}
              key={category}
              sx={{
                display: 'flex',
                flex: '1',
                justifyContent: 'space-around',
                margin: 0,
                padding: 0,
                height: '2.5rem',
              }}>
              <Link
                to={`/category/${category}`}
                style={{
                  display: 'flex',
                  flex: '1',
                  fontSize: '1rem',
                  justifyContent: 'space-around',
                  textAlign: 'center',
                  margin: 0,
                  padding: 0,
                }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default CategorySelector
