import React from 'react'
import { Auth } from 'pyro-components'

const LogIn = ({ handleLoginSuccess }) => (
  <div
    {...{
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }}
  >
    <Auth
      {...{
        isSignUp: false,
        onSuccess: user => {
          handleLoginSuccess()
        }
      }}
    />
  </div>
)

export default LogIn
