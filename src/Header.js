import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="sidenav__search">
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search"></i>
        </div>

      </div>
    </div>
  );
}

export default Header;