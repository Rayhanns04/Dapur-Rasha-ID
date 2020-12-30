import React from "react";
import Slider from "../components/Slider";
import { Logo, MapPin } from "../constants/Icons";
import Images from "../constants/Images";
import "../Styling/NonResponsive.css";
import "../Styling/Responsive.css";
import Cta from "../components/Cta";
import Roti from "../components/Roti";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

function LandingPage() {
  return (
    <div>
      <div className="container">
        {/* <div className="navbar">
          <div className="left">
            <img src={Logo} alt="Logo" />
            <h1 className="logo">DAPUR</h1>
            <h1 className="logo-purple">RASHA</h1>
          </div>
          <div className="right">
            <a href="#roti" className="navbar-text">
              Roti
            </a>
            <a href="#" className="navbar-text">
              Donut
            </a>
            <a href="#" className="navbar-text">
              Burger
            </a>
            <a href="#" className="navbar-text">
              Pizza
            </a>
            <a href="#" className="navbar-text">
              Bolu
            </a>
            <a href="#" className="navbar-text">
              Brownis
            </a>
            <a href="#" className="navbar-text">
              Minuman
            </a>
            <a href="#" className="navbar-text">
              Kue Pasar
            </a>
            <div className="location-container">
              <img src={MapPin} alt="MapPin" />
              <a href="#" className="navbar-text-location">
                Lokasi Toko
              </a>
            </div>
            <a href="#" className="navbar-text">
              Hubungi Kami
            </a>
          </div>
        </div>
 */}
        <Navbar />

        <div>
          <Slider slides={Images} />
        </div>

        <div>
          <Cta />
        </div>

        <div id="roti">
          <Roti />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
