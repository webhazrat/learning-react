// initial state
// actions - will be an object
// reducer - how to do logics
// store
const { createStore } = require("redux");

const initialState = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
