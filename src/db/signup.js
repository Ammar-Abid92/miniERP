import axios from "axios";
const BASE_URL = "http://localhost:8081";

export const signUp = (credentials) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${BASE_URL}/api/signup`, credentials)
      .then((res) => {
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};
