import {createStore} from "redux"
import rootReducer from "./reducer"

let preloadedState;

const preloadedTodoStrings = localStorage.getItem('todos');

if(preloadedTodoStrings){
  preloadedState = {
    todos: JSON.parse(preloadedTodoStrings)
  };
};

const store = createStore(rootReducer,preloadedState);

export default store