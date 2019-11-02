import React from 'react'
import ReactDOM from 'react-dom'
import ReactCatch from 'react-catch';

import './index.css'
import App from './App'

ReactDOM.render((
  <ReactCatch
    fallback={(
      <h1>An Error has occured !! Please restart the App !</h1>
    )}
    errorHandler={(error, errorInfo) => console.dir(errorInfo)}
  >
    <App />
  </ReactCatch>
  ), document.getElementById('root'))
