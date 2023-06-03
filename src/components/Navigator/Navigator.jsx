// Material Ui
import { AppBar, Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

// Icons

import Header from './Header/Header'
import NavBar from './NavBar/NavBar'

/* Imports */

const Navigator = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container>
        <AppBar color='inherit'>
          <Grid id='header'>
            <Header />
          </Grid>

          <Grid id='navbar' mt={'1rem'}>
            <NavBar />
          </Grid>
        </AppBar>
      </Grid>
    </Container>
  )
}

export default Navigator
