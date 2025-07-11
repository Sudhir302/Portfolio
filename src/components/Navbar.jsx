import { NavLink } from "react-router-dom";

import "../style/Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <strong className="logo name">SUDHIR</strong>
            <div className="hero">
                <a className="hero-link" href="#about">ABOUT</a>
                <a className="hero-link" href="#education">EDUCATION</a>
                <a className="hero-link" href="#skill">SKILLS</a>
                <a className="hero-link" href="#project">PROJECTS</a>              
                <a className="hero-link" href="#contact">CONTACT</a>
            </div>
        </nav>
    );
};

export default Navbar;