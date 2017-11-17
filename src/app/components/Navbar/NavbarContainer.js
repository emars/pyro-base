import { compose } from 'recompose'
import { connect } from 'react-redux'
import { pathToJS } from 'react-redux-firebase'
import { Notifications } from 'pyro-components'
import Navbar from './Navbar'

const mapStateToProps = state => ({
  loggedIn: !!pathToJS(state.firebase, 'auth')
})

const mapDispatchToProps = dispatch => ({
  handleLogout: () =>
    dispatch(Notifications.showNotification('Successfully Logged Out.'))
})

const NavbarContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  Navbar
)

export default NavbarContainer
