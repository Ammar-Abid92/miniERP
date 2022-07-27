import allOrdersReducer from "./reducers/allOrdersReduser";
import { productReducer } from "./reducers/product";
import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cart";
import { posOrderRed } from "./reducers/posOrder";

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  pos_order: posOrderRed,
  allOrders: allOrdersReducer,
  
});
