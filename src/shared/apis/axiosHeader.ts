import axios from "axios";

const axiosHeader = axios.create({
  baseURL: "https://umc.mongddang.p-e.kr/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosHeader;
