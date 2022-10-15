import React from "react";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "./logo";

const NavBar = () => {
  return (
    <nav className="nav w-full h-20   flex">
      <button className="w-1/6 bg-black text-white flex justify-center items-center">
        {" "}
        <GiHamburgerMenu size={24} />{" "}
      </button>
      <div className="Logo w-4/6  h-full bg-white py-2 flex justify-center">
        <Logo className="w-full" />
      </div>
      <button className="border w-1/6 bg-white text-black flex justify-center items-center">
        <FaSearch size={24} />
      </button>
    </nav>
  );
};

export default NavBar;
