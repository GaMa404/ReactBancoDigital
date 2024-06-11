import React from "react";
import "./navbar.css";


const NavBar = () => {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li> <a href="/home"> Home </a> </li>
                    <li> <a href="/correntista"> Listar correntista</a> </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;