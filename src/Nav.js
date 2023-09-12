import React, { useEffect, useState } from "react";
import Logo from "../src/img/logo.png";
import Avatar from "../src/img/avatar.png";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Logo} alt="netflix logo" />
      <img className="nav__avatar" src={Avatar} alt="netflix avatar" />
    </div>
  );
};

export default Nav;
