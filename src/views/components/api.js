import axios from "axios";
export const axiosRequest = axios.create({
  baseURL : "http://192.168.43.157:8080/"
});