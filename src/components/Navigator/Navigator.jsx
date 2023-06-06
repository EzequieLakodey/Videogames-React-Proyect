// Material Ui
import { AppBar, Container, Grid, Box } from '@mui/material'

// Icons

import Header from './Header/Header'
import NavBar from './NavBar/NavBar'

/* Imports */

const Navigator = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container direction={'column'}>
        <Grid>
          <AppBar id='header' color='inherit' position='fixed'>
            <Header />
          </AppBar>
        </Grid>

        <Grid mt={'5rem'}>
          <NavBar />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Navigator
