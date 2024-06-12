import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../pages/home/home';
import Login from '../pages/login/login';
import FormCorrentista from '../pages/correntista/form/formCorrentista';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/correntista/salvar" element={<FormCorrentista/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;