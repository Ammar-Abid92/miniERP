import allOrdersReducer from "./reducers/allOrdersReduser";
import { productReducer } from "./reducers/product";
import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cart";
import { posOrderRed } from "./reducers/posOrder";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const appReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  pos_order: posOrderRed,
  allOrders: allOrdersReducer,
  
});
const rootReducer = (state, action) => {
  if (action.type === "CLEAR_CACHE") {
      // for all keys defined in your persistConfig(s)
      storage.removeItem('persist:root')
      // storage.removeItem('persist:otherKey')

      return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export default rootReducer;