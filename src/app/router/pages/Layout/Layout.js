import React from 'react'
import { grey } from 'material-ui/colors'
import Navbar from 'app/components/Navbar'
import Typography from 'material-ui/Typography'
import { Notifications } from 'pyro-components'

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
        <Typography {...{ type: 'caption' }}>
          Made with {'<3'} using{' '}
          <a
            style={{ color: 'black' }}
            target="_blank"
            href="https://github.com/emars/pyro-base"
          >
            pyro-base
          </a>
        </Typography>
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
      <Notifications.component />
    </div>
  )
}

export default Layout
