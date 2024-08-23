import React from "react";
import './App.css';




function Header(){
    return(
        <header className="header">
            <h1>TAXI_WEB</h1>
            <nav className="navbar">
                <ul className="ul">
                    <li className="nav"><a href="/"> HOME</a></li>
                    <li className="nav"><a href="/about"> ABOUT</a></li>
                    <li className="nav"><a href="/services"> SERVICES</a></li>
                    <li className="nav"><a href="/contact">CONTACT US</a></li>
                   <button> <li className="nav"><a href="/contact">login</a></li> </button> 
                   
                </ul>
            </nav>

        </header>
    );
}

export default Header; 