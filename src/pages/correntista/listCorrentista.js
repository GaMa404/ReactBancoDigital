import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

const ListCorrentista = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        api
            .get("/correntista")
            .then((response) => setUser(response.data))
            .catch((err) => {
                console.error("Ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div className="container">
            <div class="titulo">
                <h1> Listar Correntista </h1>
                
                <nav>
                    <ul>
                        <li> <Link to="/"> Home </Link></li>
                        <li> <Link to="/correntista/salvar"> Cadastrar Correntista </Link></li>
                    </ul>
                </nav>
            </div>

            <table>
                <thead>
                    <th> ID </th>
                    <th> Nome </th>
                    <th> Email </th>
                    <th> Data de Nascimento </th>
                    <th> CPF </th>
                    <th> Data de Cadastro </th>
                </thead>

                {user.map(item => (
                    <tbody>
                        <td>{item?.id}</td>
                        <td>{item?.nome}</td>
                        <td>{item?.email}</td>
                        <td>{item?.data_nasc}</td>
                        <td>{item?.cpf}</td>
                        <td>{item?.data_cadastro}</td>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default ListCorrentista;