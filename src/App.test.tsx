import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from './redux';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
