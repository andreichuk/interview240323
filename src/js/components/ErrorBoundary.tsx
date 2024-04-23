import { Component, PropsWithChildren } from "react";

type ErrorMessageProps = {
    readonly message: string
}

function ErrorMessage(props: ErrorMessageProps) {
    return <div>
        { props.message }
    </div>;
}

type ErrorBoundaryState = {
    hasError: boolean
};

export type ErrorBoundaryProps = PropsWithChildren & {
    readonly message: string
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error: unknown, errorInfo: unknown) {
      console.error("Unexpected error", error, errorInfo);
      this.setState({ hasError: true });
    }

    render() {
      if (this.state.hasError) {
        return <ErrorMessage message={ this.props.message } />;
      } else {
        return this.props.children;
      }
    }
  }
