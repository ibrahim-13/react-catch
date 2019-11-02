# react-catch

> React component for wrapping Error Boundary

[![NPM](https://img.shields.io/npm/v/react-catch.svg)](https://www.npmjs.com/package/react-catch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Description

***React Catch*** provides a component wrapper to catch error during render and prevent *White Screen*.
This component provides the following advantages: 
* Has a default **Fallback** to show if error occured.
* User preferred **Fallback Component Object** can be passed to the component as `props`.
* An error hander callback can be passed to the `props` to call, when an error is caught.

## Install

```bash
npm install --save react-catch
```

## Usage (*Wrapping <App /> to catch any error occured*)

### Parameters:
>***fallback*** - JSX Component (Must be a component/object, can not be a function)<br>
>***errorHandler(error, errorInfo)*** - A callback to handle error

```jsx
import React, { Component } from 'react'

import ReactCatch from 'react-catch';

ReactDOM.render((
  <ReactCatch
    fallback={<h1>An Error has occured !!</h1>}
    errorHandler={(error, errorInfo) => /** Handle Error Here */}
  >
    <App />
  </ReactCatch>
  ), document.getElementById('root'))
```

## License

Apache-2.0 © [ibrahim-13](https://github.com/ibrahim-13)
