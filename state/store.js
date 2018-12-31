import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initial_state = {

};

const reducer = (state = initial_state, action) => {

  switch(action.type) {

    default: return state;
  }
};

const initializeStore = (is = initial_state) => {
  return createStore(reducer, is, applyMiddleware(thunkMiddleware));
}

export { initial_state, initializeStore, increment };
