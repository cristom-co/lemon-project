import React from "react";
import food1 from "../images/food1.avif"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section className="header-content">
            <div className="header-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                <Link to="/booking" className="reserve-button" role="button" aria-label="Reserve a table">Reserve Table</Link>
            </div>
            <img src={food1} alt="A plated Mediterranean dish" />
            </section>
        </header>
    )
}

export default Header;