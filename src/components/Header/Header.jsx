// Context
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

// Components
import CategorySelector from '../CategorySelector/CategorySelector'
import DashBoard from '../DashBoard/DashBoard'
import Searcher from '../Searcher/Searcher'

// Router Dom
import { NavLink } from 'react-router-dom'

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
  Menu,
  InputBase,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

// Styles
import { styled, alpha } from '@mui/material/styles'

// Icons
import { MenuIcon, SearchIcon } from '@mui/icons-material/Menu'

/* Imports */

const Header = () => {
  const { CartItemCount } = useContext(CartContext)

  return (
    <header>
      <Grid container columns={3} maxWidth={'xl'}>
        <AppBar>
          <Toolbar>
            <Grid xl='6' sm='6' xs='6'>
              <MenuItem>
                <NavLink>
                  <IconButton>{CartItemCount()}</IconButton>
                  <Typography>Your cart</Typography>
                </NavLink>
              </MenuItem>
            </Grid>

            <Grid>
              <MenuItem>
                <Searcher />
              </MenuItem>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </header>
  )
}

export default Header
