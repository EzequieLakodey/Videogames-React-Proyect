// React
import * as React from 'react'
import { useContext } from 'react'

// Context
import { CartContext } from '../../contexts/CartContext'

// Components
import CategorySelector from './CategorySelector/CategorySelector'

// Router Dom
import { Link } from 'react-router-dom'

// Material Ui
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material'

/* Imports */

const settings = ['Profile', 'Account', 'Help', 'Settings']

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const { GetItemsCount } = useContext(CartContext)

  return (
    <header>
      <AppBar position='relative' color='inherit'>
        <Toolbar className='navbar-toolbar' disableGutters>
          <Container className='navbar-container' maxWidth='1'>
            <Link to={'/'}>
              <Typography className='nav-title' variant='h1' element='h1'>
                BoombleGoom
              </Typography>
            </Link>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flex: '1',
                marginTop: 0.5,
              }}>
              <CategorySelector />
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flex: '1',
                }}>
                <MenuItem>
                  <Tooltip title='View cart'>
                    <IconButton>{GetItemsCount()}</IconButton>
                  </Tooltip>
                </MenuItem>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flex: '1',
                  mr: '3rem',
                }}>
                <Tooltip title='Open settings'>
                  <IconButton className='settings-btn' onClick={handleOpenUserMenu}>
                    <Avatar alt='User profile image' />
                  </IconButton>
                </Tooltip>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                  flex: '1',
                }}>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default NavBar
