import { compose } from 'recompose'
import { connect } from 'react-redux'

import LogIn from './LogIn'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const LogInContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LogIn)

export default LogInContainer