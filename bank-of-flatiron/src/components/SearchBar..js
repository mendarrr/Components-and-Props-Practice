import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <form className="search-box">
        <div className="search-input">
          <input type="text" placeholder="Search your Recent Transactions" className="input" />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;