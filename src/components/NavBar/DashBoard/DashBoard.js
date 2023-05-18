// React
import React, { useState } from 'react'

// Material Ui
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material'

/* Imports */

const settings = ['Profile', 'Account', 'Help', 'Settings']

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
    </div>
  )
}

export default DashBoard
