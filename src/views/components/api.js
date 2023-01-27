import axios from "axios";
export const axiosRequest = axios.create({
  baseURL : "http://192.168.43.157:8080/"
});


//change the ipv4 address of your own ip address
export const server = "http://192.168.43.157:8080/api/"