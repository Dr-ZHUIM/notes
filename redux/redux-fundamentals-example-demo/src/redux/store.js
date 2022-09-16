import {createStore,compose,applyMiddleware} from "redux"
import rootReducer from "./reducer"
import {sayHiOnDispatch,TakeYourTime} from "../exampleAddons/enhancers"
import {print1,print2,print3} from "../exampleAddons/middleware"
import {myMiddlewareEs6} from "../myAddons/middleware"

let preloadedState;

const preloadedTodoStrings = localStorage.getItem('todos');

const composeEnhancer = compose(sayHiOnDispatch,TakeYourTime);

const middlewareEnhancer = applyMiddleware(myMiddlewareEs6);

if(preloadedTodoStrings){
  preloadedState = {
    todos: JSON.parse(preloadedTodoStrings)
  };
};

const store = createStore(rootReducer,preloadedState,middlewareEnhancer);

export default store