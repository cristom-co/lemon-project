import littlelemon_logo from "../images/littlelemon_logo.png"
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav aria-label="Primary" className="primary-navigation">
            <a className="skip-link" href="#main-content">Skip to content</a>
            <img src={littlelemon_logo} alt="Little Lemon Logo" />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/booking">Reservations</NavLink></li>
                <li><NavLink to="/order">Order Online</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>

            </ul>
        </nav>
    )
}

export default Nav;