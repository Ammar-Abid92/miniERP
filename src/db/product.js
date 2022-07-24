import axios from "axios";
const BASE_URL = "http://localhost:8080";

export const createProductInDb = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/api/createproduct`, data)
      .then((res) => {
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};
export const uploadProductsInDb = (dataFromExcel) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/api/uploadproducts`, dataFromExcel)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
