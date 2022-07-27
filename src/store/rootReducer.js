import allOrdersReducer from "./reducers/allOrdersReduser";
import { productReducer } from "./reducers/product";
import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cart";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  allOrders: allOrdersReducer
  

});
