import { TYPES } from "../actions/types";
import initialState from "./initialState";

const allOrdersReducer = (state = initialState.allOrders, action) => {
  if(Object.keys(state).length >= 1){     
    console.log("Hi--->", Object.keys(state).length)

  switch (action.type) {
    case TYPES.ALL_ORDERS:
      return {
        ...state,
        allOrders: [...state.allOrders, action.payload]
      };
    default:
      return state;
  }
}else{
  console.log("HELLO--->",Object.keys(state).length)
  switch (action.type) {
    case TYPES.ALL_ORDERS:
      return {
        ...state,
        allOrders: [action.payload]
      };
    default:
      return state;
  }
}
};

export default allOrdersReducer;
