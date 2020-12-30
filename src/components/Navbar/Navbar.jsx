import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Logo, MapPin } from "../../constants/Icons";
import "../../Styling/NonResponsive.css";

const Nav = styled.nav`
  width: 100%;
  height: 25px;
  ${"" /* padding: 0 20px; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
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
  return (
    <Nav>
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
