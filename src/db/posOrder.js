import axios from "axios";
const BASE_URL = "http://localhost:8081";

export const createPosOrderInDb = (data) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${BASE_URL}/api/createposorder`, data)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => reject(err));
    });
};



export const getPosOrdersFromDb = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/api/getposorders`).then(res => {
            resolve(res.data)
        }).catch(err => reject(err))
    })
}