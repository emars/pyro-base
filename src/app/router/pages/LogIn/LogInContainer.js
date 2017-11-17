import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Notifications } from 'pyro-components'

import LogIn from './LogIn'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  handleLoginSuccess: () => {
    dispatch(Notifications.showNotification('Successfully Logged In!'))
  }
})

const LogInContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  LogIn
)

export default LogInContainer
