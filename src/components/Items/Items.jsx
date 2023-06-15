/* eslint-disable react/prop-types */
// React
import { useRef, useEffect } from 'react';

// Router Dom
import { useNavigate } from 'react-router';

// Material Ui
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    Button,
    Container,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

// Hooks
import useResizeImage from '../../utils/hooks/useResizeImage';

/* Imports */

const Item = ({ product }) => {
    const { width, height } = useResizeImage(13 * 16, 13 * 16);
    const navigateToPage = useNavigate();
    const { id, title, price, image } = product;

    return (
        <Grid
            className='items-card-container'
            xs={12}
            sm={4}
            xl={3}>
            <Card
                onClick={() => navigateToPage(`/item/${id}`)}
                className='card-item'
                sx={{ m: 0, p: 0 }}>
                <Grid
                    container
                    direction={'column'}
                    className='card-content-container'>
                    <CardActionArea className='item-action-area'>
                        <CardContent
                            className='item-card-img'
                            sx={{ m: 0, p: 0 }}>
                            <CardMedia
                                style={{ width, height }}
                                component='img'
                                image={image}
                                alt={title}
                            />
                        </CardContent>

                        <CardContent sx={{ m: 0, p: 0 }}>
                            <Typography
                                className='card-item-title'
                                component='h3'>
                                {title}
                            </Typography>

                            <Typography
                                className='card-item-rating'
                                component='p'>
                                NOT RATED
                            </Typography>

                            <Typography
                                className='card-item-price'
                                component='h4'>
                                {'$' + price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button
                        variant='contained'
                        color='secondary'
                        sx={{ height: '2rem' }}
                        fullWidth>
                        Add to cart
                    </Button>
                </Grid>
            </Card>
        </Grid>
    );
};

export default Item;
