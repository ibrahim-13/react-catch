import React, { Component } from 'react'

export default class ReactCatcher extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (
        this.props.errorHandler &&
        typeof this.props.errorHandler === "function"
      ) {
      switch (this.props.errorHandler.length) {
        case 0:
          this.props.errorHandler();
          break;
        case 1:
          this.props.errorHandler(error);
          break;
        case 2:
          this.props.errorHandler(error, errorInfo);
          break;
      }
    }
  }

  render() {
    if (this.state.hasError) {
      console.log(this.props.fallback);
      return this.props.fallback ? this.props.fallback : <h1>Unknown Error !</h1>;
    }

    return this.props.children; 
  }
}