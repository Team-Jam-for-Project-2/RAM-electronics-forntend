import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import "./Nav.css";

const Nav = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const expandNav = (event) => {
    event.preventDefault();

    setDisplayNav(!displayNav);
  };

  return (
    // <OutsideClickHandler
    //   onOutsideClick={() => {
    //     setDisplayNav(false);
    //   }}
    // >
    <div className="nav">
      <nav id="nav-bar">
        <span id="button-and-name">
          <button onClick={expandNav}>≡</button>
          <h1>RAM electronics 📀🐏📀</h1>
        </span>
        <span id="home-and-cart-links">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/cart" className="links">
            🛒
          </Link>
        </span>
      </nav>
      {displayNav ? (
        <nav className="collapsible-nav">
          <ul className="category-links">
            <li>
              <Link to={`/Appliance`}>Appliances</Link>
            </li>
            <li>
              {" "}
              <Link to={`/tv`}>TVs</Link>
            </li>
            <li>
              <Link to={`/computers`}>Computers and Tablets</Link>
            </li>
            <li>
              <Link to={`/smart`}>Smart Phones and Wearables</Link>
            </li>
            <li>
              {" "}
              <Link to={`/game`}>Gaming</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
    // </OutsideClickHandler>
  );
};

export default Nav;
