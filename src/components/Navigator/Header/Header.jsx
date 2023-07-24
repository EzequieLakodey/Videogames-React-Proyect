// Context
import { useContext } from 'react';
import { CartContext } from '../../../context/Cart/CartContext';

// Components
import DashBoard from './DashBoard/DashBoard';
import Searcher from './Searcher/Searcher';

// Router Dom
import { NavLink } from 'react-router-dom';

// Material Ui
import {
    Toolbar,
    IconButton,
    Container,
    Tooltip,
    MenuItem,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

/* Imports */

const Header = () => {
    const { CartItemCount } = useContext(CartContext);
    return (
        <header>
            <Container
                maxWidth={'lg'}
                className='header-container'>
                <Grid
                    container
                    className='header-grid-container'>
                    <Grid
                        className='header-grid-items'
                        xs={12}
                        sm={1}
                        xl={1}
                        justifyContent='flex-start'>
                        <Toolbar
                            disableGutters
                            className='header-toolbar'>
                            <NavLink to={'/cart'}>
                                <MenuItem
                                    disableGutters
                                    className='header-menu-items'>
                                    <Tooltip title='Cart'>
                                        <IconButton className='cart-btn'>
                                            {CartItemCount()}
                                        </IconButton>
                                    </Tooltip>
                                </MenuItem>
                            </NavLink>

                            <MenuItem className='header-menu-items'>
                                <DashBoard />
                            </MenuItem>
                        </Toolbar>
                    </Grid>

                    <Grid
                        className='header-grid-items'
                        xs={12}
                        sm={1}
                        xl={1}
                        justifyContent='flex-end'>
                        <Toolbar
                            disableGutters
                            className='header-toolbar'>
                            <MenuItem
                                disableGutters
                                className='header-menu-items'>
                                <Searcher />
                            </MenuItem>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};

export default Header;
