import React, {useEffect, useState} from "react";
//import { Link } from "react-router-dom";
import api from "../../../services/api";
import "./listCorrentista.css";
import NavBar from "../../../components/navbar/navbar";

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
        <div className="container-list">
            <NavBar/>
            <div className="titulo-list">
                <h1> Listar Correntista </h1>
            </div>

            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Data de Nascimento </th>
                        <th> CPF </th>
                        <th> Data de Cadastro </th>
                    </tr>
                </thead>

                {user.map(item => (
                    <tbody key={item.id}>
                        <tr>
                            <td>{item?.id}</td>
                            <td>{item?.nome}</td>
                            <td>{item?.email}</td>
                            <td>{item?.data_nasc}</td>
                            <td>{item?.cpf}</td>
                            <td>{item?.data_cadastro}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
}

export default ListCorrentista;