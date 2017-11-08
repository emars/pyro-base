/**
 * Define your application routes in this file.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import RootPage from './pages/Root'

const Router = () => (
  <div {...{ style: { display: 'flex', flex: 1 } }}>
    <Route {...{ component: RootPage, exact: true, path: '/' }} />
  </div>
)

export default Router
