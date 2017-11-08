import React from 'react'

const Layout = ({ children }) => {
  return <div {...{ style: { margin: '0 auto', width: 960 } }}>{children}</div>
}

export default Layout
