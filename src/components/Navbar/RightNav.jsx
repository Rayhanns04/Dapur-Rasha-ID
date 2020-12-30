import React from "react";
import styled from "styled-components";
import { Logo, MapPin } from "../../constants/Icons";
import "../../Styling/NonResponsive.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: flex-start;
    li {
      color: #fff;
    }
    li a {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#roti" className="navbar-text">
          Roti
        </a>
      </li>
      <li>
        <a href="#" className="navbar-text">
          Donut
        </a>
      </li>
      <li>
        <a href="#" className="navbar-text">
          Burger
        </a>
      </li>
      <li>
        <a href="#" className="navbar-text">
          Pizza
        </a>
      </li>
      <li>
        {" "}
        <a href="#" className="navbar-text">
          Bolu
        </a>
      </li>
      <li>
        {" "}
        <a href="#" className="navbar-text">
          Brownis
        </a>
      </li>
      <li>
        <a href="#" className="navbar-text">
          Minuman
        </a>
      </li>
      <li>
        <a href="#" className="navbar-text">
          Kue Pasar
        </a>
      </li>
      <li>
        <div className="location-container">
          <img src={MapPin} alt="MapPin" />
          <a href="#" className="navbar-text-location">
            Lokasi Toko
          </a>
        </div>
      </li>
      <li>
        <a href="#" className="navbar-text">
          Hubungi Kami
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
