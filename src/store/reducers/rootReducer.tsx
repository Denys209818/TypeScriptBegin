import { combineReducers } from "redux";
import { productReducer } from "./productReducer";


export const rootReducer = combineReducers({
    products: productReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;