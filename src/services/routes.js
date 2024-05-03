import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from '../pages/home/home';
import FormCorrentista from '../pages/correntista/formCorrentista';
import ListCorrentista from '../pages/correntista/listCorrentista';

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/correntista" element={<ListCorrentista/>} />
                <Route path="/correntista/salvar" element={<FormCorrentista/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;