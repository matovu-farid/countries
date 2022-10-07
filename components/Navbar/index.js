import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav
      className="  relative
    w-full
    flex flex-wrap
    items-center
    justify-end
    p-4
    mb-4
    bg-gray-100
    text-gray-500
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg
    navbar navbar-expand-lg navbar-light"
    >
      <ul className="navbar-nav flex gap-2 flex-col md:flex-row  list-style-none mr-auto ">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/create">Create</NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
