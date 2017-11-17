/**
 * The application entry point, mounts the app to the page.
 */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { MuiThemeProvider } from 'material-ui/styles'

import theme from 'config/theme'
import store, { history } from 'config/redux'
import Router from 'app/router'

const App = () => {
  return (
    <Provider {...{ store }}>
      <ConnectedRouter {...{ history }}>
        <MuiThemeProvider {...{ theme }}>
          <Router />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
