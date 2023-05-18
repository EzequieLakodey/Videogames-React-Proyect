// React
import * as React from 'react'
import { useContext } from 'react'

// Context
import { CartContext } from '../../contexts/CartContext'

// Components
import CategorySelector from './CategorySelector/CategorySelector'
import DashBoard from './DashBoard/DashBoard'

// Router Dom
import { Link } from 'react-router-dom'

// Material Ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Tooltip,
  MenuItem,
} from '@mui/material'

/* Imports */

function NavBar() {
  const { GetItemsCount } = useContext(CartContext)

  return (
    <header>
      <AppBar position='relative' color='inherit'>
        <Toolbar className='navbar-toolbar' disableGutters>
          <Container className='navbar-container' maxWidth='1'>
            <Link to={'/'}>
              <Typography className='nav-title' variant='h1' element='h1'>
                BoombleGoom
              </Typography>
            </Link>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flex: '1',
                marginTop: 0.5,
              }}>
              <CategorySelector />
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flex: '1',
                }}>
                <MenuItem>
                  <Tooltip title='View cart'>
                    <IconButton>{GetItemsCount()}</IconButton>
                  </Tooltip>
                </MenuItem>
              </Box>

              <DashBoard />
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default NavBar
