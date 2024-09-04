import React from 'react'
import "./Navbar.css"
//img
import logo from "../../assets/logo.png"
//imports
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <>
   <div className="navtop">
    <h3>TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 💚 EASILY SAVE MONEY WHILST CREATING A SUSTAINABLE WARDROBE 🌍</h3>
   </div>
   <nav>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="midlenav-links">
      <Link>Home</Link> 
      <Link>Why Rent?</Link>
      <Link>Clean Out Closet</Link>
      <Link>About Us</Link>
      <Link>Store</Link>
      <Link>Contact Us</Link>
    </div>
    <div className="lastnav-link">
      <Link>Login/Sign Up</Link>
    </div>
   </nav>
   </>
  )
}

export default Navbar
