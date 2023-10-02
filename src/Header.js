import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_middle">
        <div className="sidenav_search">
          <img src="/search.png" alt="Search Icon" className="search-icon" />
          <input type="text" name="search" placeholder="Search Reddit" />
        </div>
      </div>
    </div>
  );
}

export default Header;
