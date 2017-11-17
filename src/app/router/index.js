/**
 * Define your application routes in this file.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import RootPage from './pages/Root'
import LoginPage from './pages/LogIn'
import SignupPage from './pages/SignUp'
import Layout from './pages/Layout'

const withLayout = Component => () => (
  <Layout>
    <Component />
  </Layout>
)

const Router = () => (
  <div {...{ style: { display: 'flex', flex: 1 } }}>
    <Route {...{ component: withLayout(RootPage), exact: true, path: '/' }} />
    <Route
      {...{ component: withLayout(LoginPage), exact: true, path: '/login' }}
    />
    <Route
      {...{ component: withLayout(SignupPage), exact: true, path: '/signup' }}
    />
  </div>
)

export default Router
