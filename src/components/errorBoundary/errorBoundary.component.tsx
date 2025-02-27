import { ErrorInfo, PureComponent, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  // eslint-disable-next-line sonarjs/function-return-type
  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Opps something went wrong</h1>;
    }

    return children;
  }
}
