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
    ? [
        {
          label: 'Log out',
          path: null,
        },
        {
          label: 'Account',
          path: `${user?.nickname}/account`,
        },
        { label: 'Markers', path: `${user?.nickname}/markers` },
        { label: 'History', path: `${user?.nickname}/history` },
        { label: 'Settings', path: `${user?.nickname}/settings` },
        { label: 'Help', path: `${user?.nickname}/help` },
      ]
    : [
        { label: 'Sign in', path: `${user?.nickname}/login` },
        { label: 'Settings', path: `${user?.nickname}/settings` },
        { label: 'Help', path: `${user?.nickname}/help` },
      ]

  const handleMenuItemClick = (index) => {
    if (isAuthenticated && settings[index].label === 'Log out') {
      logout()
    } else if (!isAuthenticated && settings[index].label === 'Sign in') {
      loginWithRedirect()
    } else {
      handleCloseUserMenu()
    }
  }

  return (
    <div className='dashboard-container'>
      <Box>
        <Tooltip title='Open settings'>
          <IconButton className='settings-btn' onClick={handleOpenUserMenu}>
            <Avatar
              src={user?.picture}
              alt='User profile image'
              className='dashboard-user-icon'
            />
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
          {settings.map((link, index) => (
            <MenuItem
              key={index}
              onClick={() => handleMenuItemClick(index)}
              component={NavLink}
              to={link.path}>
              {link.label}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </div>
  )
}

export default DashBoard
