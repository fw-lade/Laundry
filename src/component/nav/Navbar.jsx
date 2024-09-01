import React from 'react'
import logo from '../../assets/images/logo.svg'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <p>EaseMan Laundry Services</p>
            </div>
            <div className="links">
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/contact'>Contact Us</Link>
                </ul>
                <button className='nav-btn'>Get Started</button>
            </div>
        </nav>
    </>
  )
}

export default Navbar