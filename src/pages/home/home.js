import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";
import api from "../../services/api";
import "./home.css";
import MastercardLogo from "../../assets/mastercard_logo.png";
import Chip from "../../assets/chip.png";
import Approximation from "../../assets/approximation.png";

const Home = () => {

    // Pegando o id guardado na localstorage
    const user_id = localStorage.getItem("user_id");

    const [userData, setUserData] = useState({
        id: '',
        nome: '',
        email: '',
        data_nasc: '',
        senha: '',
        data_cadastro: '',
    })

    const fetchData = async () => {
        try
        {                                                       
            const response = await api.post('correntista/by_id', {id: parseInt(user_id)}); // Convertendo o valor para int para a requisição na ap
            setUserData(response.data);
        }
        catch(err)
        {
            console.error("Erro ao enviar requisição", err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const first_name = userData.nome.split(' ')[0];

    return (
        <div className="container-home">
            <NavBar/>
            <h1> Olá, {first_name}! </h1>
            
            <div className="container-card">
                <div className="card">
                    <div className="top-card">
                        <div className="chip-symbol">
                            <img id="img-chip" src={Chip}/>
                            <img id="img-approximation" src={Approximation}/>
                        </div>
                        <img id="img-mastercard" src={MastercardLogo}/>
                    </div>
                    <div className="bottom-card">
                        <h1> MV </h1>
                        <p> {userData.nome} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;