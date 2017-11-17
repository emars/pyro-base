import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import { LogoutButton } from 'pyro-components'

const Navbar = ({ loggedIn, handleLogout }) => (
  <AppBar>
    <Toolbar {...{ style: { display: 'flex' } }}>
      <div {...{ style: { flex: 1 } }}>
        <Link
          {...{ to: '/', style: { textDecoration: 'none', color: 'white' } }}
        >
          <Typography {...{ color: 'inherit', type: 'title' }}>
            App Name
          </Typography>
        </Link>
      </div>
      <div>
        {loggedIn ? (
          <LogoutButton
            {...{
              color: 'inherit',
              onSuccess: () => handleLogout()
            }}
          />
        ) : (
          <div>
            <Link
              {...{
                to: '/login',
                style: { textDecoration: 'none', color: 'white' }
              }}
            >
              <Button {...{ color: 'inherit' }}>Login</Button>
            </Link>
            <Link
              {...{
                to: '/signup',
                style: { textDecoration: 'none', color: 'white' }
              }}
            >
              <Button {...{ color: 'inherit' }}>Signup</Button>
            </Link>
          </div>
        )}
      </div>
    </Toolbar>
  </AppBar>
)

export default Navbar
