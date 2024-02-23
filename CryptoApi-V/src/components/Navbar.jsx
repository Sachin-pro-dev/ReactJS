import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        {/* <FaCoins className="icon" />
         */}
        <lord-icon
          src="https://cdn.lordicon.com/qhviklyi.json"
          trigger="hover"
          className="coin-logo"
          style={{ width: "65px", height: "65px" }}
        ></lord-icon>

        <h1>
          Crypto<span className="purple">Search</span>
        </h1>
      </div>
    </Link>
  );
};
export default Navbar;
