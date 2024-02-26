import React from 'react'
import logo from "../icons_assets/Logo.svg"

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="/booking">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
