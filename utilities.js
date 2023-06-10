// event function with param
<button onClick={() => handleClick(param)}>Click</button>

// Higher order components [a function get a OriginalComponent as a parameter then return a NewComponent]

// Render props pattern [component send as props and then render]


// useReducer
const [items, dispatch] = useReducer(itemsReducer, initialItems);

function handler(){
  dispatch({
    type: 'add',
    items: []
  })
}

function itemsReducer(items, action){
  switch(action.type){
    case 'add' : {
      return []
    }
  }
}

// useContext
const Context = createContext(initialValue);

const val = useContext(Context);
<Context.Provider value={val}>
  {children}  
</Context.Provider>

const val = useContext(Context);
