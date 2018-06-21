import * as React from 'react';

interface UIProps {
  counter: number;
  loading: boolean;
}

class UI extends React.PureComponent<UIProps> {
  render() {
    const { counter, loading } = this.props;

    return (
      <div className="ui-overflow-wrap">
        <div className="eightys-text">{counter}</div>
        {loading && (
          <div className="eightys-text eightys-text-loading">Loading...</div>
        )}
        <div className="eightys-grid" />
      </div>
    );
  }
}

export default UI;
