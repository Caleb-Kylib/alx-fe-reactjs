import React, { useEffect, useState } from "react";
import { getUser } from "./services/github";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Test fetch with GitHub's "octocat"
    getUser("octocat").then(setUser);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      {user ? (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            width={120}
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name}</h2>
          <p>@{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      ) : (
        <p>Loading test user...</p>
      )}
    </div>
  );
}

export default App;
