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
      <Container maxWidth={'lg'}>
        <Grid container className='navbar-grid-container' alignItems='center'>
          <Grid
            className='navbar-grid-items'
            xs={12}
            sm={6}
            xl={6}
            justifyContent='flex-start'>
            <Toolbar disableGutters className='navbar-toolbar'>
              <NavLink to={'/'}>
                <Typography element='h1' className='nav-title'>
                  BoombleGoom
                </Typography>
              </NavLink>
            </Toolbar>
          </Grid>

          <Grid
            className='navbar-grid-items'
            xs={12}
            sm={6}
            xl={6}
            justifyContent='flex-end'>
            <Toolbar disableGutters className='navbar-toolbar'>
              <MenuItem disableGutters className='navbar-menu-items'>
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
