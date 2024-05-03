import React from "react";
import { Link } from "react-router-dom";

const FormCorrentista = () => {
    return (
        <div className="container">
            <h1> Cadastrar Correntista </h1>
            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/correntista"> Listar Correntista </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default FormCorrentista;