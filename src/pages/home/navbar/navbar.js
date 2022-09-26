import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navBar">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/productdetail">Product Detail</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export {Navbar}
