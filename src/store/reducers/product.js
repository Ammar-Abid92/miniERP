
import { PRODUCT } from "../actions/types";
import initialState from "./initialState";


export var productReducer = (state = initialState.productsData, action) => {
    switch (action.type) {
      case PRODUCT.GET_PRODUCTS:
        return {
            ...state,
            productsData: action.payload,
          };
  
      default:
        return state;
    }
};