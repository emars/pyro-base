import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import { Link } from 'react-router-dom'

const Navbar = () => (
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
    </Toolbar>
  </AppBar>
)

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div
        {...{
          style: {
            marginTop: 100,
            marginRight: 'auto',
            marginLeft: 'auto',
            width: 960
          }
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
