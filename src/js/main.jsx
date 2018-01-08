/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import HotKeyRoot from './hotkeys';

import QueryBox from './components/query-box';

const App = () => (
  <Provider store={store}>
    <HotKeyRoot>
      <div className="container">
        <QueryBox />
      </div>
    </HotKeyRoot>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
