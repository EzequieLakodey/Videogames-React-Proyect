// Components
import ItemsListContainer from '../../components/ItemsListContainer/ItemsListContainer';
import CategorySelector from '../../components/CategorySelector/CategorySelector';

// Material Ui
import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';

/* Imports */

const ItemsCategories = () => {
    return (
        <main>
            <Container maxWidth={'lg'}>
                <Grid
                    container
                    flexDirection={'column'}
                    spacing={2}>
                    <Grid>
                        <CategorySelector />
                    </Grid>
                    <Grid>
                        <ItemsListContainer />
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
};

export default ItemsCategories;
