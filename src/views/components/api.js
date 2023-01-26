import axios from "axios";
export const axiosRequest = axios.create({
  baseURL : "http://192.168.43.58:80/"
});

export const server = "http://192.168.43.58:80/api/"