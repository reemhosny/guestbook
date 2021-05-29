import axios from "@/axios";

export const register = payload => {
  return axios.post("/register", payload);
};
