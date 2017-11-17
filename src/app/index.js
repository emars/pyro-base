/**
 * The application entry point, mounts the app to the page.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from 'material-ui/styles'
import { FirebaseProvider } from 'pyro-components'
import { firebaseConnect } from 'react-redux-firebase'

import theme from 'config/theme'
import store, { history } from 'config/redux'
import firebaseApp from 'config/firebase'
import Router from 'app/router'

// workaround to use the same firebase in react-redux-firebase and in pyro-components
import { compose } from 'redux'
const FirebaseProviderWrapper = ({ firebase, children }) => (
  <FirebaseProvider {...{ firebaseApp: firebase }}>{children}</FirebaseProvider>
)
const FBProv = firebaseConnect()(FirebaseProviderWrapper)

const App = () => {
  return (
    <Provider {...{ store }}>
      <ConnectedRouter {...{ history }}>
        <MuiThemeProvider {...{ theme }}>
          <FBProv>
            <Router />
          </FBProv>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
