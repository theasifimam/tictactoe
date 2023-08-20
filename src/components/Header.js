import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-folder">Add Folder</NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
