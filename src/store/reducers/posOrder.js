
import { POS_ORDER } from "../actions/types";
import initialState from "./initialState";


export var posOrderRed = (state = initialState.pos_order, action) => {
    console.log("AMMuuuuu--->", action.payload)
    switch (action.type) {
      case POS_ORDER.ALL_ORDERS:
        console.log("INSIDE POS ORDER---->",state)
        return { ...state, ["pos_order"]: action.payload };
  
      default:
        return state;
    }
};