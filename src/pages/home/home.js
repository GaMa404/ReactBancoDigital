import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1> Home </h1>

            <nav>
                <ul>
                    <li><Link to="/correntista"> Listar Correntista</Link></li>
                    <li><Link to="/correntista/salvar"> Cadastrar Correntista </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;