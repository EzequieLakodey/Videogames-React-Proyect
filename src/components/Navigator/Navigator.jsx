// Material Ui
import { AppBar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

// Icons

import Header from './Header/Header'
import NavBar from './NavBar/NavBar'

/* Imports */

const Navigator = () => {
  return (
    <Grid container direction={'column'}>
      <Grid>
        <AppBar id='header' color='inherit' position='fixed'>
          <Header />
        </AppBar>
      </Grid>

      <Grid mt={7.5}>
        <NavBar />
      </Grid>
    </Grid>
  )
}

export default Navigator
