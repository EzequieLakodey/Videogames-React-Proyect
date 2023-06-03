// Context
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

// Components
import CategorySelector from '../../CategorySelector/CategorySelector'

// Router Dom
import { NavLink } from 'react-router-dom'

// Material Ui
import { Toolbar, Typography, Container, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

/* Imports */

function NavBar() {
  const { CartItemCount } = useContext(CartContext)

  return (
    <nav>
      <Container maxWidth={'xl'}>
        <Grid container columns={12} className='navbar-grid-container'>
          <Grid className='navbar-grid-items'>
            <Toolbar>
              <MenuItem>
                <NavLink to={'/'} className={'home-link-container'}>
                  <Typography element='h1' className='nav-title'>
                    BoombleGoom
                  </Typography>
                </NavLink>
              </MenuItem>
            </Toolbar>
          </Grid>

          <Grid className='navbar-grid-items'>
            <Toolbar>
              <MenuItem>
                <CategorySelector />
              </MenuItem>
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    </nav>
  )
}

export default NavBar
