import { POS_ORDER } from "./types"


export const posOrder = (details) => {
    return (dispatch) => {
        dispatch({
            type: POS_ORDER.ALL_ORDERS,
            payload: details
        })
    }
}