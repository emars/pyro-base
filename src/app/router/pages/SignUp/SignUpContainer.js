import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Notifications } from 'pyro-components'

import SignUp from './SignUp'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleSignupSuccess: () => {
    dispatch(Notifications.showNotification('Successfully Signed Up!'))
  }
})

const SignUpContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  SignUp
)

export default SignUpContainer
