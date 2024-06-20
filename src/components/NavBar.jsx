import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';

function NavBar() {
      
        
    return (
        <div className="nav">
            <p className="logo"><span>S</span>hiva</p>
            <nav>
            <ul>
            <li ><Link to="Home" smooth={true} duration={500}>Home</Link></li>
            <li ><Link to="About" smooth={true} duration={500}>About</Link></li>
            <li><Link to="Projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
            </nav>
            

        </div>
    )
}

export default NavBar;