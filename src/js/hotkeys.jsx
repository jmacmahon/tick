import React from 'react';
import { connect } from 'react-redux';
import { HotKeys } from 'react-hotkeys';

import { queryInputFocus } from './store/actions/focus';

const map = {
  focusInput: 't',
};

const HotKeyRoot = (props) => {
  const globalHandlers = {
    focusInput: props.focusQueryInput,
  };
  return (
    <HotKeys keyMap={map} handlers={globalHandlers}>
      {props.children}
    </HotKeys>
  );
};

const mapDispatch = dispatch => ({
  focusQueryInput: () => dispatch(queryInputFocus),
});

export default connect(null, mapDispatch)(HotKeyRoot);
