import * as React from 'react';

interface LogsProps {
  logs: string[];
}

interface LogProps {
  log: string;
}

class Log extends React.PureComponent<LogProps> {
  render() {
    const { log } = this.props;

    return <li className="log">{log}</li>;
  }
}

class Logs extends React.PureComponent<LogsProps> {
  render() {
    const { logs } = this.props;

    return (
      <div className="logs">
        <div className="eightys-text-smaller">Activity</div>
        <ul>{logs.map((log, index) => <Log key={index} log={log} />)}</ul>
      </div>
    );
  }
}

export default Logs;
