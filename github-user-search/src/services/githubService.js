// src/services/githubService.js
import api from "./api";

export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
