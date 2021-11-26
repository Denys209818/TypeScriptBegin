import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";


var middleware : Array<any> = [
    thunk
];

export const store = createStore(rootReducer, applyMiddleware(...middleware));