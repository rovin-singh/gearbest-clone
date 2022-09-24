import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/reducer";

const rootreducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
