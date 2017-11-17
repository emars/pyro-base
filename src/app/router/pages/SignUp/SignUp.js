import React from 'react'
import { Auth } from 'pyro-components'

const SignUp = () => (
  <div
    {...{
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }}
  >
    <Auth
      {...{
        isSignUp: true,
        onSuccess: user => {
          console.log('yay')
        }
      }}
    />
  </div>
)

export default SignUp
