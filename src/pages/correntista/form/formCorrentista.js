import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactInputMask from "react-input-mask";
import api from "../../../services/api";
import "./formCorrentista.css";

const FormCorrentista = () => {

    const [correntista, setCorrentista] = useState({
        nome: '',
        email: '',
        data_nasc: '',
        cpf: '',
        senha: '',
        confirmarSenha: '',
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(correntista.senha === correntista.confirmarSenha){
            try {
                await api.post('/correntista/salvar', correntista);
                navigate('/home');
            }
            catch(err)
            {
                console.error("Erro ao enviar formulário:", err);
            }
        }
        else
        {
            alert("As senhas não coincidem!");
        }
    }

    return (
        <div className="container-form">
            <div className="titulo-form">
                <h1> Cadastrar Correntista </h1>
            </div>

            <div className="formCorrentista">
                <form onSubmit={handleSubmit}>
                    <div className="lbl-input">
                        <label> Nome </label>
                        <input id="input-nome" type="text" required value={correntista.nome} onChange={(e) => setCorrentista({ ...correntista, nome: e.target.value})}/>
                    </div>

                    <div className="lbl-input">
                        <label> Email </label>
                        <input type="email" required value={correntista.email} onChange={(e) => setCorrentista({ ...correntista, email: e.target.value})}/>
                    </div>

                    <div className="lbl-input">
                        <label> Data de Nascimento </label>
                        <input type="date" required value={correntista.data_nasc} onChange={(e) => setCorrentista({ ...correntista, data_nasc: e.target.value})}/>
                    </div>

                    <div className="lbl-input">
                        <label> CPF </label>
                        <ReactInputMask mask="999.999.999-99" value={correntista.cpf} required
                        onChange={(e) => {
                            const rawValue = e.target.value.replace(/[^\d]/g, '');
                            setCorrentista({ ...correntista, cpf: rawValue})}} />  
                    </div>

                    <div className="lbl-input">
                        <label> Senha </label>
                        <input type="password" required value={correntista.senha} onChange={(e) => setCorrentista({ ...correntista, senha: e.target.value})}/>
                    </div>

                    <div className="lbl-input">
                        <label> Confirmar Senha </label>
                        <input type="password" required value={correntista.confirmarSenha} onChange={(e) => setCorrentista({ ...correntista, confirmarSenha: e.target.value})}/>
                    </div>

                    <button type="submit"> Enviar </button>
                </form>
            </div>

            <nav>
                <ul>
                    <li><Link to="/"> Já tem uma conta? Faça o login </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default FormCorrentista;