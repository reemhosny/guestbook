// axios
import axios from "axios";

const baseURL = "http://localhost:3000/";

let userHasToken = "";
if (process.client) {
  userHasToken = localStorage.getItem("accessToken");
}

export default axios.create({
  baseURL,
  // You can add your headers here
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    jwt: userHasToken ? `${userHasToken}` : ""
  }
});
