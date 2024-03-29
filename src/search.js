import React from "react";

const Search = ({ searchText, onChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={searchText}
      placeholder="Search (use in:<tag name> to search by tags)" />
  );
};

export default Search;
