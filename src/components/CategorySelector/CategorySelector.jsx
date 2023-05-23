/* eslint-disable react/react-in-jsx-scope */
// React
import { useEffect, useState } from 'react'

// Router Dom
import { NavLink, useParams } from 'react-router-dom'

// Material Ui
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material'

// Data Hook
import useGetProducts from '../../utils/hooks/GetProductsCategories'

const CategorySelector = () => {
  const { data: productsData } = useGetProducts()
  const { categoryId } = useParams()
  const [selectedCategory, setSelectedCategory] = useState(categoryId || '')

  useEffect(() => {
    setSelectedCategory(categoryId || '')
  }, [categoryId])

  const refreshCategoryId = (e) => {
    setSelectedCategory(e.target.value)
  }

  let categories = []

  if (productsData) {
    categories = [...new Set(productsData.map((item) => item.category))]
  }
  return (
    <div>
      <FormControl className='category-selector-container'>
        <InputLabel>Category</InputLabel>

        <Select
          className='category-selector'
          label='Category'
          value={selectedCategory}
          onChange={refreshCategoryId}>
          <MenuItem
            className='categories-options-container'
            value={'All'}
            sx={{ m: 0, p: 0 }}
            key='menu-item-all'>
            <NavLink to={'/'} className='categories-menu-links'>
              All
            </NavLink>
          </MenuItem>

          {categories?.map((category) => (
            <MenuItem
              className='categories-options-container'
              value={category}
              sx={{ m: 0, p: 0 }}
              key={`menu-item-${category}`}>
              <NavLink
                className='categories-menu-links'
                to={`/category/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default CategorySelector
