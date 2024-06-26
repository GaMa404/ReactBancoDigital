import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import api from "../../services/api";

const Login = () => {

    const [login, setLogin] = useState({
        cpf: '',
        senha: '', 
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/correntista/entrar', login);
            const data = response.data;
            if(data)
            {
                // Guardando o id usuário na local storage do navegador para posteriormente usá-lo em uma requisição
                localStorage.setItem("user_id", data.id);
                navigate('/home');
            }
            else
            {
                alert("Credenciais incorretas!");
            }
        }
        catch(err)
        {
            console.error("Erro ao enviar formulário", err);
        }
    }

    return (
        <div className="container">
            <h1> Login </h1>
            <div className="container-login">
                <form onSubmit={handleSubmit}>
                    <div className="lbl-input-login">
                        <label> CPF </label>
                        <ReactInputMask mask="999.999.999-99" type="text" value={login.cpf} onChange={(e) => {
                            const rawValue = e.target.value.replace(/[^\d]/g, '');
                            setLogin({ ...login, cpf: rawValue })}}/>
                    </div>

                    <div className="lbl-input-login">
                        <label> Senha </label>
                        <input type="password" value={login.senha} onChange={(e) => setLogin({ ...login, senha: e.target.value })}/>
                    </div>

                    <button type="submit"> Enviar </button>
                </form>
            </div>

            <nav>
                <ul>
                    <li><Link to="/correntista/salvar"> Não tem uma conta? Cadastre-se </Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Login;