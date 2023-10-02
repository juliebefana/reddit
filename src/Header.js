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

      <div className="header__right">

        <i className="fas fa-bell"></i>
        <img
          src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg"
        />
        
        <div className="header__user">

            <span>Jane Doe</span>
            <i className="fas fa-caret-down"></i>
        </div>

      </div>
    </div>
  );
}

export default Header;