import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://umc.mongddang.p-e.kr:3000",
  withCredentials: true,
});

export default axiosInstance;
