import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png"

const Nav = () => {
    return(
        <nav aria-label="Primary">
            <img src={littlelemon_logo} alt="Little Lemon Logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order">Order Online</a></li>
                <li><a href="#login">Login</a></li>

            </ul>
        </nav>
    )
}

export default Nav;