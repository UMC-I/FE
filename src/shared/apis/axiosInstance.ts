import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://umc.mongddang.p-e.kr/",
  withCredentials: true,
});

export default axiosInstance;
