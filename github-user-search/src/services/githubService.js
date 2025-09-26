// src/services/githubService.js

import axios from "axios";
import api from "./api";

export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
