import { PRODUCT } from "./types";
import { getProductsFromDb } from "../../db/product";


export const getProducts = () => {
    var t0 = Date.now();
    return async (dispatch) => {
        return getProductsFromDb().then((res) => {
        var t1 = Date.now();
        console.log('Time consume (Products Get)= ', (t1 - t0) / 1000, ' sec');
        console.log('Products from Db', JSON.parse(JSON.stringify(res)));
        dispatch({
            type: PRODUCT.GET_PRODUCTS,
            payload: res.data
            });
        });
    };
  };
  