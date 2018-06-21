import * as React from 'react';
import './App.css';
import { RootState } from './redux/reducers';
import { actionCreators } from './redux/actions/counter';
import { connect } from 'react-redux';
import AsyncTracker from './AsyncTracker';
import UI from './UI';
import Logs from './Logs';

interface AppProps {}

interface AppState {
  logs: string[];
}

interface ConnectProps {
  counter: number;
  onIncrement: typeof actionCreators.increment;
  onDelayIncrement: typeof actionCreators.delayIncrement;
}

type Props = AppProps & ConnectProps;

class App extends React.PureComponent<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = { logs: [] };
  }

  render() {
    const { counter, onIncrement, onDelayIncrement } = this.props;

    return (
      <div className="App">
        <AsyncTracker
          id="delay-increment"
          initialContent={<UI counter={counter} loading={false} />}
          pendingContent={<UI counter={counter} loading={true} />}
          resolvedContent={<UI counter={counter} loading={false} />}
          onResolve={() => {
            this.setState({
              logs: this.state.logs.concat(
                `Async: ${counter} Hoorahs captain Julian! Lets do it again.`
              )
            });
          }}
        />

        <div className="bottom-buttons">
          <button
            id="increment-btn"
            className="button button-increment"
            onClick={() => {
              onIncrement(counter);
              this.setState({
                logs: this.state.logs.concat(
                  `Sync: Yippie star command Last value ${counter}.`
                )
              });
            }}
          />
          <button
            id="delay-increment-btn"
            className="button button-increment-slowly"
            onClick={() => onDelayIncrement()}
          />
        </div>
        <Logs logs={this.state.logs} />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState, props: AppProps) => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  onIncrement: actionCreators.increment,
  onDelayIncrement: actionCreators.delayIncrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
