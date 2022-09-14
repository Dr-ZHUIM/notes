import {
  combineReducers
} from "redux"
import filtersReducer from "./reducers/filterRducer"
import todosReducer from "./reducers/todoReducer"

let rootReducer;
export default rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})