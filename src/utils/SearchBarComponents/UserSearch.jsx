import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function UserSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`/auth/users/search?search=${encodeURIComponent(term)}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Server error: ${response.status}`);
        return response.json();
      })
      .then((data) => setResults(data.users))
      .catch((err) => console.error("Search failed:", err));
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
