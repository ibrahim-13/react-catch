import * as React from 'react'

export type ReactCatcherProps = {
  fallback: JSX.Element;
  errorHandler?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

type ReactCatcherState = {
  hasError: boolean;
}

export default class ReactCatcher extends React.Component<ReactCatcherProps, ReactCatcherState> {
  constructor(props: ReactCatcherProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.errorHandler) {
      this.props.errorHandler(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?
        this.props.fallback : <h1>Unknown Error !</h1>;
    }

    return this.props.children; 
  }
}