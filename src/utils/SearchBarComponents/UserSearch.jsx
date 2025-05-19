import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { getToken } from "../../utils/tokenService";

export default function UserSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }
    const url = `https://opsg-backend.onrender.com/auth/user/search?search=${encodeURIComponent(
      term
    )}`;
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setResults(data.users);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div>
      <SearchBar
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search by name or email"
      />

      <button onClick={handleSearch} className="btn btn-primary mb-3">
        Search
      </button>

      <ul>
        {results.map((u) => (
          <li key={u.id}>
            {u.firstName} {u.lastName} ({u.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
