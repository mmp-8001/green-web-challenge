// init axios
import axios from "axios";

export const instance = axios.create({
  timeout: 10000,
  baseURL: process.env["API_BASE_URL"]
});
