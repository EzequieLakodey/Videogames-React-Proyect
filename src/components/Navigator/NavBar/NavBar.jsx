// Components
import CategorySelector from '../../CategorySelector/CategorySelector'

// Router Dom
import { NavLink } from 'react-router-dom'

// Material Ui
import { Toolbar, Typography, Container, MenuItem } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

/* Imports */

function NavBar() {
  return (
    <nav>
      <Container maxWidth={'xl'} disableGutters>
        <Grid container className='navbar-grid-container'>
          <Grid className='navbar-grid-items' xs={12} sm={6} xl={6}>
            <Toolbar disableGutters>
              <NavLink to={'/'}>
                <Typography element='h1' className='nav-title'>
                  BoombleGoom
                </Typography>
              </NavLink>
            </Toolbar>
          </Grid>

          <Grid className='navbar-grid-items' xs={12} sm={6} xl={6}>
            <Toolbar disableGutters>
              <MenuItem className='navbar-menu-items' disableGutters>
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
