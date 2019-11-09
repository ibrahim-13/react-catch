import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>
        <div>Example Component</div>
        {(() => {
          throw new Error('Throwing Error !');
        })()}
      </div>
    )
  }
}