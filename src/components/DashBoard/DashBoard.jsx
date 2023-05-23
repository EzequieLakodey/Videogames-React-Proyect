// React
import { useState } from 'react'
// Material Ui
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material'

// React Router Dom
import { NavLink } from 'react-router-dom'

// Auth0
import { useAuth0 } from '@auth0/auth0-react'

/* Imports */

const settings = ['Sign in', 'Account', 'Help', 'Settings']

const DashBoard = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <div className='dashboard-container'>
      <Box>
        <Tooltip title='Open settings'>
          <IconButton className='settings-btn' onClick={handleOpenUserMenu}>
            <Avatar src={user?.picture} alt='User profile image' />
          </IconButton>
        </Tooltip>
      </Box>
      <Box>
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
          {settings.map((setting, index) => (
            <MenuItem key={index} onClick={handleCloseUserMenu}>
              {index === 0 ? (
                isAuthenticated ? (
                  <NavLink onClick={() => logout()}>Log out</NavLink>
                ) : (
                  <NavLink onClick={() => loginWithRedirect()}>Sign in</NavLink>
                )
              ) : index === 1 && isAuthenticated ? (
                <NavLink to={'/user'}>Account</NavLink>
              ) : (
                <Typography textAlign='center'>{setting}</Typography>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  )
}

export default DashBoard
