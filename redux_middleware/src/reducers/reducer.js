import { combineReducers } from 'redux';

const foo = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_FOO':
      return action.foo;

    default:
      return state;
  }
};

const bar = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_BAR':
      return action.bar;

    default:
      return state;
  }
};

const reducer = combineReducers({
  foo,
  bar,
});

export default reducer;
