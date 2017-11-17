import React from 'react'
import ReactDOM from 'react-dom'
import 'typeface-roboto'
import 'index.css'
import fb from 'config/firebase'
import App from './app'

console.log(fb)

ReactDOM.render(<App />, document.getElementById('root'))
