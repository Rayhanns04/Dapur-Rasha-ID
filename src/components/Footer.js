import React from "react";
import { Facebook, TikTok, WhatsApp, Youtube } from "../constants/Icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="top-1">
          <div className="top-1-section">
            <a className="footer-text-top" href="#">
              ROTI
            </a>
            <a className="footer-text-top" href="#">
              DONUT
            </a>
            <a className="footer-text-top" href="#">
              BURGER
            </a>
          </div>
          <div className="top-1-section">
            <a className="footer-text-top" href="#">
              PIZZA
            </a>
            <a className="footer-text-top" href="#">
              BOLU
            </a>
            <a className="footer-text-top" href="#">
              BROWNIS
            </a>
          </div>
          <div className="top-1-section">
            <a className="footer-text-top" href="#">
              MINUMAN
            </a>
            <a className="footer-text-top" href="#">
              KUE PASAR
            </a>
            <a className="footer-text-top" href="#">
              HUBUNGI KAMI
            </a>
          </div>
          <div className="top-1-section">
            <a className="footer-text-top" href="#">
              LOKASI TOKO
            </a>
          </div>
        </div>

        <div className="top-2">
          <p className="footer-text-top">SOCIAL MEDIA</p>
          <div className="social-media-icon">
            <a href="https://api.whatsapp.com/send/?phone=6289524422301&text=Halo%20Kak%20mau pesan">
              <img src={WhatsApp} alt="Whatsapp" />
            </a>
            <a href="https://www.facebook.com/umy.yunus.167">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="http://">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="http://">
              <img src={TikTok} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text-bottom">
          COPYRIGHT DapurRasha 2020 - TERMS & CONDITIONS PRIVACY POLICY
        </p>
      </div>
    </div>
  );
};

export default Footer;
