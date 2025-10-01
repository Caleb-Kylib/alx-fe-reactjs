// src/services/githubService.js
import axios from "axios";

// Existing single-user fetch
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// New: Advanced user search
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
  );

  return response.data.items; // GitHub returns { items: [...] }
};
