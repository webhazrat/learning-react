// useReducer
const [state, dispatch] = useReducer(reducer, {count: 0});

// dispatch update state
function handler() {
  dispatch({
    type: "INCREMENT",
  });
}

// reducer function receive state and dispatch action
function itemsReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return {count: state + 1};
    }
  }
}
