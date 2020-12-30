import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { CarouselImageCollection } from "../api/Api";
import { ArrowLeft, ArrowRight } from "../constants/Icons";
import "../Styling/NonResponsive.css";

const Slider = () => {
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = masterDataSource.length;

  useEffect(() => {
    CarouselImageCollection(onReceived);
  }, []);

  const onReceived = (r) => {
    setMasterDataSource(r);
  };

  const RenderItem = masterDataSource.map((e, i) => {
    return (
      <div className={i === current ? "slide active" : "slide"} key={i}>
        {i === current && (
          <img className="img" src={e.img} alt="carouselImage" />
        )}
      </div>
    );
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log("Makanan");
  };

  if (!Array.isArray(masterDataSource) || masterDataSource.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <div className="arrows">
        <div onClick={prevSlide}>
          <img src={ArrowLeft} alt="arrow-left" className="arrow-left" />
        </div>
        <div onClick={nextSlide}>
          <img src={ArrowRight} alt="arrow-right" className="arrow-right" />
        </div>
      </div>

      {RenderItem}
    </div>
  );
};

export default Slider;
