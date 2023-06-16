// Context
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

// Components
import ItemsCounter from '../ItemsCounter/ItemsCounter';

// React Router Dom
import { useNavigate } from 'react-router';

// Material Ui
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Data Hook
import useGetProductDetails from '../../utils/hooks/useGetProductsDetails';

/* Imports */

const ItemsDetails = () => {
    const { AddItemsToCart } = useContext(CartContext);

    const { data: productsData } = useGetProductDetails();

    const navigateToPage = useNavigate();

    const OnAdd = (count) => {
        AddItemsToCart(productsData, count);

        navigateToPage('/');
    };

    return (
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card className='card-details'>
                <CardContent>
                    <Container>
                        <Typography
                            gutterBottom
                            variant='overline'
                            component='h6'
                            fontSize={'100%'}>
                            {productsData?.title}
                        </Typography>

                        <Typography
                            gutterBottom
                            variant='overline'
                            component='h5'
                            fontSize={'100%'}>
                            {productsData?.category}
                        </Typography>
                    </Container>
                </CardContent>

                <Container className='card-detail-img'>
                    <CardMedia
                        component='img'
                        image={productsData?.image}
                        alt={'image' + productsData?.title + productsData?.id}
                    />
                </Container>

                <CardContent>
                    <Container>
                        <Typography
                            gutterBottom
                            variant='h6'
                            component='div'>
                            {productsData?.price} $
                        </Typography>
                    </Container>

                    <Container>
                        <Typography
                            variant='body'
                            color='text.secondary'>
                            {productsData?.description}
                        </Typography>
                    </Container>
                </CardContent>

                <ItemsCounter
                    initial={1}
                    OnAdd={OnAdd}></ItemsCounter>
            </Card>
        </Grid>
    );
};

export default ItemsDetails;
