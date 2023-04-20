import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import Reducer from "./Reducer";

const redusers = combineReducers({
  reducer: Reducer,
});

type reducersType = typeof redusers;
export type appStateType = ReturnType<reducersType>;

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// const store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware),) це оригінальний творець, а вище перероблений, щоб можна
// було користуватись розширенням хрома redux DevTols

//@ts-ignore
window.store = store;

export default store;
