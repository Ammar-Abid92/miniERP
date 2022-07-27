import initialState from './initialState';
import { CART } from '../actions/types';

export var cartReducer = (state = initialState.cart, action) => {
    const items = state["ord"];
    switch (action.type) {
        case CART.ADD_ITEM:
            return { ...state, ["ord"]: [...(items || []), action.payload] };
        case CART.REMOVE_ITEM:
            return {
                ...state,
                ["ord"]: items.filter((x) => x.id != action.payload),
              };
        case CART.INCREASE_QUANTITY:
            let indexToInc = items.findIndex(x => x.id === action.payload)
            console.log("IIIIIIIII--->", indexToInc, items, action.payload)

            let itemToInc = items[indexToInc];
            let qToAdd = itemToInc.quantity;
            let objToAdd = {
                
                ...itemToInc,
                quantity: qToAdd + 1,
            }
            items[indexToInc] = objToAdd;
            return { ...state, ["ord"]: [...items] };
        case CART.DECREASE_QUANTITY:
            let indexToDec = items.findIndex(x => x.id === action.payload)
            console.log("IIIIIIIII--->", indexToDec, items, action.payload)
            let itemToDec = items[indexToDec];
            let qToDec = itemToDec.quantity;
            let objToRemove = {
                ...itemToDec,
                quantity: qToDec - 1,
            }
            items[indexToDec] = objToRemove;
            return { ...state, ["ord"]: [...items] };
        case CART.REMOVE_CART:
            return { ...state, ["ord"]: [] };
        case CART.UPDATE_QUANTITY:
            let indexToDUpdate = items.findIndex(x => x.id === action.payload.id)
            items[indexToDUpdate] = action.payload;
            return {
                ...state,
                ["ord"]: items
            }
        default:
            return state
    }
}