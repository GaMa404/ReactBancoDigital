import React, { useEffect, useState } from "react";
import NavBar from "../../components/navbar/navbar";
import "./home.css";

const Home = () => {
    return (
        <div className="container-home">
            <NavBar/>
            <h1> Página Inicial </h1>
        </div>
    );
}
export default Home;