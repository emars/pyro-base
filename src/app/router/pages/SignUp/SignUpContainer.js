import { compose } from 'recompose'
import { connect } from 'react-redux'

import SignUp from './SignUp'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

const SignUpContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SignUp)

export default SignUpContainer