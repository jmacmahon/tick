import { QUERY_INPUT_FOCUS, QUERY_INPUT_BLUR } from '../actions/focus';

const defaultState = {
  queryBoxHasFocus: false,
};

export default function focus(state = defaultState, action) {
  switch (action.type) {
    case QUERY_INPUT_FOCUS:
      return {
        ...state,
        queryBoxHasFocus: true,
      };
    case QUERY_INPUT_BLUR:
      return {
        ...state,
        queryBoxHasFocus: false,
      };
    default:
      return state;
  }
}
