import React from "react";
import logo from "../icons_assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div className="center footer-content">
        <div>
          <p>Navigation</p>
          <div className="footer-nav-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/booking">Reservations</a>
              </li>
              <li>
                <a href="#">Order Online</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p>Social Media</p>
          <ul>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com#">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Contact Us</p>
          <ul>
            <li>123 Main Street, Chicago, IL, USA</li>
            <li>+1 (555) 123-4567</li>
            <li>info@littlelemonrestaurant.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
