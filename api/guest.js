import axios from "@/axios";

// show all guests
export const allGuests = () => {
  return axios.get("/notes");
};

// screate new massage
export const newMessage = () => {
  return axios.post("/notes");
};

///delete guest
export const deleteGuestById = payload => {
  return axios.delete("/notes/id", payload);
};
