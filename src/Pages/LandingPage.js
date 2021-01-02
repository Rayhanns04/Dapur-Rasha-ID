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
import KuePasar from "../components/Kuepasar";
import Minuman from "../components/Minuman";
import Brownis from "../components/Brownis";
import Bolu from "../components/Bolu";
import Pizza from "../components/Pizza";
import Burger from "../components/Burger";
import Donut from "../components/Donut";

function LandingPage() {
  return (
    <div>
      <div className="container">
        <Navbar />

        <Slider slides={Images} />

        <div>
          <Cta />
        </div>

        <div id="Roti">
          <Roti />
        </div>

        <div id="Donut">
          <Donut />
        </div>

        <div id="Burger">
          <Burger />
        </div>

        <div id="Pizza">
          <Pizza />
        </div>

        <div id="Bolu">
          <Bolu />
        </div>

        <div id="Brownis">
          <Brownis />
        </div>

        <div id="Minuman">
          <Minuman />
        </div>

        <div id="KuePasar">
          <KuePasar />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
