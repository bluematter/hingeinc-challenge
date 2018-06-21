import * as React from 'react';
import './App.css';
import { RootState } from './redux/reducers';
import { actionCreators } from './redux/actions/counter';
import { connect } from 'react-redux';

interface AppProps {}

interface ConnectProps {
  counter: number;
  onIncrement: typeof actionCreators.increment;
}

type Props = AppProps & ConnectProps;

export const App: React.SFC<Props> = props => (
  <div className="App">
    <p>{props.counter}</p>
    <button id="increment-btn" onClick={() => props.onIncrement(props.counter)}>
      Click to increment
    </button>
    <button id="delay-increment-btn">Click to increment slowly</button>
  </div>
);

const mapStateToProps = (state: RootState, props: AppProps) => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  onIncrement: actionCreators.increment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
