import React from "react";
import "./styles.css";
import { GiClover } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="innerNav genLayout">
        <h1><GiClover style={{fontSize: "2rem"}} />charity</h1>

        <div className="navItems">
          <Link to="home">home</Link>
          <Link to="about">about</Link>
          <Link to="donation">donation</Link>
          <Link to="blog">blogs</Link>
          <Link to="contact">contact</Link>
        </div>

        <div className="btn">
          <button>sign in</button>
          <button>donate now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
