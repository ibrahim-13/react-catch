import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import ReactCatcher from 'react-catcher';

ReactDOM.render((
  <ReactCatcher
    fallback={
      <h1>
        An Error has occured !!
      </h1>
    }
  >
    <App />
  </ReactCatcher>
), document.getElementById('root'))
