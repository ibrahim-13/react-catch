import React, { Component } from 'react'

import ExampleComponent from 'react-catch'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        {(() => {
          throw new Error('Throwing Error !');
        })()}
      </div>
    )
  }
}
