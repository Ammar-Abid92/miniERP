import axios from "axios";
const BASE_URL = "http://localhost:8081";

export const signIn = (credentials) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/api/signin`, credentials)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
