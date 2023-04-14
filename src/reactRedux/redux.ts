import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import ToDoListReducer from "./ToDoListReducer";
import InProgressListReducer from "./InProgressListReducer";

const redusers = combineReducers({
    toDoListIssues: ToDoListReducer,
    inProgressListIssues: InProgressListReducer,
})
//@ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = legacy_createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)));

// const store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware),) це оригінальний творець, а веще перероблений, щоб можна 
// було користуватись розширенням хрома redux DevTols

//@ts-ignore
window.store = store

export default store