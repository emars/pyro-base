import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import { grey } from 'material-ui/colors'

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

const Footer = () => (
  <div
    {...{
      style: {
        width: '100%',
        height: 200,
        backgroundColor: grey[100],
        display: 'flex',
        justifyContent: 'space-around'
      }
    }}
  >
    <div
      {...{
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}
    >
      <div
        {...{
          style: {
            margin: 4
          }
        }}
      >
        <Typography {...{ type: 'caption' }}>
          Copyright {new Date().getFullYear()}
        </Typography>
      </div>
      <div
        {...{
          style: {
            margin: 4
          }
        }}
      >
        <Typography {...{ type: 'caption' }}>Made with {'<3'}</Typography>
      </div>
    </div>
  </div>
)

const Layout = ({ children }) => {
  return (
    <div {...{ style: { flex: 1, display: 'flex', flexDirection: 'column' } }}>
      <Navbar />
      <div
        {...{
          style: {
            marginTop: 100,
            marginRight: 'auto',
            marginLeft: 'auto',
            width: 960,
            flex: 1
          }
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
