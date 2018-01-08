/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <div className="container">
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
