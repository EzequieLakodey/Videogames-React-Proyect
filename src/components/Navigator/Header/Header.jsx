// Context
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

// Components

import DashBoard from './DashBoard/DashBoard'
import Searcher from './Searcher/Searcher'

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
      <Container maxWidth={'xl'} disableGutters>
        <Grid container columns={12} className='header-grid-container'>
          <Grid className='header-grid-items' xs={12} sm={6} xl={2}>
            <Toolbar className='header-toolbar' disableGutters>
              <NavLink to={'/cart'}>
                <MenuItem className='header-menu-items' disableGutters>
                  <Tooltip title='Cart'>
                    <IconButton className='cart-btn'>
                      {CartItemCount()}
                    </IconButton>
                  </Tooltip>
                </MenuItem>
              </NavLink>

              <MenuItem className='header-menu-items' disableGutters>
                <DashBoard />
              </MenuItem>
            </Toolbar>
          </Grid>

          <Grid className='header-grid-items' xs={12} sm={6} xl={2}>
            <Toolbar className='header-toolbar' disableGutters>
              <MenuItem className='header-menu-items' disableGutters>
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
