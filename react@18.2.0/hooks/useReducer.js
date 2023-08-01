// useReducer
const [items, dispatch] = useReducer(itemsReducer, initialItems);

function handler() {
  dispatch({
    type: "add",
    items: [],
  });
}

function itemsReducer(items, action) {
  switch (action.type) {
    case "add": {
      return [];
    }
  }
}
