import { createStore, combineReducers } from "redux";
import { todos, filter, theme } from "./reducers";

const rootReducer = combineReducers({ todos, filter, theme });
const store = createStore(rootReducer);

export default store;
