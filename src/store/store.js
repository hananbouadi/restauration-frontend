import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { FoodReducer } from "./FoodReducer";

export const store = createStore(combineReducers({
      Food: FoodReducer,
}),applyMiddleware(thunk))