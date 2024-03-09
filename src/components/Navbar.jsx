import { useState } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-4 justify-between items-center navbar">
      <img
        src={logo}
        alt="Logo"
        className="w-[124px] h-[32px] object-contain"
      />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-base text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu"
          // onClick={() => setToggle(!toggle)} // old ways to do it
          onClick={() => setToggle((prev) => !prev)} //* Correct way to do on react
          className="w-6 h-6 cursor-pointer object-contain"
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-base text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-8"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
