const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");
const axios = require("axios");

// constants
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// state
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// action
const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};

const getTodoSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};

const getTodoFailed = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
      };
    case GET_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

// async function
// api url = https://jsonplaceholder.typicode.com/todos
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodoRequest());
    axios
      .get(API_URL)
      .then((data) => dispatch(getTodoSuccess(data.data)))
      .catch((error) => dispatch(getTodoFailed(error.message)));
  };
};

store.dispatch(fetchData());
