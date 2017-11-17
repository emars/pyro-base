import React from 'react'
import { Auth } from 'pyro-components'

const SignUp = ({ handleSignupSuccess }) => (
  <div
    {...{
      style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }
    }}
  >
    <Auth
      {...{
        isSignUp: true,
        onSuccess: user => {
          handleSignupSuccess()
        }
      }}
    />
  </div>
)

export default SignUp
