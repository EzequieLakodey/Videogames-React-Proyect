// Components
import ItemsListContainer from '../../components/ItemsListContainer/ItemsListContainer';
import Shop from '../../components/Shop/Shop';

// Material Ui
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

/* Imports */

const Home = () => {
    return (
        <main>
            <Container maxWidth={'lg'}>
                <Grid
                    mt={2}
                    container
                    flexDirection={'column'}
                    rowSpacing={5}>
                    <Grid
                        sx={{
                            borderTop: '0.1rem solid #f0efed',
                            borderBottom: '0.1rem solid #f0efed',
                        }}>
                        <Shop />
                    </Grid>

                    <Grid>
                        <ItemsListContainer />
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

export default Home;
