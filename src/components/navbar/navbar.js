import React from "react";
import "./navbar.css";


const NavBar = () => {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li className="navbar-logout"> <a href="/"> Sair </a> </li>
                    <li> <a href="/home"> Home </a> </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;