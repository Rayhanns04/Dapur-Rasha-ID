import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Logo, MapPin } from "../../constants/Icons";
import "../../Styling/NonResponsive.css";
import { useState } from "react";

const Nav = styled.nav`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  position: sticky;
  padding: 20px 10px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    transform: scale(0.6);
  }
`;

const Navbar = () => {
  const [navbarSticky, setNavbarSticky] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Nav className={navbarSticky ? "navbar active" : "navbar"}>
      <Left className="left">
        <img src={Logo} alt="Logo" />
        <h1 className="logo">DAPUR</h1>
        <h1 className="logo-purple">RASHA</h1>
      </Left>
      <Burger />
    </Nav>
  );
};

export default Navbar;
