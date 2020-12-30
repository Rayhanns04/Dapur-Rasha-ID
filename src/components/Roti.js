import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BreadCollection } from "../api/Api";
import "../Styling/NonResponsive.css";

const Roti = () => {
  const [masterDataSource, setMasterDataSource] = useState([]);

  const onReceived = (r) => {
    setMasterDataSource(r);
  };

  const convertToRupiah = (angka) => {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  };

  useEffect(() => {
    BreadCollection(onReceived);
  }, []);

  const RenderItem = masterDataSource.map((item, index) => {
    return (
      <div key={index} className="itl-card">
        <img className="itl-img" src={item.img} alt="img" />
        <div className="itl-content">
          <p className="itl-title">{item.name}</p>
          <p className="itl-price">{convertToRupiah(item.price)}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="itl-container">
      <div>
        <div className="itl-header">
          <hr className="horizontal-line" />
          <p className="header-title">Roti</p>
          <hr className="horizontal-line" />
        </div>
        <div className="cards">{RenderItem}</div>
      </div>
    </div>
  );
};

export default Roti;
