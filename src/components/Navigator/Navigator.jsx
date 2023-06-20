// Material Ui
import { AppBar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Components
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';

/* Imports */

const Navigator = () => {
    return (
        <Grid
            container
            direction={'column'}
            rowSpacing={7.5}>
            <Grid>
                <AppBar id='header'>
                    <Header />
                </AppBar>
            </Grid>

            <Grid>
                <NavBar />
            </Grid>
        </Grid>
    );
};

export default Navigator;
