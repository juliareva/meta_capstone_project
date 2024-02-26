import React from 'react'
import logo from "../icons_assets/Logo.svg"

const Footer = () => {
  return (
    <footer>
       <img src={logo} alt="logo"/>
       <div className='center footer-content'>
        <div>
        <p>Navigation</p>
        <div className='footer-nav-links'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
        </ul>
        <ul>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
        </ul>
        </div>
        
        </div>

       <div>
        <p>Contact Us</p>
        <ul >
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">E-mail</a></li>
        </ul>
       </div>

       <div>
        <p>Social Media</p>
        <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
       </div>

      </div>
    </footer>
  )
}

export default Footer
