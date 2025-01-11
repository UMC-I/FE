import axios from "axios";

const axiosHeader = axios.create({
  baseURL: "http://umc.mongddang.p-e.kr:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosHeader;
