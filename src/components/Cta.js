import React from "react";
import ctaImage from "../assets/images/cta-img.png";

function Cta() {
  return (
    <div className="cta-container">
      <div className="cta-img">
        <div className="rec-dark"></div>
        <img src={ctaImage} alt="cta img" className="cta-img" />
        <div className="rec-light"></div>
      </div>

      <div className="cta-content">
        <h2 className="cta-title">Cara memesan menu di DapurRasha</h2>
        <p className="cta-value">
          Silahkan klik tombol dibawah ini, nanti akan diarahkan ke Whatsapp.
          Selanjutnya anda bisa tuliskan apa yang ingin anda pesan
        </p>
        <a href="https://api.whatsapp.com/send/?phone=6289524422301&text=Halo%20Kak%20mau pesan">
          <button className="cta-button">Pesan sekarang</button>
        </a>
      </div>
    </div>
  );
}

export default Cta;
