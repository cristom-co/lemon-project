import small_logo from "../images/small_logo.png"

const Footer = () => {
    return(
        <footer aria-label="Footer" className="site-footer">
            <div className="footer-container">
            <section className="footer-sections">
            <div >
                <img className="footer-logo" width="100" height="100" src={small_logo} alt="Little Lemon small logo" />
            </div>
            <div>
                <h5>Document Navigation</h5>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </div>
            <div>
                <h5>Contact</h5>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            </div>
            <div>
                <h5>Social Media Links</h5>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
            </ul>
            </div>
            </section>
            </div>
        </footer>
    )
}

export default Footer;