import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";
import "./style.css";
const SearchBar = ({ handleSearchTvShow }) => {
  const [searchValue, setSearchValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue.trim()) {
      handleSearchTvShow(searchValue);
    }
    setSearchValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchbar-group">
        <SearchIcon size={27} className="icon" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="input"
          type="text"
          placeholder="Search a tv show that you may like"
        />
      </div>
    </form>
  );
};

export default SearchBar;
