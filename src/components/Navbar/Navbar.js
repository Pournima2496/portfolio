import "./Navbar.scss";
import "../../darkTheme.scss";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

import { FaTimes } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="n-left">
        <div className="logo">Pournima</div>
        <div className="icons">
          <BsBrightnessHigh className="i" style={{color:"red"}}/>
          <MdDarkMode className="i" style={{color:"#111"}} />
          <button></button>
        </div>
      </div>
      <div className="n-right">
        <ul
          className={toggleMenu ? "mobile-list" : "list"}
          onClick={() => setToggleMenu(false)}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? <FaTimes /> : <HiMenuAlt2 />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
