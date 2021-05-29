import axios from "@/axios";

export const register = payload => {
  return axios.post("/register", payload);
};

export const login = payload => {
  return axios.post("/login", payload);
};
