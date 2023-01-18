import axios from "axios";
export const axiosRequest = axios.create({
  baseURL : "http://localhost:8080/"
});

export const server = "http:localhost:8080/api/"