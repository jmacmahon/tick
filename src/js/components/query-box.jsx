import React from 'react';
import { connect } from 'react-redux';

import { queryInputBlur } from '../store/actions/focus';

class QueryBox extends React.Component {
  componentDidUpdate() {
    if (this.props.hasFocus) {
      this.myInput.focus();
    }
  }

  render() {
    return (
      <input ref={(myInput) => { this.myInput = myInput; }} onBlur={this.props.blur} />
    );
  }
}

const mapState = state => ({
  hasFocus: state.focus.queryBoxHasFocus,
});

const mapDispatch = dispatch => ({
  blur: () => dispatch(queryInputBlur),
});

export default connect(mapState, mapDispatch)(QueryBox);
