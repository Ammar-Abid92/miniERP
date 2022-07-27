import { CART } from "./types"

export const addItem = (item) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: CART.ADD_ITEM,
                payload: item
            })
            resolve(item);
        })
    }
}

export const removeCart = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: CART.REMOVE_CART,
            })
            resolve({ success: true })
        })
    }
}

export const increaseQty = (product_id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: CART.INCREASE_QUANTITY,
                payload: product_id
            })
            resolve({ success: true })
        })
    }
}

export const decreaseQty = (product_id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: CART.DECREASE_QUANTITY,
                payload: product_id
            })
            resolve({ success: true })
        })
    }
}

export const updateQty = (item) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: CART.UPDATE_QUANTITY,
                payload: item
            })
            resolve({ success: true })
        })
    }
}

export const deleteItem = (product_id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch({
                type: CART.REMOVE_ITEM,
                payload: product_id
            })
            resolve({ success: true })
        })
    }
}
