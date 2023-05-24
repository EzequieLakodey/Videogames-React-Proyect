// React
import { useState } from 'react'
// Material Ui
import { Box, IconButton, Menu, Avatar, Tooltip, MenuItem } from '@mui/material'

// React Router Dom
import { NavLink } from 'react-router-dom'

// Auth0
import { useAuth0 } from '@auth0/auth0-react'

/* Imports */

const DashBoard = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const settings = isAuthenticated
    ? ['Log out', 'Account', 'Settings', 'Help']
    : ['Sign in', 'Markers', 'History', 'Settings', 'Help']

  return (
    <div className='dashboard-container'>
      <Box>
        <Tooltip title='Open settings'>
          <IconButton className='settings-btn' onClick={handleOpenUserMenu}>
            <Avatar src={user?.picture} alt='User profile image' />
          </IconButton>
        </Tooltip>
      </Box>
      <Box className='user-settings-container'>
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
              ) : null}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  )
}

export default DashBoard
