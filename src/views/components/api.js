import axios from "axios";
export const axiosRequest = axios.create({
  baseUrl: "https://192.168.43.58:8080"
});