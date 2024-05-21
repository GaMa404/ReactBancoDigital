import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactInputMask from "react-input-mask";
import api from "../../../services/api";
import "./formCorrentista.css";

const FormCorrentista = () => {

    const [correntista, setCorrentista] = useState({
        nome: '',
        email: '',
        data_nasc: '',
        cpf: '',
    })

    const handleSubmit = async () => {
        try {
            await api.post('/correntista/salvar', correntista);
        }
        catch(err)
        {
            console.error("Erro ao enviar formulário:", err);
        }
    }

    return (
        <div className="container-form">
            <div className="titulo-form">
                <h1> Cadastrar Correntista </h1>
                <nav>
                    <ul>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/correntista"> Listar Correntista </Link></li>
                    </ul>
                </nav>
            </div>

            <div className="formCorrentista">
                <form>
                    <div className="lbl-input">
                        <label> Nome </label>
                        <input id="input-nome" type="text" required value={correntista.nome} onChange={(e) => setCorrentista({ ...correntista, nome: e.target.value})}
                        placeholder="Digite seu nome" />
                    </div>

                    <div className="lbl-input">
                        <label> Email </label>
                        <input type="email" required value={correntista.email} onChange={(e) => setCorrentista({ ...correntista, email: e.target.value})}
                        placeholder="Digite seu email"/>
                    </div>

                    <div className="lbl-input">
                        <label> Data de Nascimento </label>
                        <input type="date" required value={correntista.data_nasc} onChange={(e) => setCorrentista({ ...correntista, data_nasc: e.target.value})}/>
                    </div>

                    <div className="lbl-input">
                        <label> CPF </label>
                        <ReactInputMask mask="999.999.999-99" value={correntista.cpf} required placeholder="Digite seu CPF"
                        onChange={(e) => {
                            const rawValue = e.target.value.replace(/[^\d]/g, '');
                            setCorrentista({ ...correntista, cpf: rawValue})}} />  
                    </div>

                    <button type="submit" onClick={handleSubmit}> Enviar </button>
                </form>
            </div>
        </div>
    );
}

export default FormCorrentista;