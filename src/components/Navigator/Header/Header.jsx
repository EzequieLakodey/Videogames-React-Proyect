// Context
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

// Components

import DashBoard from '../../DashBoard/DashBoard'
import Searcher from '../../Searcher/Searcher'

// Router Dom
import { NavLink } from 'react-router-dom'

// Material Ui
import {
  Toolbar,
  IconButton,
  Container,
  Tooltip,
  MenuItem,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

/* Imports */

const Header = () => {
  const { CartItemCount } = useContext(CartContext)

  return (
    <header>
      <Container maxWidth={'xl'}>
        <Grid columns={12} container className='header-grid-container'>
          <Grid className='header-grid-items'>
            <Toolbar className='header-toolbar'>
              <MenuItem className='header-menu-items'>
                <NavLink to={'/cart'}>
                  <Tooltip title='Cart'>
                    <IconButton>{CartItemCount()}</IconButton>
                  </Tooltip>
                </NavLink>
              </MenuItem>

              <MenuItem className='header-menu-items'>
                <DashBoard />
              </MenuItem>
            </Toolbar>
          </Grid>

          <Grid className='header-grid-items'>
            <Toolbar className='header-toolbar'>
              <MenuItem className='header-menu-items'>
                <Searcher />
              </MenuItem>
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
