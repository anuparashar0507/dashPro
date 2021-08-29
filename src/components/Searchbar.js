import React from "react";

export const Searchbar = ({ filter, setFilter }) => {
  return (
    <input
      className="search-input"
      type="text"
      name="search"
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default Searchbar;
