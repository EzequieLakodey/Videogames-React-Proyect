// React
import React, { useState } from 'react'

// Material Ui
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material'

// React Router Dom
import { Link } from 'react-router-dom'

/* Imports */

const settings = ['Sign in', 'Account', 'Help', 'Settings']

const DashBoard = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <div>
      <Box>
        <Tooltip title='Open settings'>
          <IconButton className='settings-btn' onClick={handleOpenUserMenu}>
            <Avatar alt='User profile image' />
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
                <Link to='/register'>Sign in</Link>
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
