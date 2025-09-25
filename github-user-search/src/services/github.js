import api from "./api";

// Search for users by username
export const searchUsers = async (username) => {
  const response = await api.get(`/search/users?q=${username}`);
  return response.data;
};

// Get details of a single user
export const getUser = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
