// src/components/Search.jsx
import React, { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const users = await searchUsers({ username, location, minRepos });
      if (users.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(users);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 max-w-2xl mx-auto">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md"
      >
        <input
          type="text"
          placeholder="GitHub username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg px-4 py-2"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <ul className="space-y-4">
          {results.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
