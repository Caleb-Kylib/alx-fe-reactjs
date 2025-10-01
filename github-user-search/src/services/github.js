// src/services/github.js
import axios from "axios";

export const getUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
