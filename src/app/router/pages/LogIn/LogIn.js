import React from 'react'
import { Auth } from 'pyro-components'

const LogIn = () => (
  <div
    {...{
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }}
  >
    <Auth
      {...{
        isSignUp: false,
        onSuccess: user => {
          console.log('yay')
        }
      }}
    />
  </div>
)

export default LogIn
